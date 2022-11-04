import React from 'react'
import Chart from "react-apexcharts"
import { CardSubtitle, CardTitle } from "reactstrap";
const ClassStrengthPie = () => {
    const chartoptions = {
        series: [44, 55, 13, 43, 22,20,65,23,57,60,34,56,34,30],
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
        <CardTitle tag="h6" style={{textAlign:"left",color:"black",marginBottom:"5px"}}>Class Strength</CardTitle>
        <CardSubtitle className="text-muted" tag="h5" style={{ textAlign:"center"}}>
         Total Strength: 943
        </CardSubtitle>
        <Chart type="pie"
          options={chartoptions.options}
          series={chartoptions.series}>
          </Chart>
    </div>
  )
}

export default ClassStrengthPie