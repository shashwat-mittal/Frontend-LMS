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
            <i className="bi bi-book me-2"> </i>
            Update Marks
          </CardTitle>
          <CardBody>
            <Form>

              <FormGroup>
                <Label for="enrollmentId">Student's Enrollment Number</Label>
                <Input id="enrollmentId" name="eid" type="number" />
              </FormGroup>  

              <FormGroup>
                <Label for="subjectCode">Subject Code</Label>
                <Input id="subjectCode" name="subject" type="text" />
              </FormGroup>        
              
              <FormGroup>
                <Label for="exam">Exam</Label>
                <Input id="exam" name="select" type="select">
                  <option>Half-Yearly</option>
                  <option>Yearly</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="marks">Marks</Label>
                <Input id="marks" name="marks" type="number" />
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

