import * as types from './actionTypes';

export const saveSelectedItemValue = value => ({
  type: types.SAVE_SELECTED_ITEM_VALUE,
  value,
});

export const resetSelectedItemValue = () => ({
  type: types.RESET_SELECTED_ITEM_VALUE,
});

export const saveClickedItemData = data => ({
  type: types.SAVE_CLICKED_ITEM_DATA,
  data,
});

export const resetClickedItemData = () => ({
  type: types.RESET_CLICKED_ITEM_DATA,
});

export const saveSecSelectedItemValue = value => ({
  type: types.SAVE_SECOND_ITEM_VALUE,
  value,
});

export const resetSecSelectedItemValue = () => ({
  type: types.RESET_SECOND_ITEM_VALUE,
});

export const saveSelectValue = (name, value) => ({
  type: types.SAVE_SELECT_VALUE,
  name,
  value,
});

export const resetSelectValue = name => ({
  type: types.RESET_SELECT_VALUE,
  name,
});
