import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ButtonWithContext from './ButtonWithContext'; // 소비자

function RowBComponent() {
    return <Button>버튼</Button>;
}

function RowCComponent() {
    return <ButtonWithContext>버튼</ButtonWithContext>; // 소비자 컴포넌트 출력
}

function TableComponent() {
    return (
        <table>
            <RowBComponent />
            <RowCComponent />
        </table>
    );
}

class HomePageComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { loading: false };

        // 콜백함수 setLoading() 을 소비자에 전달해 데이터를 변경할 예정이므로
        // 공급자의 this를 바인딩한다. this를 바인딩하지 않는다면 콜백 함수가 실행되는 소비자 컴포넌트에서
        // 공급자의 setState() 함수에 접근하지 못하므로 오류가 발생한다.
        this.setLoading = this.setLoading.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
    }

    // 소비자는 getChildContext() 함수를 통해 loading과 setLoading() 함수를 전달받는다.
    getChildContext(){ 
        return {
            loading: this.state.loading,
            setLoading: this.setLoading,
        };
    }

    setLoading(loading) {
        this.setState({ loading });
    }

    toggleLoading() {
        this.setState(({ loading }) => ({ loading: !loading }));
    }

    render() {
        return (
            <div>
                <TableComponent />
                <Button onPress={this.toggleLoading}>상태 변경</Button>
            </div>
        )
    }
}

HomePageComponent.childContextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
}

export default HomePageComponent;