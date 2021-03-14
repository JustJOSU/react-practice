import React, { PureComponent } from 'react';
import Modal from '../Modal'; // 자동적으로 index.js 파일을 참조하기 때문에 폴더명만 명시해도 됨
import { Provider } from './context';

export default function createModalProvider(ContentMap = {}) {
    return class ModalProvider extends PureComponent {
        constructor(props) {
            super(props);

            this.state = { showModal: false };
            this.handleClose = this.handleClose.bind(this);
            this.handleOpen = this.handleOpen.bind(this);
        }
        handleOpen(contentId, modalProps) {
            this.contentId = contentId;
            this.modalProps = modalProps;
            this.setState({ showModal: true });
        }
        handleClose() {
            this.setState({ showModal: false });
        }
        render() {
            const { children } = this.props;
            const { showModal } = this.state;
            const ModalContent = ContentMap(this.contentId);

            return (
                <Provider
                    value={{
                        openMoal: this.handleOpen,
                        closeModal: this.handleClose,
                    }}
                >
                    {children}
                    {showModal && ModalContent && (
                        <Modal>
                            <ModalContent {...this.modalProps} />
                        </Modal>
                    )}
                </Provider>
            );
        }
    };
}
