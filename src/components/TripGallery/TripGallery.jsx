import { useRef } from "react";
import { Pager } from "../Pager/Pager";
import { TripList } from "../TripList/TripList";
import { Gallery } from "./TripGallery.styled";

export const TripGallery = ({ trips, handleAdd, handleDelete, handleSelect }) => {
  const listRef = useRef(null);
  const showControls = trips.length > 4;
  return (
    <Gallery>
      <TripList trips={trips} handleAdd={handleAdd} handleDelete={handleDelete} handleSelect={handleSelect} listRef={listRef} />
      {showControls && <Pager listRef={listRef} shift={222} />}
    </Gallery>
  );
};
