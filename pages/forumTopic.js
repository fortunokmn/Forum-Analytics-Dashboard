
var drillF_data = drillF;
console.log(drillF_data)

// Create the chart
Highcharts.chart('container1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Forum Topic Categories'
    },
    subtitle: {
        text: 'Click the columns to view sub-categories. Source: <a href="http://mboard.pcaarrd.dost.gov.ph/forum/index.php">PCAARRD Message Board</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total number of posts'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                //format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.0f}</b> posts<br/>'
    },

    "series": [
        {
            "name": "Categories",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Agricultural Resources Management",
                    "y": 3700,
                    "drilldown": "Agricultural Resources Management"
                },
                {
                    "name": "Crops",
                    "y": 9049,
                    "drilldown": "Crops"
                },
                {
                    "name": "Environment",
                    "y": 290,
                    "drilldown": "Environment"
                },
                {
                    "name": "Forestry",
                    "y": 2017,
                    "drilldown": "Forestry"
                },
                {
                    "name": "Inland Aquatic Resources",
                    "y": 398,
                    "drilldown": "Inland Aquatic Resources"
                },
                {
                    "name": "Livestock",
                    "y": 59385,
                    "drilldown": "Livestock"
                },
                {
                    "name": "Marine Resources",
                    "y": 36,
                    "drilldown": "Marine Resources"
                },
                {
                    "name": "Socio Economics",
                    "y": 418,
                    "drilldown": "Socio Economics"
                },
                {
                    "name": "Publications",
                    "y": 217,
                    "drilldown": null
                },
                {
                    "name": "Sundry",
                    "y": 9474,
                    "drilldown": "Sundry"
                }
            ]
        }
    ],
    "drilldown": {
        series: drillF_data
        
    }
});
