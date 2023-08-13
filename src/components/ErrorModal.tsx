import { BiMessageRoundedError } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

interface IProps {
  code: string;
  message: string;
  handleClose: () => void;
}

export const ErrorModal = ({ code, message, handleClose }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[30em] p-3 bg-slate-50 rounded-md relative shadow-md transition-all delay-1000">
      <button
        onClick={handleClose}
        className="absolute top-0 right-0 m-4  hover:scale-95"
      >
        <IoIosClose />
      </button>
      <p className="text-red-400 flex items-center gap-1">
        <BiMessageRoundedError /> Ops! Algo inesperado aconteceu{" "}
      </p>
      <span className="text-slate-500">{message}</span>
      <span className="text-slate-500">{code}</span>
    </div>
  );
};
