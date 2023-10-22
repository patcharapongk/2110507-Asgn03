export interface HospitalType {
  hid: string;
  title: string;
  description: string;
  imgSrc: string;
}
export const hospitals: HospitalType[] = [
  {
    hid: "001",
    title: "โรงพยาบาลจุฬาลงกรณ์",
    description:
      "โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย และ คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เป็นสถาบันต้นแบบทางการแพทย์ที่มีคุณธรรมด้วยคุณภาพมาตรฐานระดับนานาชาติ ตั้งอยู่ที่เขตปทุมวัน กรุงเทพมหานคร",
    imgSrc: "/img/hospitals/chula.jpg",
  },
  {
    hid: "002",
    title: "โรงพยาบาลราชวิถี",
    description:
      "โรงพยาบาลราชวิถี เป็นโรงพยาบาลรัฐบาล นับเป็นโรงพยาบาลศูนย์วิชาการที่ใหญ่ที่สุดแห่งหนึ่ง ของกรมการแพทย์ กระทรวงสาธารณสุข ตั้งอยู่ที่เขตราชเทวี กรุงเทพมหานคร",
    imgSrc: "/img/hospitals/rajavithi.jpg",
  },
  {
    hid: "003",
    title: "โรงพยาบาลมหาวิทยาลัยธรรมศาสตร์",
    description:
      "โรงพยาบาลมหาวิทยาลัยธรรมศาสตร์ เป็นโรงพยาบาลของมหาวิทยาลัยธรรมศาสตร์ ตั้งอยู่ในอำเภอเมืองปทุมธานี จังหวัดปทุมธานี",
    imgSrc: "/img/hospitals/thammasat.jpg",
  },
];
