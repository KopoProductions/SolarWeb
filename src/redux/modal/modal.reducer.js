import ModalActionTypes from './modal.types';

const INITIAL_STATE = {
    modalIsOpen: false,
    card: ''
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ModalActionTypes.TOGGLE_MODAL:
            return {
                ...state,
                modalIsOpen: !state.modalIsOpen,
                card: action.payload
            }
        default:
            return state;
    }
}

export default modalReducer;