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
            Upload Student Marks
          </CardTitle>
          <CardBody>
            <Form>

              <FormGroup>
                <Label for="rollNo">Student Roll Number</Label>
                <Input id="rollNo" name="rollno" type="number" />
              </FormGroup>     
              <FormGroup>
                <Label for="subjectCode">Subject Code</Label>
                <Input id="subjectCode" name="subject" type="text" />
              </FormGroup>        
              
              <FormGroup>
                <Label for="term1">Term 1</Label>
                <Input id="term1" name="number" type="number" />
              </FormGroup>
              <FormGroup>
                <Label for="term2">Term 2</Label>
                <Input id="term2" name="number" type="number" />
              </FormGroup>
              <FormGroup>
                <Label for="halfYearly">Half-Yearly</Label>
                <Input id="halfYearly" name="number" type="number" />
              </FormGroup>
              <FormGroup>
                <Label for="term3">Term 3</Label>
                <Input id="term3" name="number" type="number" />
              </FormGroup>
              <FormGroup>
                <Label for="term4">Term 4</Label>
                <Input id="term4" name="number" type="number" />
              </FormGroup>
              <FormGroup>
                <Label for="yearly">Yearly</Label>
                <Input id="yearly" name="number" type="number" />
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
