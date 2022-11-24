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
						<span> </span> 
						<span>GreenLand Public School</span>
					</Navbar.Brand>

				</Container>
			</Navbar>
		</div>
	);
};

export default LoginHeader;
