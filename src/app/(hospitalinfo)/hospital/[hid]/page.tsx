import { hospitals, HospitalType } from "@/data/hospitalData";
import Image from "next/image";

const HospitalInfo = ({ params }: { params: { hid: string } }) => {
  let hospital = hospitals.find((hospital) => hospital.hid === params.hid);
  if (!hospital) {
    return (
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-3xl font-bold">ไม่พบโรงพยาบาล!</h1>
        <h2 className="text-lg"> กรุณาตรวจสอบหมายเลขโรงพยาบาล</h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:flex-row w-[90%] h-[95vh] justify-center items-center mx-auto gap-4 sm:gap-8">
      <Image
        src={hospital.imgSrc}
        alt={hospital.title}
        height={0}
        width={0}
        sizes={"100vw"}
        className="rounded-lg w-[50%] max-w-[400px] shadow-lg object-contain"
      />
      <div className="flex flex-col justify-center gap-4 max-w-[600px]  ">
        <h1 className="text-2xl font-bold"> {hospital.title} </h1>
        <p className=""> {hospital.description} </p>
      </div>
    </div>
  );
};

export default HospitalInfo;
