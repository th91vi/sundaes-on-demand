import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import baseURL from "../../utils/baseURL";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../commom/AlertBanner";
import { pricePerItem } from "../../constants/pricePerItem";
import { useOrderDetails } from "../../contexts/OrderDetails";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

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
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));
  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
