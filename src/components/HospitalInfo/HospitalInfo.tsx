import CardPanel from "./CardPanel";

const HospitalInfo = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-8 items-center w-[90%] mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        {" "}
        โรงพยาบาลที่มีวัคซีน COVID-19 ใกล้กรุงเทพมหานคร
      </h1>
      <CardPanel />
      <div> </div>
    </div>
  );
};

export default HospitalInfo;
