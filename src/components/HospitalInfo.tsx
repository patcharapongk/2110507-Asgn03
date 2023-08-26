import InfoCard from "@/components/InfoCard";

const hospitals = [
  {
    title: "โรงพยาบาลจุฬาลงกรณ์",
    description:
      "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย และ คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เป็นสถาบันต้นแบบทางการแพทย์ที่มีคุณธรรมด้วยคุณภาพมาตรฐานระดับนานาชาติ ตั้งอยู่ที่เขตปทุมวัน กรุงเทพมหานคร",
    imgSrc: "/img/hospitals/chula.jpg",
  },
  {
    title: "โรงพยาบาลราชวิถี",
    description:
      "โรงพยาบาลราชวิถี เป็นโรงพยาบาลรัฐบาล นับเป็นโรงพยาบาลศูนย์วิชาการที่ใหญ่ที่สุดแห่งหนึ่ง ของกรมการแพทย์ กระทรวงสาธารณสุข ตั้งอยู่ที่เขตราชเทวี กรุงเทพมหานคร",
    imgSrc: "/img/hospitals/rajavithi.jpg",
  },
  {
    title: "โรงพยาบาลมหาวิทยาลัยธรรมศาสตร์",
    description:
      "โรงพยาบาลมหาวิทยาลัยธรรมศาสตร์ เป็นโรงพยาบาลของมหาวิทยาลัยธรรมศาสตร์ ตั้งอยู่ในอำเภอเมืองปทุมธานี จังหวัดปทุมธานี",
    imgSrc: "/img/hospitals/thammasat.jpg",
  },
];

const HospitalInfo = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        {" "}
        โรงพยาบาลที่มีวัคซีน COVID-19 ใกล้กรุงเทพมหานคร
      </h1>
      <div className="flex flex-col gap-8 my-4">
        {hospitals.map((hospital) => (
          <InfoCard
            key={hospital.title}
            title={hospital.title}
            description={hospital.description}
            imgSrc={hospital.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalInfo;
