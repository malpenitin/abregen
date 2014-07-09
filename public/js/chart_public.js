$(function(){

// data for the graphs -- with color 
var chart_1_data = {
	labels : ["Day 8","Day 9","Day 10","Day 11","Day 12","Day 13","Day 14","Day 15","Day 16"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [4.5,9,8,10,5,3,3,3,2],
			title: 'Anti-flightless 1'
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [4,14,12,16,12.5,11,6,5.8,4],
			title: 'Control antibody'
		}
	]
}

var steps = 10;
var chart_1_options =  { 
							xAxisLabel : "Topical Cream Treatment",
							yAxisLabel : "Percentage of blistering on mice back (%)",
							legend : true,
							scaleOverride: true,
						    scaleSteps: steps,
						    scaleStepWidth: Math.ceil(20 / steps),
						    scaleStartValue: 0
						};

var chart_2_data = {
	labels : ["Week 3","Week 4","Week 5","Week 6","Week 7","Week 8","Week 9"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [10,25,40,80,110,100,90],
			title: 'Anti-flightless 1'
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [30,50,150,200,250,280,350],
			title: 'Control antibody'
		}
	]
}

var steps = 10;
var chart_2_options =  { 
							yAxisLabel : "Tumour volume (mm3)",
							legend : true,
							scaleOverride: true,
						    scaleSteps: steps,
						    scaleStepWidth: Math.ceil(500 / steps),
						    scaleStartValue: 0,
						    bezierCurve : false,
						    datasetFill : false
						};

// default resize the canvas
resizeCanvas();

drawCanvas();

// grab the canvas nodes
function resizeCanvas() {
	$('canvas').each(function(){
		var canvas = $(this).get(0);
		fitToContainer(canvas);
	});
}

// adjust the canvas width to the container size
function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='400';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

// window resize -- resize the canvas
$(window).resize(function() {
	resizeCanvas();
	drawCanvas();
});



function drawCanvas() {
	// render the charts
	var chart_1 = document.getElementById("chart_1").getContext("2d");
	var Chart_1 = new Chart(chart_1).Bar(chart_1_data,chart_1_options);

	var chart_2 = document.getElementById("chart_2").getContext("2d");
	var Chart_2 = new Chart(chart_2).Line(chart_2_data,chart_2_options);
}

});