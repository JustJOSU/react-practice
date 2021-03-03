import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext({ label, loading, setLoading }) { // 공급자의 데이터를 프로퍼티로 전달
    return (
        <Button onPress={() => setLoading(!loading)}>
            {loading ? '로딩 중' : label}
        </Button>
    );
}

ButtonWithLoadingContext.propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
};

// withLoadingContest 하이어오더 컴포넌트에 Button 컴포넌트를 인자로 전달
export default withLoadingContext(ButtonWithLoadingContext);