import compose from 'recompose/compose';
import withLoading from './withLoading';
import withState from 'recompose/withState';
const withLoadData = withState('isLoading', 'setIsLoading', fasle);

function Component(){
    return '완료(컴포넌트 출력)';
}

const ComponentWithLoading = withLoading('로딩 중')(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

// 조합이 적용되는 순서에 따라 앞의 하이어오더 컴포넌트에서 생성된 프로퍼티가
// 뒤쪽으로 전달되기 때문에 조합의 순서를 주의해야 한다.
const withLoadDataAndLoading = compose(withLoadData, withLoadDing('로딩 중'));
// 조합이 올바르지 못한 예 : compose(withLoadData, withLoading)
// 순서가 올바르지 못한 예 : compose(withLoading('로딩 중'), withLoadData)

const ComponentWithLoadData = withLoadDataAndLoading(ComponentWithLoading);
