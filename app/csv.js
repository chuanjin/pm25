var rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';

var csv1 = 'https://raw.githubusercontent.com/chuanjin/pm25/master/app/Beijing.csv'
var csv2 = 'https://raw.githubusercontent.com/chuanjin/pm25/master/app/Shanghai.csv'
var csv3 = 'https://raw.githubusercontent.com/chuanjin/pm25/master/app/Guangzhou.csv'
var csv4 = 'https://raw.githubusercontent.com/chuanjin/pm25/master/app/Chengdu.csv'
var csv5 = 'https://raw.githubusercontent.com/chuanjin/pm25/master/app/Shenyang.csv'
var csv_files = [csv1, csv2, csv3, csv4, csv5]

var xField = 'Date (LST)';
var yField = 'Value';
var legend = 'Site'


var layout = {
    title: 'PM2.5',
    showlegend: true
};

csv_files.some(function(csv) {
    Plotly.d3.csv(csv, function(err, rawData) {
        if(err) throw err;
        var data = prepData(rawData);
        Plotly.plot('graph', data, layout,  {scrollZoom: true});
    });
});

function prepData(rawData) {
    var x = [];
    var y = [];
    var name;

    console.log(rawData.length)

    rawData.some(function(datum) {
        if (datum[yField] != -999) {
            x.push(new Date(datum[xField]));
            y.push(datum[yField]);
        }

        if (typeof name =='undefined')
        {
            name = datum[legend]
        }
    });

    return [{
        type: 'scatter',
        x: x,
        y: y,
        name: name
    }];
}
