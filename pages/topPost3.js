Highcharts.chart('category3', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#0DFF53'
    ],
    xAxis: {
        categories: ['PHILIPPINE LAWS PROTECTING THE ENVIRONMENT', 'Ano-ano po ba ang minor forest plants?', 'Help our National Parks and Protected Areas', 'help on treating used cooking oil to convert it to biofuel', 'bakit importante ang biodiversity']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total views'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'View',
        data: [53340, 33644, 25085, 23599, 18872]
    }]
});