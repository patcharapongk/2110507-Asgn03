import CardPanel from "@/components/HospitalInfo/CardPanel";

const Hospitals = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-8 items-center w-[90%] mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        {" "}
        โรงพยาบาลที่มีวัคซีน COVID-19 ใกล้กรุงเทพมหานคร
      </h1>
      <CardPanel />
    </div>
  );
};

export default Hospitals;
