import { keyframes } from '@emotion/react';

export const MENU_ITEMS = [
  'Преимущества Tele2',
  'Тарифы',
  'Акции и спецпредложения',
  'Промотариф Tele2',
  'Технология eSIM',
];

export const bellAnimation = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(30deg); }
  20% { transform: rotate(0); }
  80% { transform: rotate(0); }
  90% { transform: rotate(-30deg); }
  100% { transform: rotate(0); }
`;

export const radAnimation = keyframes`
  0% { transform: translateX(0); }
  10% { transform: translateX(6px); }
  20% { transform: translateX(0); }
  80% { transform: translateX(0); }
  90% { transform: translateX(-6px); }
  100% { transform: translateX(0); }
`;

export const zoomAnimation = keyframes`
  0% { opacity: 0; transform: scale(0); }
  10% { opacity: 1; transform: scale(1); }
  50% { opacity: 1; }
  51% { opacity: 0; }
  100% { opacity: 0; }
`;
