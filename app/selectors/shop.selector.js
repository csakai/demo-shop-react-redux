import { createSelector } from 'reselect';

export const itemsSelector = state => state.shop.items;
export const loadingSelector = state => state.shop.loading;
const loadedSelector = state => state.shop.loaded;

const detailIdSelector = state => state.shop.detailId;


export const detailItemSelector = createSelector(
    itemsSelector,
    detailIdSelector,
    (items, detailId) => items.find(item => item.id === detailId)
);

export const readySelector = createSelector(
    loadingSelector,
    loadedSelector,
    detailItemSelector,
    (loading, loaded, detailItem) => !loading && loaded && !!detailItem
);
