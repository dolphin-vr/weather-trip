import { Spinner, SvgIcon } from "./Loader.styled";

export const Loader = () => {
  return (
    <Spinner>
      <SvgIcon tag={"clear-day"} />
    </Spinner>
  );
};
