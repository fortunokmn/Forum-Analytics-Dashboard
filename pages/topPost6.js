Highcharts.chart('category6', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#E80C5A'
    ],
    xAxis: {
        categories: ['Modified P.I.G.S. Baboyang Walang Amoy, Feeds/Marketing Solutions', 'Tarlac Hog Raisers Forum', 'Hog Farm Gate Price', 'How to start Piggery Business?', 'Nueva Ecija Raisers Forum']
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
        data: [3071258, 893831, 603757, 461655, 453781]
    }]
});