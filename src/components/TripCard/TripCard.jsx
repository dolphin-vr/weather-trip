import { useState } from "react";
import { BtnDelete, City, Info, Card, Period, Photo, SvgIcon } from "./TripCard.styled";
import { dateLocal } from "../../shared/utils/dates";

const IMG_PATH = import.meta.env.VITE_IMAGES_URL;
const imgUrl = str => {
  return `${IMG_PATH}images/${str}/01.jpg`;
};

export const TripCard = ({ trip, onClick, onDelete }) => {
  const [isHovered, setHover] = useState(false);

  return (
    <Card onClick={() => onClick(trip)} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Photo src={imgUrl(trip.city)} alt={trip.city} />
      <Info>
        <City>{trip.city}</City>
        <Period>
          {dateLocal(trip.startDate)} - {dateLocal(trip.endDate)}
        </Period>
      </Info>
      {isHovered && (
        <BtnDelete onClick={e => onDelete(e, trip.id)}>
          <SvgIcon tag={"delete"} />
        </BtnDelete>
      )}
    </Card>
  );
};
