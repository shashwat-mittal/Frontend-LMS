import { useEffect, useState } from "react";
import { Col, Row, Container, Card, CardBody, CardTitle } from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import { get } from "../utils/API";
import { getLS } from "../utils/LocalStorage";

const TeacherDashboard = () => {
    const [teacher, setTeacher] = useState(null);
    useEffect(() => {
        setTeacher(getLS("user"));
        console.log(teacher);
    }, []);

    return (
        <div>
            {/***Top Cards***/}
            <Row>
                <Col>
                    <img src={user1} width="200" height="200" />
                    <br />
                    <br />
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
                                    Rashi Gupta
                                </div>
                            </Col>
                            <Col>
                                <div className=" p-2">Designation</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">TGT</div>
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
                                <div className="bg-light p-2 border">
                                    General
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <div className=" p-2">Nationality</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">
                                    Indian
                                </div>
                            </Col>
                            <Col>
                                <div className=" p-2">Contact No.</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">
                                    9876598765
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <div className=" p-2">Address</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">
                                    3, Sector 2
                                </div>
                            </Col>
                            <Col>
                                <div className=" p-2">City/ District</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">
                                    Lucknow
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
