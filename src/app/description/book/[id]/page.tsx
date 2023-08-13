import Link from "next/link";

import { IoMdArrowRoundBack } from "react-icons/io";

import { IVolumeInfoData } from "@/interfaces/IVolumeInfoData";
import { PageTitle } from "@/components/PageTitle";
import { BookDescription } from "@/components/BookDescription";

interface IParams {
  params: { id: string };
}

export default async function Description({ params }: IParams) {
  const { id } = params;
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const data = await res.json();

  const bookData: IVolumeInfoData = data.volumeInfo;

  return (
    <main className="flex flex-col justify-center items-center p-2 px-2 gap-6 md:px-20">
      <Link
        href="/"
        className="absolute top-0 left-0 m-4 text-sky-300 text-[18px]"
      >
        {" "}
        <IoMdArrowRoundBack />
      </Link>
      <PageTitle title="Detalhes" />
      <BookDescription bookData={bookData} />
    </main>
  );
}
