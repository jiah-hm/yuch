const knex = require('../database');
const util = require('../lib/util');

exports.createUser = (req, res) => {
  const {
    username,
    password,
    companyName,
    contactNumber,
    mealPrice,
    lunchQuantity,
    dinnerQuantity,
    bankAccount,
  } = req.body.userInfo;

  // database does not accept empty string for the column with integer type
  const lunchQuantityValue = lunchQuantity === '' ? null : lunchQuantity;
  const dinnerQuantityValue = dinnerQuantity === '' ? null : dinnerQuantity;
  const bankAccountValue = parseInt(bankAccount, 10);

  util
    .bcryptPassword(password)
    .then(hashedPassword =>
      knex('users')
        .insert({
          company_name: companyName.toLowerCase(),
          username: username.toLowerCase(),
          password: hashedPassword.toLowerCase(),
          contact_no: contactNumber,
          meal_price: mealPrice,
          init_lunch_quantity: lunchQuantityValue,
          init_dinner_quantity: dinnerQuantityValue,
          bank_account_id: bankAccountValue,
        })
        .returning('*'),
    )
    .then(() => res.status(200).json(companyName))
    .catch(err => res.status(409).json(err));
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  let companyName;
  return knex('users')
    .where({ username })
    .first()
    .then(user => {
      if (!user) {
        return res.status(401).json('Auth failed');
      }
      if (!util.comparePassword(password, user.password)) {
        return res.status(409).json('Auth failed');
      }
      companyName = user.company_name;
      return util.getRandomToken(user);
    })
    .then(token => res.status(200).json({ token, companyName }))
    .catch(err => res.status(500).json(err));
};
