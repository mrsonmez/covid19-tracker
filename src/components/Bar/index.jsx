import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
export default function BarChart() {
  const items = useSelector((state) => state.items);
  const confirmed = items.map((item) => item.confirmed.value).toString();
  const recovered = items.map((item) => item.recovered.value).toString();
  const deaths = items.map((item) => item.deaths.value).toString();
  console.log(confirmed, recovered, deaths, confirmed - deaths);

  let data = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "Confirmed",
        backgroundColor: ["#6174fe", "#ddf5e2", "#f3d5d5", "#f3e1c8"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: "1",
        data: [confirmed, recovered, deaths, confirmed - deaths],
      },
    ],
  };
  return (
    <div style={{ width: "500px" }}>
      <Bar data={data} />
    </div>
  );
}
