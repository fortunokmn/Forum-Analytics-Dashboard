Highcharts.chart('category4', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#FF7B0D'
    ],
    xAxis: {
        categories: ['Registered users and guest who have planted a tree or trees', 'preserving and maintaining bamboo houses', 'Cocoa Beans Farming', 'rubber plantation', 'Mahogany Seedlings by the Thousands']
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
        data: [198291, 114345, 93526, 77476, 76047]
    }]
});