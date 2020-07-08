import Chart from "chart.js";

export class WeatherChart {
  constructor(ref) {
    this.ref = ref;
    this.chart = null;
  }

  drawTemperatureChart = (data) => {
    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.ref.current, {
      type: "line",
      data: {
        labels: data.hour,
        datasets: [
          {
            label: "Temperature [°C]",
            data: data.temp,
            backgroundColor: "rgba(255, 166, 0, 0.163)",
            borderColor: "orange",
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 16,
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
        },
      },
    });

    return this.chart;
  };

  drawHumidityChart = (data) => {
    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.ref.current, {
      type: "bar",

      data: {
        labels: data.hour,
        datasets: [
          {
            label: "Huminidity [%]",
            data: data.humidity,
            backgroundColor: "rgba(135, 206, 250, 0.511)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 16,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
              categoryPercentage: 1.0,
              barPercentage: 1.0,
            },
          ],
        },
      },
    });

    return this.chart;
  };

  drawWindChart = (data) => {
    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.ref.current, {
      type: "line",
      data: {
        labels: data.hour,
        datasets: [
          {
            label: "Wind [km/h]",
            lineTension: 0,
            data: data.wind,
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      },
      options: {
        bezierCurve: false,
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 16,
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "white",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
              },
            },
          ],
        },
      },
    });

    return this.chart;
  };
}
