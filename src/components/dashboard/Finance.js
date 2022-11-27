import React from 'react'
import TopCards from "./TopCards"
import { Row,Col, CardTitle } from "reactstrap";

const Finance = () => {

  return (
    <div>
      <CardTitle tag="h6" style={{textAlign:"left",color:"black",marginBottom:"5px"}}>Finance</CardTitle>
          <Row>
            <Col sm="6" lg="3">
              <TopCards
                bg="bg-light-success text-success"
                subtitle="xyz"
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
    </div>
  )
}

export default Finance