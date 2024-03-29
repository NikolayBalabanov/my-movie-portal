import React from 'react';

interface IArrowIcon {
  styles?: string;
}

export default function ArrowIcon({ styles }: IArrowIcon) {
  return (
    <svg
      className={styles}
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 1L8 8L1 1" stroke="#333333" strokeWidth="2" />
    </svg>
  );
}
