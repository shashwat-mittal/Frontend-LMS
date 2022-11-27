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