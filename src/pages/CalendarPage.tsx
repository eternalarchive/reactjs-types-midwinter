import React from 'react';
import LoggedLayout from '../components/Common/LoggedLayout';
import Calendar from '../containers/Calendar';

function CalendarPage() {
  return (
    <LoggedLayout>
      <Calendar />
    </LoggedLayout>
  );
}

export default CalendarPage;
