import ModalActionTypes from './modal.types';

export const modalToggle = (payload) => ({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: payload
});