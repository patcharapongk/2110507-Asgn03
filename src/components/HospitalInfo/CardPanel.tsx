import hospitals from "../../data/hospitalData";
import InfoCard from "@/components/InfoCard/InfoCard";

const CardPanel = () => {
  return (
    <div className="flex flex-row gap-8 my-4 ">
      {hospitals.map((hospital) => (
        <InfoCard
          key={hospital.title}
          title={hospital.title}
          description={hospital.description}
          imgSrc={hospital.imgSrc}
        />
      ))}
    </div>
  );
};

export default CardPanel;
