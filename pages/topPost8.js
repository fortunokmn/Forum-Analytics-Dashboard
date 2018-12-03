Highcharts.chart('category8', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#21B6A8'
    ],
    xAxis: {
        categories: ['Empowerment of Rural Folks', 'Needs of Rural areas', 'Are there studies on the effects of CARP on the agri industry?', 'business plans', 'multi millionaire and billionair cooperatives']
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
        data: [87293, 20216, 19880, 19371, 14762]
    }]
});