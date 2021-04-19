import dayjs from 'dayjs';
import React from 'react';
import { S } from './styles';

function CustomizedTooltip({ payload }: any) {
  if (!payload || !payload[0]) return null;
  return (
    <div css={S.tooltip}>
      <p css={S.tooltipText}>
        {dayjs(payload[0]?.payload.month).format('YYYY년 M월')}
      </p>
      <p css={S.tooltipText}>관람 횟수는 {payload[0]?.payload.count || 0}번</p>
      <p css={S.tooltipText}>
        사용 금액은 {payload[0]?.payload.total.toLocaleString('ko-KR') || 0}원
      </p>
    </div>
  );
}

export default CustomizedTooltip;
