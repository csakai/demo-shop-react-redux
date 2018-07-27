import { createSelector } from 'reselect';

export const shopItemsSelector = state => state.items.data;

export const cartItemsSelector = state => state.cart.items;

export const hasItemsSelector = createSelector(
    cartItemsSelector,
    cartItems => !!cartItems.length
);

export const cartItemsWithDetailsSelector = createSelector(
    shopItemsSelector,
    cartItemsSelector,
    (shopItems, cartItems) => {
        const cartItemsHash = cartItems.reduce((acc, item, index) => ({
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
    state => `$${valueFn(state).toFixed(2)}`;

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
        return Number.parseFloat((rawTax-(rawTax%.01)).toFixed(2));
    }
);

const cartItemsShippingSelector = () => 9.99;

const cartItemsTotalSelector = createSelector(
    cartItemsSubtotalSelector,
    cartItemsTaxSelector,
    cartItemsShippingSelector,
    (cartItemsSubtotal, cartItemsTax, cartItemsShipping) => {
        return (cartItemsSubtotal + cartItemsTax + cartItemsShipping).toFixed(2);
    }
);

export const [
    cartItemsSubtotalDisplaySelector,
    cartItemsTaxDisplaySelector,
    cartItemsShippingDisplaySelector,
    cartItemsTotalDisplaySelector
] = [
    cartItemsSubtotalSelector,
    cartItemsTaxSelector,
    cartItemsShippingSelector,
    cartItemsTotalSelector
].map(_createValueDisplaySelector)
