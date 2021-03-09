import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions';

class AvdReduxApp03 extends PureComponent {
    store = configureStore({ loading: false });

    componentDidMount() {
        this.store.dispatch(
            setCollection([
                { id: 1, name: 'John', age: 20 },
                { id: 2, name: 'Park', age: 35 },
            ]),
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}

export default AvdReduxApp03;