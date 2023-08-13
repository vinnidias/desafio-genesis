import { ChangeEvent } from "react";

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const SearchInput = ({ onChange, value }: IProps) => {
  return (
    <div className="flex w-full max-w-[30em] gap-3">
      <input
        type="text"
        placeholder="Digite o nome, autor ou editora do livro"
        onChange={(e) => onChange(e)}
        value={value}
        className="border-2 border-grey rounded outline-none p-1 min-w-full"
      />
    </div>
  );
};
