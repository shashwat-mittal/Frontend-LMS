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
import { get, post } from "../../../utils/API";
const Forms = () => {
    const [enrollData, setEnrollData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [examData, setExamData] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(1);
    const [exam, setExam] = useState(1);
    const [enroll, setEnroll] = useState(1);
    const [marks, setMarks] = useState(0);
    const getEnrollData = async (e) => {
        const response = await get("/students/students");
        console.log(response);
        if (response.status === 200) {
            setEnrollData(response.data);
        }
    };
    const getSubjectData = async (e) => {
        const response = await get("/academics/subject");
        console.log(response);
        if (response.status === 200) {
            setSubjectData(response.data);
        }
    };
    const getExamData = async (e) => {
        const response = await get("/academics/exam");
        console.log(response);
        if (response.status === 200) {
            setExamData(response.data);
        }
    };
    function handleEnrollChange(e) {
        setEnroll(e.target.value);
    }
    function handleSubjectChange(e) {
        console.log(e.target.value);
        setSelectedSubject(e.target.value);
    }
    function handleExamChange(e) {
        console.log(e.target.value);
        setExam(e.target.value);
    }
    useEffect(() => {
        getEnrollData();
        getSubjectData();
        getExamData();
    }, []);
    const handleFormSubmit = async (e) => {
        let formData = new FormData(document.getElementById("form"));
        let response = await post("/academics/score", formData, null, true);
        if (response.status === 200) {
            alert("Marks updated Successfully!");
        }
    };
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        <i className="bi bi-book me-2"> </i>
                        Update Marks
                    </CardTitle>
                    <CardBody>
                        <Form id="form">
                            <FormGroup>
                                <Label for="enrollmentId">
                                    Student's Enrollment Number
                                </Label>
                                <Input
                                    id="student"
                                    name="student"
                                    type="select"
                                    value={enroll}
                                    onChange={handleEnrollChange}
                                >
                                    {enrollData.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.enrollment_id}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="subjectCode">Subject Code</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="select"
                                    value={selectedSubject}
                                    onChange={handleSubjectChange}
                                >
                                    {subjectData.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exam">Exam</Label>
                                <Input
                                    id="examination"
                                    name="examination"
                                    type="select"
                                    value={exam}
                                    onChange={handleExamChange}
                                >
                                    {examData.map((item) => {
                                        return (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </option>
                                        );
                                    })}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="marks">Marks</Label>
                                <Input
                                    id="score"
                                    name="score"
                                    type="number"
                                    onChange={(e) => {
                                        setMarks(e.target.value);
                                    }}
                                />
                            </FormGroup>

                            <Button onClick={handleFormSubmit}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Forms;
