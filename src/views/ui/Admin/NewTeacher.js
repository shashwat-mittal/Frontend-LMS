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
                        Teacher Details
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="studentName">Teacher Name</Label>
                                <Input
                                    id="studentName"
                                    name="text"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="employeeId">Employee Id</Label>
                                <Input
                                    id="employeeId"
                                    name="text"
                                    type="number"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="designation">Designation</Label>
                                <Input
                                    id="designation"
                                    name="text"
                                    type="text"
                                />
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
                                <Input
                                    id="nationality"
                                    name="text"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input
                                    id="address"
                                    name="text"
                                    type="textarea"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="teacherImage">Image</Label>
                                <Input
                                    id="teacherImage"
                                    name="file"
                                    type="file"
                                />
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
