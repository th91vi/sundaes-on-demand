import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { useOrderDetails } from '../../contexts/OrderDetails';
import AlertBanner from '../commom/AlertBanner';
import baseURL from '../../utils/baseURL';


export default function OrderConfirmation({ setOrderPhase }) {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(false);

  const fetchOrder = async () => {
    try {
      const { data: { orderNumber } } = await axios.post(`${baseURL}/order`);
      setOrderNumber(orderNumber);
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchOrder()
  }, []);

  if (error) {
    return <AlertBanner />;
  }

  function handleClick() {
    // clear the order details
    resetOrder();

    // send back to order page
    setOrderPhase('inProgress');
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: '25%' }}>
          as per our terms and conditions, nothing will happen now
        </p>
        <Button onClick={handleClick}>Create new order</Button>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}