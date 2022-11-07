import { Col, Row, Container, Card, CardBody, CardTitle } from "reactstrap";
import StudentGraph from "../components/dashboard/StudentGraph";
// import Feeds from "../components/dashboard/Feeds";
import Teachers from "../components/dashboard/Teachers";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Extra Files/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "Subject-1",
    subtitle: "Teacher-1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Subject-2",
    subtitle: "Teacher-2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Subject-3",
    subtitle: "Teacher-3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Subject-4",
    subtitle: "Teacher-4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
];
const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Percentage"
            subtitle="Percentage"
            earning="96.2%"
            icon="bi bi-pencil-square"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Rank"
            subtitle="Class Rank"
            earning="3"
            icon="bi bi-person-workspace"
          />
        </Col>
        {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Attendance"
            subtitle="Attendance"
            earning="1       "
            icon="bi bi-basket3"
          />
        </Col> */}

      </Row>
      {/***Graph***/}
      {/* <Row>
        <Col xxl="12">
          <StudentGraph />
        </Col>
      </Row> */}
      
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
     
    
      <Row>
      <Col lg="12">
        <Teachers />
      </Col>
      </Row>
    </div>
  );
};
export default Starter;