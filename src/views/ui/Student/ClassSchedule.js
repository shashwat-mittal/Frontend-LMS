//Cards
import {
  Card,
  CardImg,
  CardGroup,
  Row,
  Col,
} from "reactstrap";

import tt from "../../../assets/images/student data/timetable.png"


const Cards = () => {
  return (
    <div>
      <h5 className="mb-4">Time Table</h5>
      <Row>
        <Col>
        <img src={tt} alt="Time Table" width="55%"/>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;