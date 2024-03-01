import { useState } from "react";
import { Button, Panel, SvgIcon } from "./Pager.styled";

export const Pager = ({ listRef, shift }) => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  const handleScroll = btn => {
    const itemWidth = shift;
    switch (btn) {
      case "first":
        listRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setIsLast(false);
        setIsFirst(true);
        break;
      case "backward":
        listRef.current.scrollBy({ top: 0, left: -itemWidth * 5, behavior: "smooth" });
        setIsLast(false);
        if (listRef.current.scrollLeft===0){setIsFirst(true)}
        break;
      case "prev":
        listRef.current.scrollBy({ top: 0, left: -itemWidth, behavior: "smooth" });
        setIsLast(false);
        if (listRef.current.scrollLeft===0){setIsFirst(true)}
        break;
      case "next":
        listRef.current.scrollBy({ top: 0, left: itemWidth, behavior: "smooth" });
        setIsFirst(false);
        if (listRef.current.scrollLeft===listRef.current.scrollWidth - listRef.current.clientWidth){setIsLast(true);}
        break;
      case "forward":
        listRef.current.scrollBy({ top: 0, left: itemWidth * 5, behavior: "smooth" });
        setIsFirst(false);
        if (listRef.current.scrollLeft===listRef.current.scrollWidth - listRef.current.clientWidth){setIsLast(true);}
        break;
      case "last":
        listRef.current.scrollTo({ top: 0, left: listRef.current.scrollWidth, behavior: "smooth" });
        setIsFirst(false);
        setIsLast(true);
    }
  };

  return (
    <Panel>
      <li>
        <Button type="button" onClick={() => handleScroll("first")} disabled={isFirst}>
          <SvgIcon tag={"first"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("backward")} disabled={isFirst}>
          <SvgIcon tag={"backward"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("prev")} disabled={isFirst}>
          <SvgIcon tag={"prev"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("next")} disabled={isLast}>
          <SvgIcon tag={"next"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("forward")} disabled={isLast}>
          <SvgIcon tag={"forward"} />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={() => handleScroll("last")} disabled={isLast}>
          <SvgIcon tag={"last"} />
        </Button>
      </li>
    </Panel>
  );
};
