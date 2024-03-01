import { BtnSort, Filter, Label, SearchPanel, SvgIcon } from "./SearchTrip.styled";

export const SearchTrip = ({ filter, onChangeFilter, onSort }) => {
  return (
    <SearchPanel>
      <Label>
        <Filter value={filter} placeholder="Search your trip" onChange={ev => onChangeFilter(ev.target.value)} />
        <SvgIcon tag={"search"} />
      </Label>
      <BtnSort type="button" onClick={onSort}>
        Sort trips by date
        <SvgIcon tag={"sort-num-asc"} />
      </BtnSort>
    </SearchPanel>
  );
};
