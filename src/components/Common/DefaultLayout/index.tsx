import React from 'react';
import SideMenu from '../../../containers/SideMenu';
import { S } from './styles';

type DefaultLayoutProps = {
  children: React.ReactChild | React.ReactFragment;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div css={S.outerLayout}>
      <SideMenu />
      <div css={S.innerLayout}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
