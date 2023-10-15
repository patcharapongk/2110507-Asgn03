import BannerImg from "./BannerImg";

export default function Banner() {
  return (
    <div className="relative w-screen h-[95vh] my-0 mx-auto">
      <div className="relative my-0 mx-auto h-full w-full">
        <BannerImg />
      </div>
      <div className=" absolute bg-white/70  p-8 rounded-2xl bottom-8 left-8 flex flex-col gap-4 text-[rgb(60,72,176)] ">
        <div className="flex flex-col gap-2">
          <h2 className="font-normal text-3xl">สุขภาพของคุณสำคัญที่สุด</h2>
          <h2 className="font-normal text-3xl">
            ร่วมปกป้องตนเองและคนที่คุณรัก
          </h2>
        </div>
        <h1 className="font-bold text-4xl">รับวัคซีน COVID-19 ใกล้บ้านคุณ</h1>
        <div>
          <button
            type="button"
            className="py-2 px-4 border-none rounded-lg bg-[#0D6EFD] text-white text-lg shadow shadow-[rgb(213,223,240)]"
          >
            จองคิววันนี้
          </button>
        </div>
      </div>
    </div>
  );
}
