import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Consumer } from './LoadingProviderWithNewContext';

ButtonWithNewConsumer.propTypes = {
    
};

function ButtonWithNewConsumer({ children }) {
    return (
        <React.Fragment>
            <Consumer children={value => (
                <Button onPress={() => value.setLoading('loading', !value.loading)}>
                    {value.loading ? '로딩 중' : children}
                </Button>
            )}
            />
            <Consumer children={({ loading2 = false, setLoading }) => (
                <Button onPress={() => setLoading('loading2', !loading)}>
                    {loading2 ? '로딩 중' : children}
                </Button>
            )}
            />
            <Consumer children={({ loading = false, loading2 = false }) => (
                <Button onPress={() => setLoading('loading2', !loading)}>
                    {loading && loading2 ? '로딩 중' : children}
                </Button>
            )}
            />
        </React.Fragment>

    );
}

export default ButtonWithNewConsumer;