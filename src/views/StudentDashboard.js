import { Col, Row, Container, Card, CardBody, CardTitle } from "reactstrap";
import TopCards from "../components/dashboard/TopCards";
import user2 from "../assets/images/users/user2.jpg";


const Starter = () => {
  return (
    <div>
        <Row>
        <Col>
        <img src={user2} width="140" height="140"/>
        <br/>
        <br/>
        </Col>
        </Row>

      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Personal Details
        </CardTitle>
        <CardBody className="">
          <Container>

            <Row className="mt-3">
              <Col>
                <div className=" p-2">Name</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Vaibhav Gupta</div>
              </Col>
              <Col>
                <div className=" p-2">Admission Number</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">1471</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className=" p-2">Date of Birth</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">03-08-2005</div>
              </Col>
              <Col>
                <div className=" p-2">Date of Joining</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">06-04-2009</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className=" p-2">Father's Name</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Rajesh Gupta</div>
              </Col>
              <Col>
                <div className=" p-2">Mother's Name</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Kavita Gupta</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className=" p-2">Gender</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Male</div>
              </Col>
              <Col>
                <div className=" p-2">Category</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">General</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className=" p-2">Nationality</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Indian</div>
              </Col>
              <Col>
                <div className=" p-2">Contact No.</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">9876598765</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className=" p-2">Address</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">3, Sector 2</div>
              </Col>
              <Col>
                <div className=" p-2">City/ District</div>
              </Col>
              <Col>
                <div className="bg-light p-2 border">Lucknow</div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
     
    </div>
  );
};
export default Starter;