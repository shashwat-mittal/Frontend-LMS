import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Sign_img from "./Sign_img";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import Card from "react-bootstrap/Card";
import { CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { getAccessToken, post } from "../../utils/API";
import { storeLS } from "../../utils/LocalStorage";

const Home = ({ loginStatus = () => {} }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    async function handleSubmit(e) {
        e?.preventDefault();

        const payload = {
            username,
            password,
        };

        const response = await post("/users/token", payload);
        // console.log(response);

        if (response.status === 200) {
            console.log(response.data);
            storeLS("jwt_token", response.data.access);
            storeLS("user", JSON.stringify(response.data.user));
            loginStatus(true);
            if (response.data.user.is_admin) {
                navigate("/admindashboard");
            } else {
                navigate("/teacherdashboard");
            }
        } else {
            console.log(response.err);
        }
    }

    useEffect(() => {
        if (isLoggedIn && !getAccessToken()) {
            setIsLoggedIn(null);
        } else if (isLoggedIn) navigate("/");
    }, [isLoggedIn, setIsLoggedIn, navigate]);

    return (
        <>
            <LoginHeader />
            {/* <div class="card" style="width: 18rem;">
  <div class="card-body"> */}
            <div
                className="page"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <Card
                    style={{
                        width: "30%",
                        height: "30%",
                        marginTop: "6%",
                        marginBottom: "6%",
                    }}
                >
                    <CardBody>
                        <div className="container mt-3 p-4 ">
                            <section className="d-flex justify-content-between ">
                                <div
                                    className="left_data mt-3 p-4 "
                                    style={{ width: "100%" }}
                                >
                                    <h2 className="text-center col-lg-10 p-4 font-size:100px">
                                        Sign In
                                    </h2>
                                    <Form>
                                        <Form.Group
                                            className="mb-3  p-2"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter username"
                                                onChange={onChangeUsername}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3  p-2"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                onChange={onChangePassword}
                                            />
                                        </Form.Group>
                                        <Button
                                            variant="primary"
                                            className="content-wrap  mt-3 "
                                            style={{
                                                background:
                                                    "rgb(51 , 153 , 255)",
                                            }}
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </Button>{" "}
                                        
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                        <Link
                                            to="/StudentLayout"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Button
                                                variant="primary"
                                                className="content-wrap  mt-3 "
                                                style={{
                                                    background:
                                                        "rgb(51 , 153 , 255)",
                                                    relativeposition: " ",
                                                }}
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
