const moment = require('moment');
const { raw } = require('objection');
const { transaction } = require('objection');
const MealPrice = require('../models/MealPrice');

const getsByUserId = async userId => {
  try {
    return MealPrice.query()
      .select(
        'mealPrice',
        raw('to_char("startedAt", \'YYYY-MM-DD\')').as('startedAt'),
        raw('to_char("endedAt", \'YYYY-MM-DD\')').as('endedAt'),
      )
      .where({ userId })
      .orderBy('startedAt', 'DESC');
  } catch (error) {
    throw error;
  }
};

const getMealPriceByUserIdWithDate = async (userId, date) => {
  try {
    const row = await MealPrice.query()
      .select('mealPrice')
      .where({ userId })
      .whereRaw(`'${date}' BETWEEN "startedAt" AND "endedAt"`)
      .first();
    if (row && row.mealPrice) {
      return Number(row.mealPrice);
    }
    return 0;
  } catch (error) {
    throw error;
  }
};

const reserveMealPrice = async (userId, mealPrice, reserveDate) => {
  try {
    const maxEndedAt = '9999-12-31';
    const parsedReserveDate = moment(`${reserveDate}/01`, 'YYYY/MM/DD').format(
      'YYYY-MM-DD',
    );
    return transaction(MealPrice.knex(), async trx => {
      // find
      const firstRow = await MealPrice.query(trx)
        .where({ userId })
        .orderBy('startedAt', 'ASC')
        .first();

      if (firstRow) {
        const row = await MealPrice.query(trx)
          .where({ userId })
          .whereRaw(`'${parsedReserveDate}' BETWEEN "startedAt" AND "endedAt"`)
          .first();
        if (row) {
          row.startedAt = moment(row.startedAt).format('YYYY-MM-DD');
          row.endedAt = moment(row.endedAt).format('YYYY-MM-DD');

          if (row.startedAt === parsedReserveDate) {
            // update mealPrice on currentPrice
            await MealPrice.query(trx)
              .findById(row.id)
              .patch({ mealPrice });
          } else {
            let endedAt;
            const prevEndedAt = moment(parsedReserveDate, 'YYYY-MM-DD')
              .subtract(1, 'days')
              .endOf('month');
            if (row.endedAt === maxEndedAt) {
              endedAt = maxEndedAt;
            } else {
              const prevStartedAt = moment(row.endedAt, 'YYYY-MM-DD')
                .subtract(1, 'days')
                .endOf('month');
              endedAt = prevStartedAt.format('YYYY-MM-DD');
            }
            // insert new record
            await MealPrice.query(trx).insert({
              mealPrice,
              userId,
              startedAt: parsedReserveDate,
              endedAt,
            });
            // update prev record if exists
            await MealPrice.query(trx)
              .findById(row.id)
              .patch({ endedAt: prevEndedAt });
          }
        } else {
          const endedAt = moment(firstRow.startedAt, 'YYYY-MM-DD')
            .subtract(1, 'days')
            .format('YYYY-MM-DD');
          // insert new record
          await MealPrice.query(trx).insert({
            mealPrice,
            userId,
            startedAt: parsedReserveDate,
            endedAt,
          });
        }

        await MealPrice.query(trx)
          .patch({
            reservePrice: mealPrice,
            reserveDate,
            updated_at: new Date().toISOString(),
          })
          .where({ userId });
      }
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getMealPriceByUserIdWithDate,
  reserveMealPrice,
  getsByUserId,
};
