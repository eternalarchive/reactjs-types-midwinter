import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlueButton from '../../components/Buttons/BlueButton';
import CloseButton from '../../components/Buttons/CloseButton';
import { rootState } from '../../store/rootReducer';
import history from '../../utils/history';
import { hideSideMenu } from './actions';
import { MENU } from './constants';
import { S } from './styles';

function SideMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: rootState) => state.sideMenu.isOpen);
  const email = useSelector(
    (state: rootState) => state.signIn.signInInfo.email,
  );

  const closeSideMenu = () => {
    dispatch(hideSideMenu());
  };

  const logout = () => {
    dispatch(hideSideMenu());
    localStorage.clear();
    history.push('/login');
  };

  return (
    <>
      <div css={S.overlay(isOpen)} onClick={closeSideMenu} />
      <nav css={S.nav(isOpen)}>
        <div css={S.messageBox}>
          <p css={S.messageText}>
            <span>{email}</span>님,
            <br />
            오늘도 즐거운 관극!
          </p>
          <BlueButton onClick={logout}>로그아웃</BlueButton>
        </div>
        <ul>
          {MENU.map(item => (
            <li css={S.menu} key={item.key}>
              <Link to={item.path}>
                <span
                  css={S.menuText(window.location.pathname === item.path)}
                  onClick={closeSideMenu}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <CloseButton css={S.closeButton} onClick={closeSideMenu} />
      </nav>
    </>
  );
}

export default SideMenu;
