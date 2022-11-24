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
            <i className="bi bi-key me-2"> </i>
            Change Student Password
          </CardTitle>
          <CardBody>
            <Form>

              <FormGroup>
                <Label for="rollNo">Student Roll Number</Label>
                <Input id="rollNo" name="rollno" type="number" />
              </FormGroup>             
              
              <FormGroup>
                <Label for="exampleEmail">Student Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">New Password</Label>
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