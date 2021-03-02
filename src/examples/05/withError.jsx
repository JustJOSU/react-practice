import React from 'react';
import withStyles, { css } from '../withStyles';

export default function(defaultMessage) { // 오류 메세지를 커링 함수의 인자로 전달
    return WrappedComponent => {
        const { displayName, nae: componentName } = WrappedComponent;
        const wrappedComponentName = displayName || componentName;

        function ComponentWithError({ // 반환되는 확장 컴포넌트를 함수형 컴포넌트로 작성
            hasError,
            errorMessage,
            styles,
            ...props
        }) {
            return (
                <React.Fragment>
                    <WrappedComponent {...props} />
                    {hasError && <div {...css(styles.error)}>{errorMessage}</div>}  
                </React.Fragment>
            );
        };

        ComponentWithError.defaultProps = {
            errorMessage: defaultMessage, // 인자로 전달받은 오류 메시지를 기본 오류 메시지로 지정
        };

        ComponentWithError.displayName = `withError(${wrappedComponentName})`; 
        return withStyles(({color}) => ({
            error: {
                color: color.error,
            }
        }))(ComponentWithError);
    };
}