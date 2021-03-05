import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../examples/06/HomePageComponent';
import HomePageWithProvider from '../examples/06/HomePageWithProvider';
import HomePageComponentWithTwoProvider from '../examples/06/HomePageWithTwoProvider';

storiesOf('HomePageComponent', module)
    .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
    .addWithJSX('Provider 예제', () => <HomePageWithProvider />)
    .addWithJSX('이중 Provider 예제', () => <HomePageComponentWithTwoProvider />);
