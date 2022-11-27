import React from 'react'
import {CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
const FeesStatus = () => {
    const chartoptions = {
        series: [{
        name: 'Paid Fees',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Pending',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
      };
  return (
    <div>
      <CardTitle tag="h4" style={{textAlign:"left",color:"black"}}>Fees Status</CardTitle>
        <CardSubtitle className="text-muted" tag="h5" style={{ textAlign:"center"}}>
          Total: Paid: Pending:
        </CardSubtitle>
        <Chart
        type="bar"
          options={chartoptions.plotOptions}
          series={chartoptions.series}
        ></Chart>
    </div>
  )
}

export default FeesStatus