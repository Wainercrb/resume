import Section from 'src/components/Section';
import Tasks from 'src/components/Tasks';

import { work } from 'cv';
import Skills from './Skills';

function Experience() {
  return (
    <Section title="Work Experience">
      <ul className="flex flex-col gap-6">
        {work.map((item, idx) => {
          const { name, startDate, endDate, position, summary, tasks, skills } =
            item;
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : 'Actual';
          const years = `${startYear} - ${endYear}`;

          return (
            <li key={idx}>
              <article>
                <header className="flex flow-row justify-between items-start mt-1">
                  <div>
                    <h3 className="font-mono font-bold">{name}</h3>
                    <h4 className="font-mono font-bold text-xs">{position}</h4>
                  </div>

                  <time className="font-mono text-slate-600">{years}</time>
                </header>

                <footer>
                  <p className="font-mono text-slate-500">{summary}</p>

                  <Tasks tasks={tasks} />

                  <Skills skills={skills} />
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default Experience;
