import React from 'react';
import { S } from './styles';

interface TopInfoProps {
  firstTitle: string;
  firstContent: string;
  secondTitle: string;
  secondContent: string;
}

function TopInfo({
  firstTitle,
  firstContent,
  secondTitle,
  secondContent,
}: TopInfoProps) {
  return (
    <div css={S.info}>
      <div css={S.infoItem}>
        <p css={S.infoItemText}>{firstTitle}</p>
        <p css={S.infoItemText}>{firstContent}</p>
      </div>
      <div css={S.infoItem}>
        <p css={S.infoItemText}>{secondTitle}</p>
        <p css={S.infoItemText}>{secondContent}</p>
      </div>
    </div>
  );
}

export default TopInfo;
