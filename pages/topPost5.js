Highcharts.chart('category5', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#2C0CE8'
    ],
    xAxis: {
        categories: ['Aquaponics - a self-sustaining system, plants-fish-bacteria & worms', 'where can I buy Ulang fry as well as books on Ulang raising?', 'Tilapia Culture', 'Need help sa Fresh Water Fish Pond', 'I need help how to start Tahong Farming']
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
        data: [34367, 27883, 25060, 11974, 11628]
    }]
});