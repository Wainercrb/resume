import Section from 'src/components/Section';

import { basics } from 'cv';

const { summary } = basics;

function About() {
  return (
    <Section title="About me">
      <p className="font-mono text-base mt-2 text-slate-500">{summary}</p>
    </Section>
  );
}

export default About;
