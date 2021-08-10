import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

const SummaryForm = ({setOrderPhase}) => {
  const [tcChecked, setChecked] = useState(false);

  const popover = (
    <Popover id="icecream-popover">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="right"
        overlay={popover}
      >
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleSubmit =(event) => {
    event.preventDefault()
    setOrderPhase('completed')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
