// Load google charts
google.charts.load('current', {'packages':['corechart', 'treemap']});
google.charts.setOnLoadCallback(drawGenderChart);
google.charts.setOnLoadCallback(drawExpChart);
google.charts.setOnLoadCallback(drawRaceChart);
google.charts.setOnLoadCallback(drawBudgetChart);

// Draw the chart and set the chart values
function drawGenderChart() {
  var data = google.visualization.arrayToDataTable([
  ['Gender', 'Percent'],
  ['Male', .692],
  ['Female', .308]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    // width: 300,
    height: 300,
    tooltip: {text: 'percentage'},
    legend: {position: 'bottom'},
    chartArea: {top: 0, width: '85%'}
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('genderchart'));
  chart.draw(data, options);
}

//NEXT CHART -------------------------------------------------------------------
function drawExpChart() {
  var data = google.visualization.arrayToDataTable([
  ['Experience', 'Percent'],
  ['No past experience', .223],
  ['Novice programmer', .384],
  ['Intermediate programmer', .327],
  ['Advanced programmer', .065],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    height: 300,
    tooltip: {text: 'percentage'},
    legend: {position: 'bottom'},
    chartArea: {top: 0, width: '85%'}
  };
  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('expchart'));
  chart.draw(data, options);
}

//NEXT CHART -------------------------------------------------------------------
function drawRaceChart() {
  var data = google.visualization.arrayToDataTable([
  ['Race', 'Percent'],
  ['American Indian or Alaska Native', .016],
  ['Asian', .626],
  ['Black', .447],
  ['Hispanic', .065],
  ['White', .065],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    height: 300,
    tooltip: {text: 'percentage'},
    legend: {position: 'bottom'},
    chartArea: {top: 0, width: '85%'}
  };
  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('racechart'));
  chart.draw(data, options);
}
//NEXT CHART -------------------------------------------------------------------
function drawBudgetChart() {
        var data = google.visualization.arrayToDataTable([
          ['Item', 'Parent', 'Budget', "Percent"],
          ['Budget', null, 0, 0],
          ['Food', 'Budget', 0, 51.72],
          ['Saturday Lunch', 'Food', 977.63, 7.13],
          ['Saturday Dinner', 'Food', 1880, 13.71],
          ['Sunday Breakfast', 'Food', 540, 3.94],
          ['Sunday Lunch', 'Food', 2000, 14.59],
          ['Snacks', 'Food', 910.96, 6.64],
          ['Drinks', 'Food', 691.06, 5.04],
          ['Utensils ', 'Food', 90.61, 0.66],
          ['Merch', 'Budget', 0, 32.46],
          ['T-Shirts', 'Merch', 600, 4.38],
          ['Drawstring Bags', 'Merch', 3610.5, 26.34],
          ['Stickers', 'Merch', 100, 0.73],
          ['Name Badges', 'Merch', 139.91, 1.02],
          ['Programming', 'Budget', 0, 15.82],
          ['Prizes', 'Programming', 1208, 8.81],
          ['Activities', 'Programming', 679.94, 4.96],
          ['Other', 'Programming', 70.81, 0.52],
          ['Admin', 'Budget', 210, 1.53],
        ]);

        tree = new google.visualization.TreeMap(document.getElementById('budgetChart'));

        var options = {
          minColor: '#559DB4',
          // midColor: '#ddd',
          // maxColor: '#559DB4',
          headerHeight: 30,
          fontColor: 'black',
          showScale: false,
          height: '300',
          highlightOnMouseOver: true,
          maxPostDepth: 3,
          generateTooltip: showFullTooltip
        };

        tree.draw(data, options);

        function showFullTooltip(row, size, value) {
            return '<div style="background:white; padding:5px; border-style:solid; border-width: 1px;"">' +
                   data.getValue(row, 0) + ': ' + data.getValue(row, 3) + '% </div>';
          }

      }
