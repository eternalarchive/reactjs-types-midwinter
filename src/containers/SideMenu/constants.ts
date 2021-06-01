export const SHOW_SIDE_MENU = 'SHOW_SIDE_MENU' as const;
export const HIDE_SIDE_MENU = 'HIDE_SIDE_MENU' as const;

export const MENU = [
  {
    key: 'schedule',
    path: '/',
    name: '스케줄',
  },
  {
    key: 'statistics',
    path: '/statistics',
    name: '관람 분석',
  },
  {
    key: 'tickets',
    path: '/tickets',
    name: '티켓 보기',
  },
];
