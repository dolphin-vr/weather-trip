import { useState, useEffect } from "react";
import { BtnOpen, Input, Option, Options, SvgIcon, Wrapper } from "./Selector.styled";
import cities from '../../assets/cities.json'

export const Selector = ({ handleSelector})=>{
  const [showList, setShowList] = useState(false);
  const [filtered, setFiltered] = useState(cities);
  const [filter, setFilter] = useState("");

  const handleChange = (str) => {
    setFiltered(cities.filter((el) => el.toLowerCase().startsWith(str.toLowerCase())));
    setFilter(str);
  };
  const onClick = (str) => {
    setFilter(str);
    setShowList(false);
    setFiltered(cities);
    handleSelector(str);
  };
	useEffect(() => {
  }, [filter])

  return (
    <Wrapper>
      <Input type="text" name="city" placeholder="Please select a city"
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
      />
      <BtnOpen type="button"
        onClick={() => { setShowList(!showList); }}><SvgIcon tag={showList ? "up" : "down"}/>
        {}
      </BtnOpen>
      <Options $isopen={showList}>
        {filtered.map((el) => ( <Option key={el} onClick={() => onClick(el)}>{el}</Option> ))}
      </Options>
    </Wrapper>
  );
}