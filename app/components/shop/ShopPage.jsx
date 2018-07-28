import PropTypes from 'prop-types';
import React from 'react';

import ShopItemList from '../../containers/shop/ConnectedShopItemList.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.loadPage();
        }
    }

    render() {
        const { loading } = this.props;

        return (
            <div className="shop-page-container">
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
    loaded: PropTypes.bool,
    loading: PropTypes.bool
};

export default ShopPage;
