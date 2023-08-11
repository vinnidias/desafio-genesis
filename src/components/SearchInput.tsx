import { ChangeEvent } from "react";

interface IProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleClick: () => void;
}

export const SearchInput = ({ onChange, value, handleClick }: IProps) => {
  return (
    <div className="flex w-full max-w-max gap-3">
      <input
        type="text"
        placeholder="Digite o nome, autor ou editora do livro"
        onChange={(e) => onChange(e)}
        value={value}
        className="border-2 border-grey rounded outline-none p-1 min-w-full"
      />
      <button
        onClick={handleClick}
        className="w-48 p-1 rounded bg-sky-300 text-white transition-all hover:bg-sky-200"
      >
        Pesquisar
      </button>
    </div>
  );
};
