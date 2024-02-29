import { useState } from "react";
import { BtnDelete, City, Info, Item, Period, Photo, SvgIcon } from "./TripCard.styled";

const IMG_PATH = import.meta.env.VITE_IMAGES_URL;
export const TripCard = ({ trip, onClick, onDelete }) => {
  const [isHovered, setHover] = useState(false);

  const imgUrl = (str) => {
    return `${IMG_PATH}images/${str}/01.jpg`;
  };
  return (
    <Item onClick={() => onClick(trip)} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Photo src={imgUrl(trip.city)} alt={trip.city} />
      <Info>
        <City>{trip.city}</City>
        <Period>{trip.startDate} - {trip.endDate}</Period>
      </Info>
      {isHovered&&<BtnDelete onClick={(e)=>onDelete(e, trip.id)}><SvgIcon tag={"delete"}/></BtnDelete>}
    </Item>
  );
};
