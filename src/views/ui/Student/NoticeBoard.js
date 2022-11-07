import {Col, Row} from "reactstrap";
import tt from "../../../assets/images/student data/notice.jpg"

const Grid = () => {
  return (
    <div>
      <h5 className="mb-4">Notice Board</h5>
      <Row>
        <Col>
        <img src={tt} alt="Notice" width="55%"/>
        </Col>
      </Row>
    </div>
  );
};

export default Grid;
