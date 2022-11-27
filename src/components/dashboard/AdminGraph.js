import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import {table,tbody,thead,tr,th} from 'react-bootstrap';
import { AppContext } from "../../Context/Context"
import { useContext } from "react";
const AdminGraph = () => {
  const chartoptions = {
    series: [
      {
        name: "Receipt",
        data: [0, 31, 40, 28, 51, 42, 109, 100,120,80,98,100,105],
      },
      {
        name: "Payment",
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0],
      },
    ],
    options: {
      chart: {
        type: "line",
        pointStyle:'cross',
      },
      dataLabels: {
        enabled: false,
        tension: 0,
      },
      grid: {
        strokeDashArray: 3,
      },
      
      xaxis: {
        categories: [
          "Pre-Nursery",
          "Nursery",
          "Prep",
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
        ],
      },
    },
  };
  
  const {transactions}=useContext(AppContext);
  console.log(transactions);
  return (
    <div>
    <CardTitle tag="h4" style={{ textAlign: "left", color: "black" }}>Monthly Report</CardTitle>
    <CardSubtitle className="text-muted" tag="h5" style={{ textAlign: "center" }}>
      Monthly Analysis Report
    </CardSubtitle>
    <Chart
      type="line"
      height="390"
      options={chartoptions.options}
      series={chartoptions.series}
    ></Chart>
    <table bordered responsive class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Sr No.</th>
          <th scope="col">Month</th>
          <th scope="col">Payment</th>
          <th scope="col">Receipt</th>
        </tr>
      </thead>

      {/* <tbody>
        {transactions.map((transaction)=>(
          <tr>
          <td>{transaction.month}</td>
          <td>{transaction.payment}</td>
          <td>{transaction.receipt}</td>
          </tr>
        ))}
      </tbody> */}
      <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
    </table>
  </div>
  );
};

export default AdminGraph