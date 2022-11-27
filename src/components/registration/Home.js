import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Sign_img from "./Sign_img";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import Card from "react-bootstrap/Card";
import { CardBody } from "reactstrap";

import "./Home.css";
const Home = () => {
	return (
		<>
			<LoginHeader />
			{/* <div class="card" style="width: 18rem;">
  <div class="card-body"> */}
			<div className="page" style={{ display: "flex", justifyContent: "center", alignContent: "center", flexWrap: "wrap" }}>
				<Card style={{ width: "30%", height: "30%", marginTop: "6%", marginBottom: "6%" }}>
					<CardBody>
						<div className="container mt-3 p-4 ">
							<section className="d-flex justify-content-between ">
								<div className="left_data mt-3 p-4 " style={{ width: "100%" }}>
									<h2 className="text-center col-lg-10 p-4 font-size:100px">Sign In</h2>
									<Form>
										<Form.Group className="mb-3  p-2" controlId="formBasicPassword">
											<Form.Control type="email" placeholder="Enter email" />
										</Form.Group>
										<Form.Group className="mb-3  p-2" controlId="formBasicPassword">
											<Form.Control type="password" placeholder="Password" />
										</Form.Group>
										
										<Link to="/AdminLayout" style={{ textDecoration: "none" }}>
											<Button
												variant="primary"
												className="content-wrap  mt-3 "
												style={{
													background: "rgb(51 , 153 , 255)",
													relativeposition: " ",
												}}
												type="submit"
											>
												Admin
											</Button>
										</Link>
										<span> </span>
										<span> </span>
										<span> </span>
										<Link to="/TeacherLayout" style={{ textDecoration: "none" }}>
											<Button
												variant="primary"
												className="content-wrap  mt-3 "
												style={{ background: "rgb(51 , 153 , 255)", relativeposition: " " }}
												type="submit"
											>
												Teacher
											</Button>
										</Link>

										<span> </span>
										<span> </span>
										<span> </span>
										<Link to="/StudentLayout" style={{ textDecoration: "none" }}>
											<Button
												variant="primary"
												className="content-wrap  mt-3 "
												style={{ background: "rgb(51 , 153 , 255)", relativeposition: " " }}
												type="submit"
											>
												Student
											</Button>
										</Link>
									</Form>
								</div>
								{/* <Sign_img /> */}
							</section>
						</div>
					</CardBody>
				</Card>
			</div>
			{/* </div>
      </div> */}
		</>
	);
};

export default Home;
