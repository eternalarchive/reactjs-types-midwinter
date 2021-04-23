import React from 'react';
import SideMenu from '../../../containers/SideMenu';
import TicketInput from '../../../containers/TicketInput';
import { S } from './styles';

type DefaultLayoutProps = {
  children: React.ReactChild | React.ReactFragment;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div css={S.outerLayout}>
      <TicketInput />
      <div css={S.innerLayout}>
        <SideMenu />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
