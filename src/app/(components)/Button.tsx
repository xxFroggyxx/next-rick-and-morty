import { ButtonProps } from "../(data)/types";

export const Button = ({ sign, onClick }: ButtonProps) => {
  return (
    <button
      className="h-12 min-h-full w-12 min-w-min rounded-lg border border-sky-500 p-4 leading-none"
      onClick={onClick}
    >
      {sign}
    </button>
  );
};
