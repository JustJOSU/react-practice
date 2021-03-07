import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Consumer } from './FormContext';

class FormSubmitButton extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <Consumer>
                {({ submit }) => (
                    <Button primary onPress={submit}>
                        {children}
                    </Button>
                )}
            </Consumer>
        );
    }
}


FormSubmitButton.propTypes = {
    children: PropTypes.node.isRequired,
};


export default FormSubmitButton;