import Section from 'src/components/Section';

import { education } from 'cv';

function Education() {
  return (
    <Section title="Education">
      <ul className="flex flex-col gap-1">
        {education.map(({ institution, startDate, endDate, area }, idx) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : 'Actual';
          const years = `${startYear} - ${endYear}`;

          return (
            <li key={idx}>
              <article>
                <header className="flex flow-row justify-between items-start mt-2">
                  <div>
                    <h3 className="font-mono font-bold">{institution}</h3>
                  </div>

                  <time className="font-mono text-slate-600">{years}</time>
                </header>

                <footer>
                  <p className="font-mono">{area}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default Education;
