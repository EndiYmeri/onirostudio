/**
 * A "hamburger" icon used for opening the mobile menu.
 *
 * @param props - Props used to customize this element.
 * @returns A React component.
 */
export const HamburgerIcon = ({ size, color, ...props }) => {
  return (
    <svg
      height={size}
      width={size}
      color={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Open menu</title>
      <g fill="#fc4523">
        <rect height="3" width="23" rx="1" ry="1" x=".5" y="2.5" />
        <rect height="3" width="23" rx="1" ry="1" x=".5" y="10.5" />
        <rect height="3" width="23" rx="1" ry="1" x=".5" y="18.5" />
      </g>
    </svg>
  );
};

/**
 * A "close" icon used for a closing the mobile menu.
 *
 * @param props - Props used to customize this element.
 * @returns A React component.
 */
export const CloseIcon = ({ size, color, ...props }) => {
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Close Menu</title>
      <g fill="currentColor">
        <path d="M14.3 12.179a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.442L12.177 9.7a.25.25 0 0 1-.354 0L2.561.442A1.5 1.5 0 0 0 .439 2.563L9.7 11.825a.25.25 0 0 1 0 .354L.439 21.442a1.5 1.5 0 0 0 2.122 2.121l9.262-9.263a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 0 0 2.122-2.121z" />
      </g>
    </svg>
  );
};
