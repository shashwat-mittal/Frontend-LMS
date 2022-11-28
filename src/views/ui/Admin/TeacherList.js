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

const Forms = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [teacherData, setTeacherData] = useState([]);
  const handleSubmitForm = async (e) => {
    const response = await get(`/users/list?is_teacher=${true}`);
    if (response.status === 200) {
      console.log(response.data);
      setTeacherData(response.data);
    }
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
              Teachers List
            </CardTitle>
            <CardBody>
              <Form>
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
                Teachers List
              </CardTitle>
              <CardBody>
                <Form>
                  <Button onClick={handleSubmitForm}>Generate Teachers List</Button>
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
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Gender</th>
              <th scope="col">Nationality</th>
              <th scope="col">Category</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {teacherData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.designation}</td>
                  <td>{val.gender}</td>
                  <td>{val.nationality}</td>
                  <td>{val.social_category}</td>
                  <td>{val.address}</td>
                  <td>{val.email}</td>
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