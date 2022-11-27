import { useEffect, useMemo, useState } from "react";
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
} from "reactstrap";
import { get, post } from "../../../utils/API";
import generatePDF from "../../../utils/Table/statementGenerator";

const Forms = () => {
  const [change, setChange] = useState("");
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [classData, setClassData] = useState([]);
  const getClassData = async (e) => {
    const response = await get("/academics/class");
    console.log(response);
    if (response.status === 200) {
      setClasses(response.data);
    }
    setChange("change");
  };
  const handleSubmitForm = async (e) => {
    const response = await get(
      `/students/students?class_section=${selectedClass}`
    );
    if (response.status === 200) {
      console.log(response.data);
      setClassData(response.data);
    }
    setFormSubmitted(true);
  };
  function handleClassChange(e) {
    setSelectedClass(e.target.value);
    console.log(e.target.value);
  }
  function generateFile(e){
    generatePDF(classData);
  }
  
  useEffect(() => {
    getClassData();
  }, [change]);
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
              Students List
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
                        <option key={item.id} value={item.id}>
                          {item.classname + " " + item.section}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>

                <Button onClick={handleSubmitForm}>Submit</Button>
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
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-book me-2"> </i>
                Students List
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
                      {classes.length?classes.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.classname + " " + item.section}
                          </option>
                        );
                      }) : <h3>No data to show</h3>}
                    </Input>
                  </FormGroup>

                  <Button onClick={handleSubmitForm}>Submit</Button>
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
                {classData.map((val, key) => {
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
        <Row>
        <Col><Button onClick={generateFile}>Generate PDF</Button></Col>
          
        </Row>
      </div>
    );
  }
};

export default Forms;
