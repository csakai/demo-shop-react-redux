import { createSelector } from 'reselect';
import { tagSelector } from './routing.selector';

export const itemsSelector = state => state.shop.items;

export const filteredItemsSelector = createSelector(
    itemsSelector,
    tagSelector,
    (items, tag) => tag && items.filter(({tags}) => tags.includes(tag)) || items
);

export const loadingSelector = state => state.shop.loading;
const loadedSelector = state => state.shop.loaded;

const detailIdSelector = state => state.shop.detailId;

export const initLoadedSelector = createSelector(
    loadingSelector,
    loadedSelector,
    (loading, loaded) => !loading && loaded);

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
