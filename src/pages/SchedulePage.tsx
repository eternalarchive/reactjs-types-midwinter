import React from 'react';
import LoggedLayout from '../components/Common/LoggedLayout';
import Schedule from '../containers/Schedule';

function SchedulePage() {
  return (
    <LoggedLayout>
      <Schedule />
    </LoggedLayout>
  );
}

export default SchedulePage;
