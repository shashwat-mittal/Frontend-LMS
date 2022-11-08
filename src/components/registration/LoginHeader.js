import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const LoginHeader = () => {
	return (
		<div>
			<Navbar bg="light" variant="light" style={{ color: "#ffff" }}>
				<Container>
					<Navbar.Brand href="#home">
						<img
							src=".\Greenland_Logo (1).ico"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<Navbar.Brand>GreenLand Public School</Navbar.Brand>

					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default LoginHeader;
