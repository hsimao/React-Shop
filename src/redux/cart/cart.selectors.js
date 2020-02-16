import { createSelector } from 'reselect';

// reselect 解決 selector 每次 store 發生變化都會調用的性能消耗問題
// reselect 利用閉包特性來記憶資料，並判斷資料如果沒有變化就不重新計算
const selectCart = state => state.cart;

// 記憶 cart.cartItems 資料
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems,
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden,
);

// 每次計算 items 總數量時先檢查 selectCartItems 原本資料狀態，如有更改才執行
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, it) => acc + it.quantity, 0),
);
