Highcharts.chart('category1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5 Most Viewed Forum Posts'
    },
    colors: [
        '#3BBEE3'
    ],
    xAxis: {
        categories: ['100% PURE ORGANIC FERTILIZER made of NATURES BENEFICIAL MICROORGANISM', 'natural farming seminar by andry lim', 'paano po gumawa ng carbonized rice hull?', 'organic fermented juices', 'BioFUEL, BioDIESEL & Biogas']
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
        data: [140266, 120558, 97623, 95178, 73163]
    }]
});