import { Col } from "react-bootstrap";
import baseURL from "../../utils/baseURL";

const ToppingOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`${baseURL}/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ToppingOption;
