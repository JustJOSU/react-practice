import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState } from '../examples/05/withState';

storiesOf('WithState', module)
    .addWithJSX('CounterWithCountState', () => <CounterWithCountState/>);