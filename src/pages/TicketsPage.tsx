import React from 'react';
import LoggedLayout from '../components/Common/LoggedLayout';
import Tickets from '../containers/Tickets';

function TicketsPage() {
  return (
    <LoggedLayout>
      <Tickets />
    </LoggedLayout>
  );
}

export default TicketsPage;
