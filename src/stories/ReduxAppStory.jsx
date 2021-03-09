import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../examples/07/ReduxApp';
import ReduxApp02 from '../examples/07/ReduxApp02';
import ReduxApp03 from '../examples/07/ReduxApp03';
import AdvReduxApp from '../examples/07/AdvReduxApp';
import AdvReduxApp02 from '../examples/07/AdvReduxApp02';
import AdvReduxApp03 from '../examples/07/AdvReduxApp03';
import AdvReduxApp04 from '../examples/07/AdvReduxApp04';
import AdvReduxApp05 from '../examples/07/AdvReduxApp05';
import AdvReduxApp06 from '../examples/07/AdvReduxApp06';
import AdvReduxApp07 from '../examples/07/AdvReduxApp07';
import AdvReduxApp08 from '../examples/07/AdvReduxApp08';

storiesOf('ReduxApp', module)
    .addWithJSX('기본 스토어 설정', () => (
        <ReduxApp />
    ))
    .addWithJSX('dispatch 예제', () => (
        <ReduxApp02 />
    ))
    .addWithJSX('reducer 예제', () => (
        <ReduxApp03 />
    ))
    .addWithJSX('reducer 분리하기', () => (
        <AdvReduxApp />
    ))
    .addWithJSX('action 분리하기', () => (
        <AdvReduxApp02 />
    ))
    .addWithJSX('Graph DB 예제', () => (
        <AdvReduxApp03 />
    ))
    .addWithJSX('Graph DB 예제 2', () => (
        <AdvReduxApp04 />
    ))
    .addWithJSX('Graph DB 값 변경 예제', () => (
        <AdvReduxApp05 />
    ))
    .addWithJSX('화면 & 데이터 컴포넌트 분리 예제', () => (
        <AdvReduxApp06 />
    ))
    .addWithJSX('데이터 컴포넌트에 액션 연결하기', () => (
        <AdvReduxApp07 />
    ))
    .addWithJSX('최종 액션 확인', () => (
        <AdvReduxApp08 />
    ))