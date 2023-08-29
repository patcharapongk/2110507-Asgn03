import Image from "next/image";

export default function InfoCard({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <div className="mt-2 h-[250px] w-full flex justify-center">
      <div className="flex bg-white max-w-[750px] rounded-lg shadow-lg ">
        <div className="relative w-[300px] shrink-0 ">
          <Image
            className="w-full h-full rounded-l-lg object-cover"
            src={imgSrc}
            alt={title}
            height="0"
            width="0"
            sizes="100vw"
          />
        </div>
        <div className="w-full flex flex-col justify-center p-8 gap-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="truncate whitespace-pre-wrap block">{description}</p>
          <p>
            <a href="#0" className="text-blue-500 hover:underline">
              อ่านต่อ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
