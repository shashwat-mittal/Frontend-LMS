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
            <i className="bi bi-book me-2"> </i>
            Upload Notice
          </CardTitle>
          <CardBody>
            <Form>

              <FormGroup>
                <Label for="noticeTitle">Notice Title</Label>
                <Input id="noticeTitle" name="text" type="text" />
              </FormGroup>

              <FormGroup>
                {/* <Label for="noticeImage">Upload File Here</Label> */}
                <Input id="noticeImage" name="file" type="file" />
              </FormGroup>

              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-clock me-2"> </i>
            Update TimeTable
          </CardTitle>
          <CardBody>
            <Form>
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
                {/* <Label for="noticeImage">Upload File Here</Label> */}
                <Input id="timetableImage" name="file" type="file" />
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
