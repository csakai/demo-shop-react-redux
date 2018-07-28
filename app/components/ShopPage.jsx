import PropTypes from 'prop-types';
import React from 'react';

import ShopItemList from '../containers/ConnectedShopItemList.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadPage();
    }

    render() {
        const { loading } = this.props;

        return (
            <div className="shop-page-container">
                <h1 className="page-title">
                    Demo Shop
                </h1>
                {loading && (
                    <div className="loading-screen">
                        Shop loading...
                    </div>
                )}
                {!loading && (
                    <ShopItemList />
                )}
            </div>
        );
    }
}

ShopPage.propTypes = {
    loadPage: PropTypes.func,
    loading: PropTypes.bool
};

export default ShopPage;
