import Section from "src/components/Section";

import { certificates } from "cv";

function Certification() {
  return (
    <Section title='Certifications'>
      <ul className='flex flex-col gap-1'>
        {certificates.map(({ issuer, name, date }) => {
          return (
            <li>
              <article>
                <header className='flex flow-row justify-between items-start mt-2'>
                  <div>
                    <h3 className='font-mono font-bold'>{name}</h3>
                  </div>

                  <time className='font-mono'>{date}</time>
                </header>

                <footer>
                  <p className='font-mono'>{issuer}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default Certification;
