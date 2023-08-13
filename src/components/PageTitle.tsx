interface IProps {
  title: string;
}

export const PageTitle = ({ title }: IProps) => {
  return (
    <h1 className="pt-6 text-lg font-semibold text-sky-300">{title}</h1>
  );
};
