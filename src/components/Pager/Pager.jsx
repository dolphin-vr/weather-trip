import { Button, Panel, SvgIcon } from "./Pager.styled";

export const Pager = ({ listRef, shift }) => {
  const handleScroll = btn => {
    const itemWidth = shift;
    switch (btn) {
      case "first":
        listRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break;
      case "backward":
        listRef.current.scrollBy({ top: 0, left: -itemWidth * 5, behavior: "smooth" });
        break;
      case "prev":
        listRef.current.scrollBy({ top: 0, left: -itemWidth, behavior: "smooth" });
        break;
      case "next":
        listRef.current.scrollBy({ top: 0, left: itemWidth, behavior: "smooth" });
        break;
      case "forward":
        listRef.current.scrollBy({ top: 0, left: itemWidth * 5, behavior: "smooth" });
        break;
      case "last":
        listRef.current.scrollTo({ top: 0, left: listRef.current.scrollWidth, behavior: "smooth" });
    }
  };

  return (
    <Panel>
      <li>
        <Button type="button" onClick={() => handleScroll("first")}>
          <SvgIcon tag={"first"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("backward")}>
          <SvgIcon tag={"backward"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("prev")}>
          <SvgIcon tag={"prev"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("next")}>
          <SvgIcon tag={"next"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("forward")}>
          <SvgIcon tag={"forward"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("last")}>
          <SvgIcon tag={"last"} />
        </Button>
      </li>
    </Panel>
  );
};
