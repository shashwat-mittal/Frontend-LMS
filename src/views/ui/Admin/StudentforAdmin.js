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
} from "reactstrap";
import { get, post } from "../../../utils/API";

const Forms = () => {
  const [change, setChange] = useState("");
  const [classes, setClasses] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const getClassData = async (e) => {
    const response = await get("/academics/class");
    console.log(response);
    if (response.status === 200) {
      setClasses(response.data);
    }
    setChange("change");
  };
  const handleSubmitForm = async (e) => {
    const response = await get(`/students/students?classSection`);
  };
  function handleClassChange(e) {
      console.log(e.target);
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
                  <Input id="class" name="select" type="select">
                    {classes.map((item) => {
                      return (
                        <option key={item.id}>
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
                  <Input id="class" name="select" type="select" onChange={handleClassChange}>
                    {classes.map((item) => {
                      return (
                        <option key={item.id}>
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
  }
};

export default Forms;
