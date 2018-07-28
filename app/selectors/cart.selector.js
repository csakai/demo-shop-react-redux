import { createSelector } from 'reselect';
import { itemsSelector as shopItemsSelector } from './shop.selector';
import beautifyCurrency from '../util/beautifyCurrency';

export const cartItemsSelector = state => state.cart.items;

export const hasItemsSelector = createSelector(
    cartItemsSelector,
    cartItems => !!cartItems.length
);

export const cartItemsWithDetailsSelector = createSelector(
    shopItemsSelector,
    cartItemsSelector,
    (shopItems, cartItems) => {
        const cartItemsHash = cartItems.reduce((acc, item) => ({
            ...acc,
            [item.id]: {
                ...item
            }
        }), {});
        shopItems.forEach(({id, price, title}) => {
            if (cartItemsHash[id]) {
                cartItemsHash[id].price = price;
                cartItemsHash[id].title = title;
            }
        });
        return cartItems.map(({id}) => ({
            ...cartItemsHash[id]
        }));
    }
);

const _createValueDisplaySelector = valueFn =>
    state => beautifyCurrency(valueFn(state));

const cartItemsSubtotalSelector = createSelector(
    cartItemsWithDetailsSelector,
    cartItemsWithDetails => cartItemsWithDetails.reduce(
        (acc, {price, quantity}) => acc + (price * quantity),
        0
    )
);

const cartItemsTaxSelector = createSelector(
    cartItemsSubtotalSelector,
    cartItemsSubtotal => {
        const rawTax = cartItemsSubtotal * 0.08875;
        return Number.parseFloat((rawTax - (rawTax % 0.01)).toFixed(2));
    }
);

const cartItemsShippingSelector = () => 9.99;

const cartItemsTotalSelector = createSelector(
    cartItemsSubtotalSelector,
    cartItemsTaxSelector,
    cartItemsShippingSelector,
    (cartItemsSubtotal, cartItemsTax, cartItemsShipping) => {
        return Number.parseFloat((cartItemsSubtotal + cartItemsTax + cartItemsShipping).toFixed(2));
    }
);

export const cartItemsSubtotalDisplaySelector = _createValueDisplaySelector(cartItemsSubtotalSelector);
export const cartItemsTaxDisplaySelector = _createValueDisplaySelector(cartItemsTaxSelector);
export const cartItemsShippingDisplaySelector = _createValueDisplaySelector(cartItemsShippingSelector);
export const cartItemsTotalDisplaySelector = _createValueDisplaySelector(cartItemsTotalSelector);
