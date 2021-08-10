import { useState } from "react";
import { Container } from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summaryForm/OrderSummary";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

const App = () => {
  const [orderPhase, setOrderPhase] = useState('inProgress')

  const setOrderType = (type) => {
    const orderTypes = {
      'inProgress': OrderEntry,
      'review': OrderSummary,
      'completed': OrderConfirmation,
      'default': OrderEntry
    }

    return orderTypes[type] || orderTypes['default']
  }

  const Component = setOrderType(orderPhase)

  return (
    <OrderDetailsProvider>
      <Container>
        <Component setOrderPhase={setOrderPhase} /> 
      </Container>
    </OrderDetailsProvider>
  );
};

export default App;
