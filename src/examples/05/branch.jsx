import React from 'react';
import branch from 'recompose/branch';
import Button from '../Button';

// version : 1
// function  isLoading(props) {
//     return props.isLoading;
// }

// function LoadingButton(pprops) {
//     return <Button disabled>로딩 중</Button>;
// }

// export default branch(isLoading,() => LoadingButton,)(Button);

// version : 2
export default branch(
    ({ isLoading }) => isLoading,
    () => () => <Button disabled>로딩 중</Button>
)(Button);