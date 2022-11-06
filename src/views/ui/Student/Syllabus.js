import { Badge, Button,Table, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const Badges = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Syllabus
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Subjects</th>
                  <th>Term 1</th>
                  <th>Term 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maths</td>
                  <td>NUMBER SYSTEMS, ALGEBRA, COORDINATE GEOMETRY</td>
                  <td>GEOMETRY, MENSURATION, STATISTICS & PROBABILITY</td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>Matter - Its Nature and Behaviour, Organization in the Living World, Motion, Force and Work, Food Production</td>
                  <td>Chemical Substances-Nature and Behaviour, World of Living, Natural Phenomena, Effects of Current, Natural Resources</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>The Fun They Had, The Sound of Music, The Little Girl, A Truly Beautiful Mind, The Snake and the Mirror, My Childhood, Reach For The Top, Kathmandu, If I were You, The Road Not taken, Wind, Rain on The Roof, The Lake Isle of Innisfree</td>
                  <td>A Legend of The Northland, No Men Are Foreign, On killing a tree, A Slumber Did My Spirit Seal, The Lost Child, The adventures of Toto, Iswaran the Storyteller, In the kingdom of fools, The Happy Prince, The Last Leaf, A House is not a Home, The Beggar</td>
                </tr>
                <tr>
                  <td>Hindi</td>
                  <td>कहानी, कविता</td>
                  <td>निबंध, विज्ञापन, पत्र लेखन</td>
                </tr>
                <tr>
                  <td>Social Science</td>
                  <td>India and the Contemporary World, Contemporary India</td>
                  <td>Democratic Politics, Economics</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Badges;

{/* <Col xs="12" md="12" sm="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges
            </CardTitle>
            <CardBody className="">
              <div>
                <h1>
                  Heading <Badge color="secondary">New</Badge>
                </h1>
                <h2>
                  Heading <Badge color="secondary">New</Badge>
                </h2>
                <h3>
                  Heading <Badge color="secondary">New</Badge>
                </h3>
                <h4>
                  Heading <Badge color="secondary">New</Badge>
                </h4>
                <h5>
                  Heading <Badge color="secondary">New</Badge>
                </h5>
                <h6>
                  Heading <Badge color="secondary">New</Badge>
                </h6>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12" sm="12">


          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges with Button
            </CardTitle>
            <CardBody className="">
              <div>
                <Button color="primary" outline>
                  Notifications <Badge color="secondary">1</Badge>
                </Button>
                <Button color="secondary" className="ms-3" outline>
                  Notifications <Badge color="secondary">2</Badge>
                </Button>
                <Button color="info" className="ms-3" outline>
                  Notifications <Badge color="secondary">3</Badge>
                </Button>
                <Button color="warning" className="ms-3" outline>
                  Notifications <Badge color="secondary">4</Badge>
                </Button>
                <Button color="danger" className="ms-3" outline>
                  Notifications <Badge color="secondary">5</Badge>
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
     

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges with Contextual variations
            </CardTitle>
            <CardBody className="">
              <div>
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary" className="ms-3">
                  Secondary
                </Badge>
                <Badge color="success" className="ms-3">
                  Success
                </Badge>
                <Badge color="danger" className="ms-3">
                  Danger
                </Badge>
                <Badge color="warning" className="ms-3">
                  Warning
                </Badge>
                <Badge color="info" className="ms-3">
                  Info
                </Badge>
                <Badge color="light" className="ms-3">
                  Light
                </Badge>
                <Badge color="dark" className="ms-3">
                  Dark
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
         
        
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges with Pills
            </CardTitle>
            <CardBody className="">
              <div>
                <Badge color="primary" pill>
                  Primary
                </Badge>
                <Badge color="secondary" className="ms-3" pill>
                  Secondary
                </Badge>
                <Badge color="success" className="ms-3" pill>
                  Success
                </Badge>
                <Badge color="danger" className="ms-3" pill>
                  Danger
                </Badge>
                <Badge color="warning" className="ms-3" pill>
                  Warning
                </Badge>
                <Badge color="info" className="ms-3" pill>
                  Info
                </Badge>
                <Badge color="light" className="ms-3" pill>
                  Light
                </Badge>
                <Badge color="dark" className="ms-3" pill>
                  Dark
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          
        
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges with Links
            </CardTitle>
            <CardBody className="">
              <div>
                <Badge href="" color="primary">
                  Primary
                </Badge>
                <Badge href="" color="secondary" className="ms-3">
                  Secondary
                </Badge>
                <Badge href="" color="success" className="ms-3">
                  Success
                </Badge>
                <Badge href="" color="danger" className="ms-3">
                  Danger
                </Badge>
                <Badge href="" color="warning" className="ms-3">
                  Warning
                </Badge>
                <Badge href="" color="info" className="ms-3">
                  Info
                </Badge>
                <Badge href="" color="light" className="ms-3">
                  Light
                </Badge>
                <Badge href="" color="dark" className="ms-3">
                  Dark
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col> */}