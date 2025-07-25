import type { FC } from 'react';
import type { IconProps } from './index';
import React from 'react';

export const WalletIcon: FC<IconProps> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
    >
      <path
        d="M5.33268 8.66667V3.33333C5.33268 2.6 5.92602 2 6.66602 2H12.666V1.33333C12.666 0.6 12.066 0 11.3327 0H1.99935C1.25935 0 0.666016 0.6 0.666016 1.33333V10.6667C0.666016 11.4 1.25935 12 1.99935 12H11.3327C12.066 12 12.666 11.4 12.666 10.6667V10H6.66602C5.92602 10 5.33268 9.4 5.33268 8.66667ZM7.33268 3.33333C6.96602 3.33333 6.66602 3.63333 6.66602 4V8C6.66602 8.36667 6.96602 8.66667 7.33268 8.66667H13.3327V3.33333H7.33268ZM9.33268 7C8.77935 7 8.33268 6.55333 8.33268 6C8.33268 5.44667 8.77935 5 9.33268 5C9.88601 5 10.3327 5.44667 10.3327 6C10.3327 6.55333 9.88601 7 9.33268 7Z"
        fill="#BABABA"
      />
    </svg>
  );
};

export default WalletIcon;
