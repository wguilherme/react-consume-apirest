import React, { Component, PureComponent } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import './style.css';
import api from "../../services/api"







const data = [
  {
    name: "Page A",
    data1: 4000,
    data2: 2400,
    data3: 2400
  },
  {
    name: "Page B",
    data1: 3000,
    data2: 1398,
    data3: 2210
  },
  {
    name: "Page C",
    data1: 2000,
    data2: 9800,
    data3: 2290
  },
  {
    name: "Page D",
    data1: 2780,
    data2: 3908,
    data3: 2000
  },
  {
    name: "Page E",
    data1: 1890,
    data2: 4800,
    data3: 2181
  },
  {
    name: "Page F",
    data1: 2390,
    data2: 3800,
    data3: 2500
  },
  {
    name: "Page G",
    data1: 3490,
    data2: 4300,
    data3: 2100
  }
];

const habilities = [
    { subject: 'Frontend', A: 95,fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'Design', A: 70, fullMark: 100 },
    { subject: 'Marketing', A: 80, fullMark: 100 },
    { subject: 'UX', A: 80, fullMark: 100 }

];


class Charts1 extends Component {
       //state

       state = {
        pets: []
    };

    //call api
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/pets');

       this.setState({pets: response.data})
        console.log(response.data);
    };




  render() {
    const { pets } = this.state;

    return (
      <div className="container">
  
          <h1>React Charts from Express API</h1>
  

        <h2>Chart 1 (local object)</h2>

        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pet_.id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data1" stroke="#8884d8" />
          <Line type="monotone" dataKey="data2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="data3" stroke="#133a9d" />
        </LineChart>


        <h2>Chart 2 (API REST data)</h2>

        <RadarChart cx={300} cy={250} outerRadius={150} width={700} height={500} data={habilities}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>

      </div>
    );
  }
}

export default Charts1;