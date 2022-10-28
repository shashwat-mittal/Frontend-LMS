import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Sign_img from "./Sign_img";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mt-3 p-4  ">
        <section className="d-flex justify-content-between ">
          <div className="left_data mt-3 p-4 " style={{ width: "100%" }}>
            <h2 className="text-center col-lg-8 p-4 font-size:100px">Sign In</h2>
            <Form>


              <Form.Group
                className="mb-3 col-lg-8 p-2"
                controlId="formBasicPassword"
              >
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>



              <Form.Group
                className="mb-3 col-lg-8 p-2"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                variant="primary"
                className="content-wrap  mt-3 "
                style={{ background: "rgb(51 , 153 , 255)" }}
                type="submit"
              >
                Submit
              </Button>{' '}
              <Link to="/AdminLayout" style={{ textDecoration: 'none' }}>
              <Button variant="primary"
                className="content-wrap  mt-3 " 
                style={{ background: "rgb(51 , 153 , 255)", relativeposition:" " }}
                type="submit">
                Admin
              </Button>
              </Link>
              



            </Form>

          </div>
          <Sign_img />
        </section>
      </div>

    </>
  );
};

export default Home;