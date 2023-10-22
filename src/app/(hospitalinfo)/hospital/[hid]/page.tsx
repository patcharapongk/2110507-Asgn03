import { HospitalType } from "@/data/hospitalData";
import Image from "next/image";

const HospitalInfo = ({
  params,
  hospital,
}: {
  params: { hid: string };
  hospital: HospitalType;
}) => {
  return (
    <div>
      <div>
        <Image src={hospital.imgSrc} alt={hospital.title} />
        <div>
          <h1> {hospital.title} </h1>
          <p> {hospital.description} </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalInfo;
