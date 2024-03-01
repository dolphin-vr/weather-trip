import { TripCard } from "../TripCard/TripCard";
import { BtnAdd, Item, List, SvgIcon } from "./TripList.styled";

export const TripList = ({ trips, handleAdd, handleDelete, handleSelect, listRef }) => {
  return (
    <List ref={listRef}>
      {trips.map(el => (
        <Item key={el.id}>
          <TripCard trip={el} onClick={handleSelect} onDelete={handleDelete} />
        </Item>
      ))}
      <Item>
        <BtnAdd type="button" onClick={handleAdd}>
          <SvgIcon tag={"add"} />
          Add trip
        </BtnAdd>
      </Item>
    </List>
  );
};