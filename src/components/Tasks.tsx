import Check from 'src/components/icons/Check';

interface IProps {
  tasks: string[];
}

function Tasks({ tasks }: IProps) {
  if (!tasks.length) return null;

  return (
    <div className="my-2">
      <h5 className="font-mono font-semibold underline">
        Key Achievements and Responsibilities
      </h5>
      <div className="flex flex-col gap-2 my-2">
        {tasks.map((task, idx) => (
          <div key={idx} className="flex flex-row items-center">
            <div>
              <Check />
            </div>
            <p className="font-mono text-xs text-slate-500 ml-2">{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
