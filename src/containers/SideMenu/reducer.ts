import produce from 'immer';
import { TypeActions } from './actions';
import { SHOW_SIDE_MENU, HIDE_SIDE_MENU } from './constants';

interface IinitialState {
  isOpen: boolean;
}

export const initialState: IinitialState = {
  isOpen: false,
};

function sideMenu(state: IinitialState = initialState, action: TypeActions) {
  return produce(state, draftState => {
    switch (action.type) {
      case SHOW_SIDE_MENU:
        document.body.style.overflow = 'hidden';
        draftState.isOpen = true;
        break;
      case HIDE_SIDE_MENU:
        document.body.style.overflow = '';
        draftState.isOpen = false;
        break;
      default:
        return draftState;
    }
  });
}

export default sideMenu;
