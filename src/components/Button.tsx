import { ButtonProps } from "@/data/types";

export const Button = ({ sign, onClick }: ButtonProps) => {
  return (
    <button
      className="flex h-12 min-h-full w-12 min-w-min items-center justify-center rounded-lg border-2 border-sky-500 p-4"
      onClick={onClick}
    >
      {sign}
    </button>
  );
};
