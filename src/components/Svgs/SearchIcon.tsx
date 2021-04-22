import React from 'react';

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
    >
      <g>
        <path
          d="M0 0h10.293v2.357H0z"
          transform="translate(-748 -58) rotate(45 294.383 956.714)"
        />
        <g
          fill="#fcfcfc"
          stroke="#464d52"
          strokeWidth="2px"
          transform="translate(-748 -58) translate(748 58)"
        >
          <circle cx="9.5" cy="9.5" r="9.5" stroke="none" />
          <circle cx="9.5" cy="9.5" r="8.5" fill="none" />
        </g>
      </g>
    </svg>
  );
}

export default SearchIcon;
