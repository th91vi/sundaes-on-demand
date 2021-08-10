import { Button } from "react-bootstrap";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderEntry = ({setOrderPhase}) => {
  const [orderDetails] = useOrderDetails();
  return (
    <>
      <h1>Design your sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase('review')}>Order sundae!</Button>
    </>
  );
};

export default OrderEntry;
