import { ReactNode } from "react";

interface IProps {
  title?: string;
  children: ReactNode;
}

function Section({ title, children }: IProps) {
  return (
    <section className='p-3 my-2'>
      {title && <h2 className='text-xl font-bold font-sans'>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
