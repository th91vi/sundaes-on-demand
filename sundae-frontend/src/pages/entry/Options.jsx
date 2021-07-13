import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../commom/AlertBanner";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const fetchScoops = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/${optionType}`);
      setItems(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchScoops();
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

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
