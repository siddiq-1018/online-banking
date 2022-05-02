import React from 'react';
import '../style.css';
import {LineChart,XAxis,Tooltip,CartesianGrid,Line} from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';

// // ChartJS.register(
// //     CategoryScale,
// //     LinearScale,
// //     PointElement,
// //     LineElement,
// //     Title,
// //     Tooltip,
// //     Legend
// //   );
  
// //   export const options = {
// //     responsive: true,
// //     plugins: {
// //       legend: {
// //         position: 'top',
// //       },
// //       title: {
// //         display: true,
// //         text: 'Chart.js Line Chart',
// //       },
// //     },
// //   };
  
// // const labels = Utils.months({count: 7});
const data = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)'
  }]
};
// static getDerivedStateFromError(error) {
//   // Update state so the next render will show the fallback UI.
//   return { hasError: true };
// };

// componentDidCatch(error, errorInfo) {
//   // You can also log the error to an error reporting service
//   logErrorToMyService(error, errorInfo);
// };

  function Graph() {
    <LineChart
  width={400}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
    };
    
//     return <Line data={data} />;
//   }

  export default Graph;
  



