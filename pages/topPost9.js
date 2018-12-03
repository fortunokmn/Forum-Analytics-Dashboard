Highcharts.chart('category9', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#FF0000'
    ],
    xAxis: {
        categories: ['Agricultural VCDs for Sale', 'FEASIBILITY STUDIES and/or BUSINESS PLANS', 'PCARRD Publications Released, 2010', 'Books for sale', 'free disemination of all publications in internet']
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
        data: [38414, 25439, 16809, 11437, 10533]
    }]
});