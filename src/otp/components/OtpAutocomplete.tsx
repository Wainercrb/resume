import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface IProps {
  // eslint-disable-next-line react/require-default-props
  length?: number;
  callback: (isValid: boolean) => void;
}

type TInputKeyDownArg = {
  event: React.KeyboardEvent<HTMLInputElement>;
  idx: number;
};

const INITIAL_VALUES = (length: number) =>
  Array.from({ length }).fill('').map(String);

function OtpAutocomplete({ length = 4, callback }: IProps) {
  const parent = useRef<HTMLDivElement | null>(null);

  const [values, setValues] = useState<string[]>(INITIAL_VALUES(length));

  useEffect(() => {
    const REGEX = new RegExp(`^.{${length}}$`);
    const plainValue = values.join('');
    const isValid = REGEX.test(plainValue);

    callback(isValid);
  }, [values, length, callback]);

  const findCurrentInput = (
    childNodes: NodeListOf<ChildNode>,
    findTarget: string
  ) => {
    const input = Array.from(childNodes).find((item) => {
      return (item as HTMLInputElement).name === findTarget;
    }) as HTMLDivElement;

    if (!input) {
      throw new Error('Input not found');
    }

    return input;
  };

  const handleFocusInput = (input: HTMLInputElement) => {
    requestAnimationFrame(() => {
      input.setSelectionRange(input.value.length, input.value.length);
      input.focus();
    });
  };

  const handleMoveToLeft = (inputName: string) => {
    if (!parent.current) return;

    const { childNodes } = parent.current;
    const currentInput = findCurrentInput(childNodes, inputName);
    const leftInput = currentInput.previousElementSibling;

    if (leftInput) handleFocusInput(leftInput as HTMLInputElement);
  };

  const handleMoveToRight = (inputName: string) => {
    if (!parent.current) return;

    const { childNodes } = parent.current;
    const currentInput = findCurrentInput(childNodes, inputName);
    const nextInput = currentInput.nextElementSibling;

    if (nextInput) handleFocusInput(nextInput as HTMLInputElement);
  };

  const handleOnChangeV2 = (
    event: ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value, name } = event.target;
    const newInputValues = [...values];
    const currentInputValue = newInputValues[idx];
    const shouldIMoveToRight = event.target.value.length === 1;
    const shouldDeletePrevCharacter = currentInputValue && !value;

    newInputValues[idx] = event.target.value;

    if (shouldIMoveToRight) {
      handleMoveToRight(name);
      setValues(newInputValues);
      return;
    }

    if (shouldDeletePrevCharacter) {
      setValues(newInputValues);
    }
  };

  const handleOnKeyDownBackspace = ({ event, idx }: TInputKeyDownArg) => {
    if (!parent.current) return;

    const { value, name } = event.currentTarget;
    const currentInputValue = values[idx];
    const isInputEmpty = !currentInputValue && !value;
    const shouldIMoveToLeft = isInputEmpty;

    if (shouldIMoveToLeft) handleMoveToLeft(name);
  };

  const handleOnKeyDownArrowLeft = ({ event }: TInputKeyDownArg) => {
    const { name } = event.currentTarget;

    handleMoveToLeft(name);
  };

  const handleOnKeyDownArrowRight = ({ event }: TInputKeyDownArg) => {
    const { name } = event.currentTarget;

    handleMoveToRight(name);
  };

  const handleOnKeyDown = (args: TInputKeyDownArg) => {
    const actions: {
      [key: string]: ({ event, idx }: TInputKeyDownArg) => void;
    } = {
      Backspace: handleOnKeyDownBackspace,
      ArrowLeft: handleOnKeyDownArrowLeft,
      ArrowRight: handleOnKeyDownArrowRight,
    };

    const fn = actions[args.event.key];

    if (fn) fn(args);
  };

  return (
    <div>
      <div
        ref={parent}
        className="flex flex-row justify-center items-center gap-6 mt-6"
      >
        {values.map((value, idx) => {
          return (
            <input
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              tabIndex={idx}
              max={1}
              value={value}
              name={`el-${idx}`}
              className="border-2 w-12 text-center"
              onKeyDown={(event) => handleOnKeyDown({ event, idx })}
              onChange={(event) => handleOnChangeV2(event, idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OtpAutocomplete;
