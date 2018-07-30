import PropTypes from 'prop-types';
import React from 'react';

import style from './style.scss';

class QuantityStepper extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { onChange } = this.props;
        let newValue = Number.parseInt(event.target.value, 10);
        const wasOutOfBounds = Number.isNaN(newValue) || newValue < 1;
        if (wasOutOfBounds) {
            newValue = 1;
        }
        onChange(newValue, wasOutOfBounds);
    }

    render() {
        const { isDisabled, quantity } = this.props;

        return (
            <input
                className={style.itemQuantityStepper}
                disabled={isDisabled}
                type="number"
                step="1"
                min="1"
                onChange={this.handleChange}
                value={quantity}
            />
        );
    }
}

QuantityStepper.propTypes = {
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    quantity: PropTypes.number
};

export default QuantityStepper;
