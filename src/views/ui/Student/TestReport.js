//Tables
// import ProjectTables from "../../../components/dashboard/Teachers";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* <Col lg="12">
        <ProjectTables />
      </Col> */}
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Report Card
          </CardTitle>
          <CardBody className="">
            <Table bordered striped>
              <thead>
                <tr>
                  <th>Subjects</th>
                  <th>Term 1</th>
                  <th>Term 2</th>
                  <th>Half-Yearly</th>
                  <th>Term 3</th>
                  <th>Term 4</th>
                  <th>Yearly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Maths</th>
                  <th>28</th>
                  <th>27</th>
                  <th>75</th>
                  <th>29</th>
                  <th>30</th>
                  <th>78</th>
                </tr>
                <tr>
                  <th>Science</th>
                  <th>28</th>
                  <th>27</th>
                  <th>75</th>
                  <th>29</th>
                  <th>30</th>
                  <th>78</th>
                </tr>
                <tr>
                  <th>English</th>
                  <th>28</th>
                  <th>27</th>
                  <th>75</th>
                  <th>29</th>
                  <th>30</th>
                  <th>78</th>
                </tr>
                <tr>
                  <th>Hindi</th>
                  <th>28</th>
                  <th>27</th>
                  <th>75</th>
                  <th>29</th>
                  <th>30</th>
                  <th>78</th>
                </tr>
                <tr>
                  <th>Social Science</th>
                  <th>28</th>
                  <th>27</th>
                  <th>75</th>
                  <th>29</th>
                  <th>30</th>
                  <th>78</th>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>

    </Row>
  );
};

export default Tables;