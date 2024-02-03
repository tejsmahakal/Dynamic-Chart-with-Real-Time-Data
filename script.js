const ctx = document.getElementById("myChart");
let chart;
let chartData = {
    labels: [],
    datasets: [{
      label: 'value',
      data: [],
      borderWidth: 1
    }]
};

let configData = {
  type: "line",
  data: chartData,
  Option: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

chart = new Chart(ctx, configData);
function updatefun() {
  let randomData  = Math.floor(Math.random()*100)
  chartData.datasets[0].data.push(randomData);
  chartData.labels.push(chartData.datasets[0].data.length)
  console.log(randomData);
  chart.update();

}

setInterval(updatefun, 1000);