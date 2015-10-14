var plot_graph = function(graphData) {
    var context = document.getElementById(graphData.id).getContext("2d");

    return new Chart(context).Line({
        labels: graphData.x,
        datasets: [
            {
                label: graphData.label,
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: graphData.y
            }]});
};

{% for graph in graphs %}
plot_graph({{ graph | json }});
{% endfor %}
