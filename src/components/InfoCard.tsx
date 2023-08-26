import Image from "next/image";

export default function InfoCard() {
  return (
    <div className="mt-2 h-full w-full flex justify-center">
      <div className="flex bg-white max-w-[700px] my-20 mx-0 rounded-lg shadow-lg ">
        <div className="relative w-[300px] shrink-0 ">
          <Image
            className="w-full h-auto rounded-l-lg object-cover"
            src="/img/vaccine.jpg"
            alt="Coronavirus Vaccine"
            height="0"
            width="0"
            sizes="100vw"
          />
        </div>
        <div className="w-full flex flex-col justify-center p-8 gap-4">
          <h3 className="text-xl font-bold">mRNA Vaccine </h3>
          <p>
            วัคซีน COVID-19 ช่วยเสริมสร้างภูมิคุ้มกันให้ร่างกาย
            เพื่อป้องกันการติดเชื้อและลดความรุนแรงของโรค
            วัคซีนผ่านการทดสอบทางวิทยาศาสตร์อย่างเข้มงวด
            และผ่านการรับรองจากองค์กรสากล
            เราขอเชิญคุณมาร่วมสร้างสังคมที่ปลอดภัยและสุขภาพดีขึ้น
            รับวัคซีนตอนนี้!
          </p>
          <p>
            <a href="#0" className="text-blue-500 hover:underline">
              อ่านต่อ{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
