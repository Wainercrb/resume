import { Skills as ISkills } from 'src/cv';

interface IProps {
  skills?: ISkills[];
}

function Skills({ skills = [] }: IProps) {
  return (
    <ul className="flex flex-wrap gap-2 my-3">
      {skills.map(({ name }, idx) => (
        <li key={idx}>
          <div className="rounded-md border border-gray-900 py-0 px-1 font-mono text-xs font-bold text-gray-700 w-fit">
            <span className="tag">{name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
