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
  
import { useState, useEffect } from "react";
import { post, get } from "../../../utils/API";
import { useNavigate } from "react-router-dom";

  const Forms = () => {
	const navigate = useNavigate();
    async function handleSubmit(event) {
        let formData = new FormData(document.getElementById("form"));
		console.log(formData)
		formData.append("is_teacher",true)
        let response = await post("/users/add",formData, null, true);
        if ((response.status === 200)) {
            alert("Teacher added Successfully!");
            navigate("/teacherDashboard");
        }
    }

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
			  <Form id="form">
  
				<FormGroup>
				  <Label for="studentName">Teacher Name</Label>
				  <Input id="studentName" name="name" type="text" />
				</FormGroup>
				<FormGroup>
				  <Label for="phoneNumber">Phone Number</Label>
				  <Input id="phoneNumber" name="phone_number" type="number" />
				</FormGroup>
				<FormGroup>
				  <Label for="designation">Designation</Label>
				  <Input id="designation" name="designation" type="text" />
				</FormGroup>
				
				<FormGroup>
				  <Label for="gender">Gender</Label>
				  <Input id="gender" name="gender" type="select">
					<option>MALE</option>
					<option>FEMALE</option>
					<option>OTHER</option>
				  </Input>
				</FormGroup>
				<FormGroup>
				  <Label for="category">Category</Label>
				  <Input id="category" name="social_category" type="text" />
				</FormGroup>
				<FormGroup>
				  <Label for="nationality">Nationality</Label>
				  <Input id="nationality" name="nationality" type="text" />
				</FormGroup>
				<FormGroup>
				  <Label for="address">Address</Label>
				  <Input id="address" name="address" type="textarea" />
				</FormGroup>
				<FormGroup>
				  <Label for="teacherImage">Image</Label>
				  <Input id="teacherImage" name="image" type="file" />
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
				  <Label for="username">Username</Label>
				  <Input id="username" name="username" type="text" />
				</FormGroup>
				<FormGroup>
				  <Label for="examplePassword">Password</Label>
				  <Input
					id="examplePassword"
					name="password"
					type="password"
				  />
				</FormGroup>
  
				<Button onClick={handleSubmit}>Submit</Button>
			  </Form>
			</CardBody>
		  </Card>
		</Col>
	  </Row>
	);
  };
  
  export default Forms;