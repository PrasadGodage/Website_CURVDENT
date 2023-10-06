//[Dashboard Javascript]

//Project:	SoftMaterial admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)

$(function () {

  'use strict';

	
	
  //sparkline
		
		
		$("#baralc").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'bar',
			height: '80',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#FF9149',
		});
	
		
		$("#linearea").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100%',
			height: '80',
			lineColor: '#28D094',
			fillColor: '#28D094',
			lineWidth: 2,
		});
	
		$("#linechart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100%',
			height: '80',
			lineColor: '#28D094',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#28D094',
			maxSpotColor: '#28D094',
		});
	
	    $("#linechart2").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100',
			height: '38',
			lineColor: '#1E9FF2',
			fillColor: '#ffffff',
			lineWidth: 2,
			minSpotColor: '#1E9FF2',
			maxSpotColor: '#1E9FF2',
		});
	
  //leads-source
	
	var donut = new Morris.Donut({
      element: 'leads-source',
      resize: true,
      colors: ["#9C27B0", "#FF9149", "#E91E63"],
      data: [
        {label: "Tredshow", value: 150},
        {label: "Ads", value: 80},
        {label: "Web", value: 110}
      ],
      hideHover: 'auto'
    });

  // Top Products sales
 	var area = new Morris.Area({
        element: 'revenue-chart',
        data: [{
            period: '2012',
            iMac: 0,
            iPhone: 0,
            
        }, {
            period: '2013',
            iMac: 130,
            iPhone: 100,
            
        }, {
            period: '2014',
            iMac: 30,
            iPhone: 60,
            
        }, {
            period: '2015',
            iMac: 30,
            iPhone: 200,
            
        }, {
            period: '2016',
            iMac: 200,
            iPhone: 150,
            
        }, {
            period: '2017',
            iMac: 105,
            iPhone: 90,
            
        },
         {
            period: '2018',
            iMac: 250,
            iPhone: 150,
           
        }],
        xkey: 'period',
        ykeys: ['iMac', 'iPhone'],
        labels: ['iMac', 'iPhone'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors:['#9C27B0', '#E91E63'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: true,
        hideHover: 'auto',
        lineColors: ['#9C27B0', '#E91E63'],
        resize: true        
    });
	
	
}); // End of use strict

// Function to show the success message
function showSuccessMessage(message) {
    const successMessage = $("#successMessage");
    successMessage.text(message);
    successMessage.show();

    // Set a timeout to hide the message after a few seconds (optional)
    setTimeout(function () {
        successMessage.hide();
    }, 5000); // Message will hide after 5 seconds (5000 milliseconds)
}

// Trigger the success message when the page loads
$(document).ready(function () {
    // You can call showSuccessMessage with your success message here
    showSuccessMessage("Login successful! Welcome to the dashboard.");
});