/* eslint-disable max-len */

const INTRINSIC_WIDTH = 28;
const INTRINSIC_HEIGHT = 24;

export default function IconContact({
  width = INTRINSIC_WIDTH,
  includeTitle = true,
}: {
  width?: number
  includeTitle?: boolean
}) {
  return (
    <svg
      width={width}
      height={INTRINSIC_HEIGHT * width / INTRINSIC_WIDTH}
      viewBox="0 0 28 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {includeTitle && <title>Contact</title>}
      <rect x="9" y="12" width="10" height="10" rx="1" strokeWidth="1.25"/>
      <circle cx="14" cy="6.75" r="4" strokeWidth="1.25"/>
    </svg>
  );
};
