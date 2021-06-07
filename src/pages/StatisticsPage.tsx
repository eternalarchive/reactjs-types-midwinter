import React from 'react';
import LoggedLayout from '../components/Common/LoggedLayout';
import Statistics from '../containers/Statistics';

function StatisticsPage() {
  return (
    <LoggedLayout>
      <Statistics />
    </LoggedLayout>
  );
}

export default StatisticsPage;
