import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ShopItemList from '../../containers/shop/ConnectedShopItemList.jsx';
import style from './style.scss';

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
        const { loading, tag } = this.props;

        return (
            <div className="shop-page-container">
                {tag && (
                    <div className={style.tagHeaderContainer}>
                        <h2 className={style.tagHeader}>
                            {`Showing items with the ${tag} tag`}
                        </h2>
                        <Link to="/">
                            Show all
                        </Link>
                    </div>
                )}
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
    loading: PropTypes.bool,
    tag: PropTypes.string
};

export default ShopPage;
