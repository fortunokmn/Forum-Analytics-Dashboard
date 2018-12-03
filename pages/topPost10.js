Highcharts.chart('category10', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#0DFFCC'
    ],
    xAxis: {
        categories: ['Do you want to start a rice business?', 'PCARRD is the best web i\'ve ever encountered', 'mahogany prices per board foot?', 'chacha to sell lands to foreigners?', 'Spammer monsterboomerred!']
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
        data: [109030, 47234, 42416, 28796, 20803]
    }]
});