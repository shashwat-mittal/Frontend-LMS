import { useEffect, useState } from "react";
import { Col, Row, Container, Card, CardBody, CardTitle } from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import { get } from "../utils/API";
import { getLS } from "../utils/LocalStorage";

const TeacherDashboard = () => {
    const [teacher, setTeacher] = useState({});
    const [change , setChange] = useState("");
    const API_URL = "http://localhost:8000"
    async function initialSetup(){
        const teacherData = JSON.parse(getLS("user"));
        setTeacher(teacherData)
        console.log(teacher);
        setChange("tttt");
    }
    useEffect(() => {
        initialSetup();
    }, [change]);

    return (
      <div>
        {/***Top Cards***/}
        <Row>
          <Col className="mb-3">
            <img src={teacher?.image ? API_URL + teacher.image : user1} width="200" height="200" />
          </Col>
          <Col>
            <h1>Welcome {teacher?.username ? teacher.username : "User"}</h1>
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
                  <div className="bg-light p-2 border">
                    {teacher?.name ? teacher.name : "Rashi Gupta"}
                  </div>
                </Col>
                <Col>
                  <div className=" p-2">Designation</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.designation ? teacher.designation : "TGT"}
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <div className=" p-2">Gender</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.gender ? teacher.gender : "Male"}
                  </div>
                </Col>
                <Col>
                  <div className=" p-2">Category</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.category ? teacher.category : "General"}
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className=" p-2">Nationality</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.nationality ? teacher.nationality : "Indian"}
                  </div>
                </Col>
                <Col>
                  <div className=" p-2">Contact No.</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.phone_number ? teacher.phone_number : "987654321"}
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className=" p-2">Address</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.address ? teacher.address : "3 Sector 2"}
                  </div>
                </Col>
                <Col>
                  <div className=" p-2">City/ District</div>
                </Col>
                <Col>
                  <div className="bg-light p-2 border">
                    {teacher?.city ? teacher.city : "Prayagraj"}
                  </div>
                </Col>
              </Row>
              {/* Designation, Annual income, image */}
            </Container>
          </CardBody>
        </Card>
      </div>
    );
};
export default TeacherDashboard;
