import { TripCard } from "../TripCard/TripCard";
import { List } from "./TripList.styled";

export const TripList = ({trips}) => {
	return (
			<List>
				{trips.map(el=><TripCard  key={el.id} trip={el} />)}
			</List>
	)
};