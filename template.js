// Plot a char for specified data
function plotChart(graphData) {
    var context = document.getElementById(graphData.id).getContext('2d'),
        data = {
            labels: graphData.x,
            datasets: [
                {
                    label: graphData.label,
                    data: graphData.y,
                    fillColor: 'rgba(151,187,205,0.2)',
                    strokeColor: 'rgba(151,187,205,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)'
                }]},
        options = {
            scaleOverride: true,
            scaleSteps : {{ graph_config.scale_steps }},
            scaleStepWidth : {{ graph_config.scale_step_width }},
            scaleStartValue : {{ graph_config.scale_start_value }}};

    return new Chart(context).Line(data, options);
};

// Update graph defaults
Chart.defaults.global.scaleFontFamily = 'Ubuntu';
Chart.defaults.global.scaleFontStyle = 300;
Chart.defaults.global.tooltipFontFamily = 'Ubuntu';
Chart.defaults.global.tooltipFontStyle = 300;
Chart.defaults.global.responsive = true;

// Plot data
{% for graph in graphs %}
  plotChart({{ graph | json }});
{% endfor %}
