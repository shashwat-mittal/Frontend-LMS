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

const Forms = () => {
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
            <Form>

              <FormGroup>
                <Label for="studentName">Student Name</Label>
                <Input id="studentName" name="text" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="admissionNumber">Admission Number</Label>
                <Input id="admissionNumber" name="text" type="number" />
              </FormGroup>
              
              <FormGroup>
                <Label for="class">Class</Label>
                <Input id="class" name="select" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input id="dob" name="date" type="date" />
              </FormGroup>
              <FormGroup>
                <Label for="joiningDate">Date of Joining</Label>
                <Input id="joiningDate" name="date" type="date" />
              </FormGroup>
              <FormGroup>
                <Label for="fatherName">Father's Name</Label>
                <Input id="fatherName" name="text" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="motherName">Mother's Name</Label>
                <Input id="motherName" name="text" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input id="gender" name="select" type="select">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input id="category" name="text" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="nationality">Nationality</Label>
                <Input id="nationality" name="text" type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input id="address" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="studentImage">Image</Label>
                <Input id="studentImage" name="file" type="file" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  type="password"
                />
              </FormGroup>

              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;