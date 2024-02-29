import { TripList } from "../TripList/TripList";
import { BtnAdd, Gallery, SvgIcon } from "./TripGallery.styled"

export const TripGallery = ({ trips, handleAdd, handleDelete, handleSelect }) => {
	const showGallery = trips.length > 0;
	return (
    <Gallery>
      {showGallery && <TripList trips={trips} handleClick={handleSelect} handleDelete={handleDelete} />}
      <BtnAdd type="button" onClick={handleAdd}>
        <SvgIcon tag={"add"} />
        Add trip
      </BtnAdd>
    </Gallery>
  );
}