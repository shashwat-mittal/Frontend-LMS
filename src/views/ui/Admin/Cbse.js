import { useEffect, useState } from "react";
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
import { get, post } from "../../../utils/API";

const Forms = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(1);
    const [subjectData, setSubjectData] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(1);
    const [exam, setExam] = useState(1);
    const [examData, setExamData] = useState([]);
    const [data, setData] = useState([]);
    const getClassData = async (e) => {
        const response = await get("/academics/class");
        console.log(response);
        if (response.status === 200) {
            setClasses(response.data);
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
    function handleClassChange(e) {
        console.log(e.target.value);
        setSelectedClass(e.target.value);
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
        getClassData();
        getSubjectData();
        getExamData();
    }, []);
    const handleSubmitForm = async (e) => {
        const response = await get(
            `/academics/score?subject=${selectedSubject}&examination=${exam}`
        );
        if (response.status === 200) setData(response.data);
        setFormSubmitted(true);
    };
    if (!formSubmitted) {
        return (
            <Row>
                <Col>
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-book me-2"> </i>
                            Student Performance Report
                        </CardTitle>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="class">Class</Label>
                                    <Input
                                        id="class"
                                        name="select"
                                        type="select"
                                        value={selectedClass}
                                        onChange={handleClassChange}
                                    >
                                        {classes.map((item) => {
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
                                    <Label for="subjectCode">Subject</Label>
                                    <Input
                                        id="subjectCode"
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
                                        id="exam"
                                        name="select"
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

                                <Button onClick={handleSubmitForm}>
                                    Submit
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    } else {
        return (
            <div>
                <Row>
                    <Col>
                        {/* --------------------------------------------------------------------------------*/}
                        {/* Card-1*/}
                        {/* --------------------------------------------------------------------------------*/}
                        <Card>
                            <CardTitle
                                tag="h6"
                                className="border-bottom p-3 mb-0"
                            >
                                <i className="bi bi-book me-2"> </i>
                                Student Performance Report
                            </CardTitle>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="class">Class</Label>
                                        <Input
                                            id="class"
                                            name="select"
                                            type="select"
                                            value={selectedClass}
                                            onChange={handleClassChange}
                                        >
                                            {classes.map((item) => {
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
                                        <Label for="subjectCode">Subject</Label>
                                        <Input
                                            id="subjectCode"
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
                                            id="exam"
                                            name="select"
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

                                    <Button onClick={handleSubmitForm}>
                                        Submit
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <table class="table  table-hover">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">User ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Enrollment No.</th>
                                    <th scope="col">Class Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <th scope="row">{val.id}</th>
                                            <td>{val.name}</td>
                                            <td>{val.address}</td>
                                            <td>{val.dob}</td>
                                            <td>{val.phone_number}</td>
                                            <td>{val.enrollment_id}</td>
                                            <td>{val.class_section}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default Forms;
