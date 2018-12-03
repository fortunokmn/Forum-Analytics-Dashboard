Highcharts.chart('category2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#000000'
    ],
    xAxis: {
        categories: ['Feasibility Studies / Simple costing and return analyses', 'African Oil Palm (Elaeis guineensis', 'Palay price monitoring', 'how to prune a mango tree', 'Sugarcane farming cost return analysis?']
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
        data: [174731, 169316, 131698, 116361, 91649]
    }]
});