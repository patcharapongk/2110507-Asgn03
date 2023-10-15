"use client";
import { Rating, Typography } from "@mui/material";

const RatingSection = ({
  title,
  rating,
  onCompare,
}: {
  title: string;
  rating: number;
  onCompare: Function;
}) => {
  return (
    <div>
      <Typography component="legend"> รีวิว </Typography>
      <Rating
        value={rating}
        onChange={(event, newVal) => {
          event.stopPropagation();
          onCompare(title, newVal);
        }}
      />
    </div>
  );
};

export default RatingSection;
