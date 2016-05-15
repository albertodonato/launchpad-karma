// Plot a char for specified data
function plotChart(graphData) {
    var context = document.getElementById(graphData.id).getContext('2d');
    var data = {
        labels: graphData.x,
        datasets: [
            {label: graphData.label,
             data: graphData.y,
             backgroundColor: 'rgba(151,187,205,0.2)',
             borderColor: 'rgba(151,187,205,1)',
             pointBackgroundColor: 'rgba(151,187,205,1)',
             pointBorderColor: '#fff',
             pointBorderWidth: 1,
             pointRadius: 3,
             pointHoverBackgroundColor: '#fff',
             pointHoverBorderColor: 'rgba(151,187,205,1)',
             pointHoverRadius: 5}
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
                     stepSize: {{ graph_config.scale_step_width }},
                     min: {{ graph_config.scale_start_value }},
                     max : {{ graph_config.scale_start_value }} + {{ graph_config.scale_step_width }} * {{ graph_config.scale_steps }},
                 }}
            ]}
    };

    return new Chart.Line(context, {data: data, options: options});
};

// Set graph defaults
Chart.defaults.global.defaultFontFamily = 'Ubuntu';
Chart.defaults.global.defaultFontStyle = 300;
Chart.defaults.global.tooltips.titleFontFamily = 'Ubuntu';
Chart.defaults.global.tooltips.titleFontStyle = 300;
Chart.defaults.global.tooltips.bodyFontFamily = 'Ubuntu';
Chart.defaults.global.tooltips.bodyFontStyle = 300;
Chart.defaults.global.tooltips.footerFontFamily = 'Ubuntu';
Chart.defaults.global.tooltips.footerFontStyle = 300;
Chart.defaults.global.legend.display = false;

// Plot data
{% for graph in graphs %}
  plotChart({{ graph | json }});
{% endfor %}
