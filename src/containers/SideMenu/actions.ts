import { SHOW_SIDE_MENU, HIDE_SIDE_MENU } from './constants';

export type TypeActions = ReturnType<typeof showSideMenu | typeof hideSideMenu>;

export const showSideMenu = () => ({
  type: SHOW_SIDE_MENU,
});

export const hideSideMenu = () => ({
  type: HIDE_SIDE_MENU,
});
