Highcharts.chart('category7', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#FFCC0D'
    ],
    xAxis: {
        categories: ['TUNA INDUSTRY', 'Sea Cucumber culture industry', 'Abalone Market', 'seaweed farming', 'dried seaweeds for sale!']
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
        data: [8676, 7348, 6352, 6151, 5914]
    }]
});