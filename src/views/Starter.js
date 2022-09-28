import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
// import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "Subject-1",
    subtitle: "Teacher-1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Subject-2",
    subtitle: "Teacher-2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Subject-3",
    subtitle: "Teacher-3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Subject-4",
    subtitle: "Teacher-4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolor iusto, magnam et iste omnis.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Salary"
            subtitle="Salary pending"
            earning="21k"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Classes Alloted"
            subtitle="No. of lectures taken"
            earning="12"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Project"
            subtitle="No. of projects taken"
            earning="1       "
            icon="bi bi-basket3"
          />
        </Col>
        
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col xxl="12">
          <SalesChart />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="7" xxl="8" md="12">
          <ProjectTables />
        </Col>
        
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
