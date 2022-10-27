import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const MonthlyReport = () => {
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
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Monthly Report</CardTitle>
        <CardSubtitle className="text-muted" tag="h5" style={{ textAlign:"center"}}>
          Monthly Analysis Report
        </CardSubtitle>
        <Chart
          type="line"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default MonthlyReport;
