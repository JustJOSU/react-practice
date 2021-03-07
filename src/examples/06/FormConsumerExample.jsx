import React, { PureComponent } from 'react';

import Input from '../InputWithStyle';
import { Consumer } from './FormContext';

class FormConsumerExample extends PureComponent {
    render() {
        const { name, ...otherProps } = this.props;
        console.dir(this.props);
        return (
            <Consumer>
                {({ values, errors, onChange }) => (
                    <Input 
                        {...otherProps} 
                        name={name} 
                        onChange={onChange} 
                        value={values[name]} 
                        errorMessage={errors[name]}
                     />
                )}
            </Consumer>
        );
    }
}

export default FormConsumerExample;