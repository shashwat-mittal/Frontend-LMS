import { Col, Row } from "reactstrap";
import ClassStrengthPie from "../components/dashboard/ClassStrengthPie";
import FeesStatus from "../components/dashboard/FeesStatus";
import Defaulters from "../components/dashboard/Defaulters";
import AdminGraph from "../components/dashboard/AdminGraph";
import Finance from "../components/dashboard/Finance";
import TopCards from "../components/dashboard/TopCards";
import { Card, CardBody,CardTitle } from "reactstrap";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../AdminDash.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Card >
      <CardBody>
        <CardTitle tag="h6">Statistics</CardTitle>
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            subtitle="Exams and CBSE Exams"
            earning="0"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            subtitle="Employee"
            earning="233"
            icon="bi bi-coin"
          />
        </Col>
        </Row>
      </CardBody>
      </Card>
        <div className="container">
        <div className="col1">
          <Item style={{ margin: "15px", marginLeft:"0px", padding: "10px", backgroundColor: "#D7E4E9" }}><ClassStrengthPie/></Item>
          <Item style={{ margin: "15px", marginLeft:"0px", padding: "10px", backgroundColor: "#D7E4E9" }}><Defaulters /></Item>
          <Item style={{ margin: "15px", marginLeft:"0px", padding: "10px", backgroundColor: "#D7E4E9" }}><Finance/></Item>
        </div>
        <div className="col2">
          <Item style={{ margin: "15px", marginRight:"0px", padding: "20px", backgroundColor: "#D7E4E9" }}>
          <FeesStatus />
          </Item>
          <Item style={{ margin: "15px", marginRight:"0px", padding: "20px", backgroundColor: "#D7E4E9" }}>
          <AdminGraph />
          </Item>
        </div>
      </div>
     
    </div>
  );
};

export default Starter;
