"use client";

import InfoCard from "@/components/InfoCard/InfoCard";
import { hospitals } from "@/data/hospitalData";
import { useReducer } from "react";
const CardPanel = () => {
  const cardReducer = (
    cardRatings: Map<string, number>,
    action: {
      type: string;
      data: {
        title: string;
        rating: number;
      };
    }
  ) => {
    switch (action.type) {
      case "add":
        return new Map([
          ...cardRatings,
          [action.data.title, action.data.rating],
        ]);
      case "remove":
        const newCardRatings = new Map(cardRatings);
        newCardRatings.delete(action.data.title);
        return new Map(newCardRatings);
      default:
        return cardRatings;
    }
  };
  const [cardRatings, dispatchCardRatings] = useReducer(
    cardReducer,
    new Map<string, number>()
  );
  return (
    <div>
      <div className="flex flex-row gap-8 my-4 ">
        {hospitals.map((hospital) => (
          <InfoCard
            key={hospital.title}
            title={hospital.title}
            description={hospital.description}
            imgSrc={hospital.imgSrc}
            rating={cardRatings.get(hospital.title) || 0}
            onCompare={(title: string, rating: number) =>
              dispatchCardRatings({
                type: "add",
                data: {
                  title: title,
                  rating: rating,
                },
              })
            }
          />
        ))}
      </div>
      <div className="my-16 flex flex-col gap-4 items-center justify-center ">
        <h2 className="text-2xl font-bold"> คะแนนของโรงพยาบาล </h2>
        <div className="flex flex-col gap-2">
          {Array.from(cardRatings).map(([title, rating]) => {
            return (
              <div key={title} className="flex flex-row items-center gap-4">
                <span
                  onClick={() =>
                    dispatchCardRatings({
                      type: "remove",
                      data: { title: title, rating: rating },
                    })
                  }
                >
                  {title}
                </span>
                <span>{rating}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
