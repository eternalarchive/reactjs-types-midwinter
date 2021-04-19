import React from 'react';
import { S } from './styles';

function CustomizedTooltip({ label, payload }: any) {
  if (!label && !payload[0]) return null;
  return (
    <div css={S.tooltip}>
      <span css={S.tooltipText}>
        {label}님과 {payload[0]?.payload.count || 0}번
      </span>
    </div>
  );
}

export default CustomizedTooltip;
