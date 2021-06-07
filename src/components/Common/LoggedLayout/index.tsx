import React from 'react';
import Header from './Header';
import DefaultLayout from '../DefaultLayout';
import { S } from './styles';

type LoggedLayoutProps = {
  children: React.ReactChild | React.ReactFragment;
};

function LoggedLayout({ children }: LoggedLayoutProps) {
  return (
    <DefaultLayout>
      <Header />
      <main>{children}</main>
      <footer css={S.footer}>unchd26@gmail.com</footer>
    </DefaultLayout>
  );
}

export default LoggedLayout;
