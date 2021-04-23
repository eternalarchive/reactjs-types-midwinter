import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CloseIcon } from '../../components/Svgs';
import { rootState } from '../../store/rootReducer';
import { hideSideMenu } from './actions';
import { S } from './styles';

function SideMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: rootState) => state.sideMenu.isOpen);

  const closeSideMenu = () => {
    dispatch(hideSideMenu());
  };

  return (
    <>
      <div css={S.overlay(isOpen)} onClick={closeSideMenu} />
      <nav css={S.nav(isOpen)}>
        <ul>
          <li css={S.menu}>
            <Link to="/">
              <span
                css={S.menuText(window.location.pathname === '/')}
                onClick={closeSideMenu}
              >
                캘린더
              </span>
            </Link>
          </li>
          <li css={S.menu}>
            <Link to="/statistics">
              <span
                css={S.menuText(window.location.pathname === '/statistics')}
                onClick={closeSideMenu}
              >
                관람 분석
              </span>
            </Link>
          </li>
          <li css={S.menu}>
            <Link to="/tickets">
              <span
                css={S.menuText(window.location.pathname === '/tickets')}
                onClick={closeSideMenu}
              >
                티켓 보기
              </span>
            </Link>
          </li>
          <li css={S.menu}>
            <Link to="admin">
              <span
                css={S.menuText(window.location.pathname === '/admin')}
                onClick={closeSideMenu}
              >
                계정 설정
              </span>
            </Link>
          </li>
        </ul>
        <button css={S.close} onClick={closeSideMenu}>
          <CloseIcon />
        </button>
      </nav>
    </>
  );
}

export default SideMenu;
