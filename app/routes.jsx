import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './containers/ConnectedShopPage.jsx';
import ItemDetailPage from './containers/ConnectedItemDetailPage.jsx';
import CartPage from './containers/ConnectedCartPage.jsx';

export default (
    <Switch>
        <Route exact path="/" component={ShopPage} />
        <Route exact path="/detail/:id" component={ItemDetailPage} />
        <Route exact path="/cart" component={CartPage} />
    </Switch>
);
