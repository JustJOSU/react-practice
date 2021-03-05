import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../examples/06/Modal';
import Button from '../examples/Button';
import Text from '../examples/Text';
import ButtonWithModal from '../examples/06/ButtonWithModal';

storiesOf('Modal', module)
    .addWithJSX('기본 설정', () => (
        <Modal>
            <div>
                <Text>
                    정말로 삭제하시겠습니까?
                </Text>
            </div>
            <Button primary>예</Button>
            <Button>닫기</Button>
        </Modal>
    ))
    .addWithJSX('ButtonWithModal', () => <ButtonWithModal/>);