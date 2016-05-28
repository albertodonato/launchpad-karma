{# -*- mode: jinja2 -*- #}

// Plot a char for specified data
function plotChart(graphData) {
    var context = document.getElementById(graphData.id).getContext('2d');
    var data = {
        labels: graphData.x,
        datasets: [
            {label: graphData.label,
             data: graphData.y,
             backgroundColor: 'rgba(151, 187, 205, 0.2)',
             borderColor: 'rgb(151, 187, 205)',
             pointBackgroundColor: 'rgb(151, 187, 205)',
             pointBorderColor: '#fafafa',
             pointHoverBackgroundColor: '#fafafa',
             pointHoverBorderColor: 'rgb(151, 187, 205)'
            }
        ]
    };
    var options = {
        scales: {
            yAxes : [
                {type: 'linear',
                 scaleLabel: {
                     fontFamily: 'Ubuntu',
                     fontStyle: 300},
                 ticks: {
                     min: {{ graph_config.y_axis.min }},
                     max : {{ graph_config.y_axis.max }},
                     stepSize: {{ graph_config.y_axis.step_width }}}}
            ]}
    };

    return new Chart.Line(context, {data: data, options: options});
};

// Set graph defaults
Chart.defaults.global.defaultFontFamily = 'Ubuntu';
Chart.defaults.global.defaultFontStyle = 300;
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.point.radius = 3;
Chart.defaults.global.elements.point.hoverRadius = 5;
Chart.defaults.global.tooltips.titleFontFamily = 'Ubuntu';
Chart.defaults.global.tooltips.titleFontStyle = 500;
Chart.defaults.global.tooltips.titleFontSize = 14;
Chart.defaults.global.tooltips.bodyFontFamily = 'Ubuntu';
Chart.defaults.global.tooltips.bodyFontStyle = 300;
Chart.defaults.global.tooltips.bodyFontSize = 14;
Chart.defaults.global.tooltips.footerFontFamily = 'Ubuntu';
Chart.defaults.global.tooltips.footerFontStyle = 300;
Chart.defaults.global.tooltips.footerFontSize = 14;
Chart.defaults.global.tooltips.callbacks.title = function(tooltipItems, data) {
    return tooltipItems[0].yLabel;
};
Chart.defaults.global.tooltips.callbacks.label = function(tooltipItem, data) {
    var day = tooltipItem.xLabel;
    var month = data.datasets[0].label;
    return day + ' ' + month;
};


// Plot data
{% for graph in graphs %}
  plotChart({{ graph | json }});
{% endfor %}
