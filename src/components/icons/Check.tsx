import { SVGProps } from "react";

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke='#1C274C' strokeWidth={1.5} />
    <path
      stroke='#1C274C'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m8.5 12.5 2 2 5-5'
    />
  </svg>
);
export default Check;
