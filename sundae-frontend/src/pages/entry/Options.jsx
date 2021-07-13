import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  const fetchScoops = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/${optionType}`);
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchScoops();
  }, [optionType]);

  //@TODO: reṕlace with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionItems}</Row>;
};

export default Options;
