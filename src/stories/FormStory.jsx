import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormProvider from '../examples/06/FormProvider';
import FormConsumerExample from '../examples/06/FormConsumerExample';
import FormSubmitButton from '../examples/06/FormSubmitButton';

const validate = ({ name, age }) => {
    let errors = {};
    if (!name) errors['name'] = '이름을 입력해야 합니다.';
    if (age && age < 18) errors['age'] = '나이는 18세 이상이어야 합니다.';
    return errors;
};

storiesOf('From', module)
    .addWithJSX('유효성 검사', () => (
        <FormProvider validate={validate} onSubmit={action('폼 전송')}>
            <FormConsumerExample name="name" label="이름" />
            <FormConsumerExample name="age" label="나이" />
            <FormConsumerExample name="totalAmount" label="금액" />
            <FormSubmitButton>전송</FormSubmitButton>
        </FormProvider>
    ));