import { Filter, Label, SvgIcon } from "./SearchTrip.styled";

export const SearchTrip = ({filter, onChangeFilter})=>{
	return (
    <Label>
      <Filter value={filter} placeholder="Search your trip" onChange={(ev) => onChangeFilter(ev.target.value)} />
      <SvgIcon tag={"search"} />
    </Label>
  );
}