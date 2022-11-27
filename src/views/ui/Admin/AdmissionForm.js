//Forms
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from "reactstrap";

import { useState, useEffect } from "react";
import { post, get } from "../../../utils/API";
import { useNavigate } from "react-router-dom";

const Forms = () => {
    const navigate = useNavigate();
    let [classes, setClasses] = useState(null);
    async function handleSubmit(event) {
        let formData = new FormData(document.getElementById("form"));
        let response = await post("/students/students", formData, null, true);
        if ((response.status = 200)) {
            alert("Student added Successfully!");
            navigate("/adminDashboards");
        }
    }
    const getClassData = async (e) => {
        const response = await get("/academics/class");
        console.log(response);
        if (response.status === 200) {
            setClasses(response.data);
        }
    };
    useEffect(() => {
        getClassData();
    }, []);
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-pen me-2"> </i>
                        Admission Details
                    </CardTitle>
                    <CardBody>
                        <Form id="form">
                            <FormGroup>
                                <Label for="studentName">Student Name</Label>
                                <Input
                                    id="studentName"
                                    name="name"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="admissionNumber">
                                    Admission Number
                                </Label>
                                <Input
                                    id="admissionNumber"
                                    name="enrollment_id"
                                    type="number"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="class">Class</Label>
                                <Input
                                    id="class"
                                    name="class_section"
                                    type="select"
                                >
                                    {classes?.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.classname +
                                                    " " +
                                                    item.section}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="dob">Date of Birth</Label>
                                <Input id="dob" name="dob" type="date" />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="joiningDate">Date of Joining</Label>
                                <Input
                                    id="joiningDate"
                                    name="date"
                                    type="date"
                                />
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="fatherName">Father's Name</Label>
                                <Input
                                    id="fatherName"
                                    name="father"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="motherName">Mother's Name</Label>
                                <Input
                                    id="motherName"
                                    name="mother"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <Input id="gender" name="gender" type="select">
                                    <option>MALE</option>
                                    <option>FEMALE</option>
                                    <option>OTHER</option>
                                </Input>
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="category">Category</Label>
                                <Input id="category" name="text" type="text" />
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="nationality">Nationality</Label>
                                <Input
                                    id="nationality"
                                    name="nationality"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input
                                    id="address"
                                    name="address"
                                    type="textarea"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="studentImage">Image</Label>
                                <Input
                                    id="studentImage"
                                    name="image"
                                    type="file"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    type="email"
                                />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    type="password"
                                />
                            </FormGroup> */}

                            <Button onClick={handleSubmit}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Forms;
