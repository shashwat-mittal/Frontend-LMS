import React from 'react'
import Chart from "react-apexcharts"
import { CardSubtitle, CardTitle } from "reactstrap";
const Defaulters = () => {
    const chartoptions = {
        series: [{
            name: 'Paid Fees',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]},{
            name: 'Pending',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }
        ],
        options: {
          chart: {
            type: 'pie',
          },
          labels:[
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
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              }
            }
          }]
        }
      };
  return (
    <div>
      <CardTitle tag="h6" style={{textAlign:"left",color:"black",marginBottom:"5px"}}>Defaulters</CardTitle>
        <CardSubtitle className="text-muted" tag="h5" style={{ textAlign:"center"}}>
         Total Strength:2714947</CardSubtitle>
         <CardSubtitle className="text-muted" tag="h5" style={{ textAlign:"center"}}>
         Total Defaulters:250</CardSubtitle>
         <Chart
          type="pie"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
    </div>
  )
}

export default Defaulters