import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';

class AdvReduxApp02 extends PureComponent {
    store = configureStore({ loading: false });

    componentDidMount() {
        this.store.dispatch(setLoading(true));
        this.store.dispatch(resetLoading());
        this.store.dispatch(setUser({ name: 'Cho', age: 26 }));
    }
    render() {
        return (
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}

export default AdvReduxApp02;