import { useState, useCallback } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import ScoopOptions from "./ScoopOptions";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  const fetchScoops = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/${optionType}`);
      setItems(data);
    } catch (error) {
      //@TODO: handle error response
    }
  };

  useCallback(fetchScoops, [optionType]);

  //@TODO: reṕlace with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

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
