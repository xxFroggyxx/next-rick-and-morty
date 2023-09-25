import { ComponentProps } from "react";

interface Props
  extends Omit<ComponentProps<"button">, "children" | "className"> {
  text: string;
}

export const Button = ({ text, ...props }: Props) => {
  return (
    <button
      className="flex h-12 min-h-full w-12 min-w-min items-center justify-center rounded-lg border-2 border-sky-500 p-4"
      {...props}
    >
      {text}
    </button>
  );
};
