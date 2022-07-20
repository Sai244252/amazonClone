export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      index >= 0
        ? newBasket.splice(index, 1)
        : console.warn(
            `Can't remove the product (id : ${action.id} as it is not in basket`
          );
      return {
        ...state,
        /* basket: state.basket.filter((item) => item.id !== action.payload), 
          This aproach works but, when x(>1) of same item are added to cart, and once we remove one of those items, it removes all those x items, instead send newBasket. 
        */
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
