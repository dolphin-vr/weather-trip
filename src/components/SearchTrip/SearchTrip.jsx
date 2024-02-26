export const SearchTrip = ({filter, onChangeFilter})=>{
	return (
    <label>
      <input value={filter} onChange={(ev) => onChangeFilter(ev.target.value)} />
    </label>
  );
}