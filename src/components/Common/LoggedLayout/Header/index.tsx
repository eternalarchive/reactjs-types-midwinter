import React, { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { showSideMenu } from '../../../../containers/SideMenu/actions';
import { MenuBar } from '../../../Svgs/index';
import { S } from '../styles';

function Header() {
  const dispatch = useDispatch();

  const openSideMenu: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(showSideMenu());
  };

  return (
    <header css={S.header}>
      <button css={S.menuButton} onClick={openSideMenu}>
        <MenuBar />
      </button>
    </header>
  );
}

export default Header;
