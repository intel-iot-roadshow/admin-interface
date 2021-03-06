'use strict';
/**
* @ngdoc function
* @name sbAdminApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the sbAdminApp
*/
//var config = require('./config.json');
angular.module('sbAdminApp')

.controller('MainCtrl',['$scope','$location','$http', '$window','$interval',function($scope,$location,$http,$window,$interval) {

  // To get Number of Sensors for Main Page
  $http.get('/noOfSensor').success(function(data,satus) {
    $scope.noOfSensor = data;
  });
  // To get number of actuators for main page
  $http.get('/noOfActuator').success(function(data,satus) {
    $scope.noOfActuator = data;
  });
  // To get number of triggers for main page
  $http.get('/noOfTrigger').success(function(data,satus) {
    $scope.noOfTrigger = data;
  });

  $http.get('/noOfError').success(function(data,satus) {
    $scope.noOfError = data;
  });

  // To get Sensor details for particular sensor Id
  $scope.getSensorData = function(actuatorId){
    var data = "{\"sensorId\":\"1\"}";
    $http.post( '/getSensorData',data).success(function (data, status, headers, config) {
      $scope.sensorData = data;
    });
  };

  // To get data for customization of cloud
  //$http.get('/getCustomizeCloud').success(function(data,status) {
   // $scope.customizeCloud = data;
  //});


  // To get data from actuator table
  $http.get('/listerror').success(function(data,status) {
    $scope.errors = data;
  });


  // To get data from actuator table
  $http.get('/listActuator').success(function(data,status) {
    $scope.actuators = data;
  });

  // To get data from Sensor table
  $http.get('/listSensor').success(function(data,status) {
    $scope.sensors = data;
  });

  // To get data from Trigger table
  $http.get('/listTrigger').success(function(data,status) {
    $scope.triggers = data;
  });

  // To get data for graph display
 // $http.get('http://localhost:4000/api/v0001/azure/historic/data?id=temperature').success(function(data,status) {
    //  alert(angular.toJson(data));
    // $scope.temperature = angular.toJson(data);
  //});

  //$http.get('http://localhost:4000/api/v0001/bluemix/historic/data?id=light').success(function(data,status) {
    //  alert(angular.toJson(data));
    // $scope.light = angular.toJson(data);
  //});

  //$scope.url = $scope.swaggerUrl = 'http://10.246.15.211:10010';

  $scope.removeRow = function(triggerId){
    var data = "{\"id\":\""+triggerId+ "\"}";
    $http.post( '/removeTrigger',data).success(function (data, status, headers, config) {
      $window.location.reload();
    });
  };

  // To get Api from particular actuator
  $scope.getApi = function(actuatorId){
    var data = "{\"id\":\""+actuatorId+ "\"}";
    $http.post( '/getApi',data).success(function (data, status, headers, config) {
      $scope.api = data;
    });
  };

  // To Save data for trigger
  $scope.saveData = function(data){
    $http.post( '/addTrigger',data).success(function (data, status, headers, config) {
      $window.location.reload();
    });
  };
  
   $scope.editData = function(data){
	console.log(data);
    $http.post( '/editTrigger',data).success(function (data, status, headers, config) {
		$window.location.reload();
    });
  };

  $scope.tempOptions = {
    renderer: 'bar'
  };

  $scope.soundOptions = {
    renderer: 'line'
  };

  $scope.lightOptions = {
    renderer: 'area'
  };

  $scope.features = {
    hover: {
      xFormatter: function(x) {
        return 't=' + x;
      },
      yFormatter: function(y) {
        return y;
      }
    }
  };

// Test data for graphs

  $scope.light = [{
    "name":"light",
    "color":"lightblue",
    "data":[{"x":0,"y":45.26353921741247},{"x":1,"y":59.71278879325837},{"x":2,"y":47.031927411444485},{"x":3,"y":57.286414820700884},{"x":4,"y":54.53259363770485},{"x":5,"y":55.26286845561117},{"x":6,"y":59.00481782387942},
    {"x":7,"y":52.39327528979629},{"x":8,"y":64.63779101613909},{"x":9,"y":47.78317295946181},{"x":10,"y":62.36993719357997},{"x":11,"y":62.12025189306587},{"x":12,"y":64.62905635591596},{"x":13,"y":48.777220263145864},
    {"x":14,"y":50.529625727795064},{"x":15,"y":46.241132845170796},{"x":16,"y":60.49773044884205},{"x":17,"y":50.003558872267604},{"x":18,"y":55.662352945655584},{"x":19,"y":57.35044164117426},{"x":20,"y":62.422718782909214},
    {"x":21,"y":49.51824976596981},{"x":22,"y":49.60077864583582},{"x":23,"y":51.65152514819056},{"x":24,"y":45.600167880766094},{"x":25,"y":50.20843628793955},{"x":26,"y":58.901146980933845},{"x":27,"y":60.55821979418397},
    {"x":28,"y":63.25248484034091},{"x":29,"y":52.85373080521822},{"x":30,"y":60.726304478012025},{"x":31,"y":48.62868368625641},{"x":32,"y":53.697193074040115},{"x":33,"y":64.45472437888384},{"x":34,"y":62.26023300550878},
    {"x":35,"y":64.81348256580532},{"x":36,"y":57.008553319610655},{"x":37,"y":59.3198133027181},{"x":38,"y":53.380977073684335},{"x":39,"y":50.20560104865581},{"x":40,"y":45.305915800854564},{"x":41,"y":54.081540405750275},
    {"x":42,"y":49.88933039829135},{"x":43,"y":48.27104036230594},{"x":44,"y":55.04440172575414},{"x":45,"y":64.50110407546163},{"x":46,"y":50.260437675751746},{"x":47,"y":52.17229121364653}]
  },
  {
    "name":"light",
    "color":"steelblue",
    "data":[{"x":0,"y":65.60606995364651},{"x":1,"y":76.48741307202727},{"x":2,"y":73.52375820977613},{"x":3,"y":73.38926550233737},{"x":4,"y":73.3366736350581},{"x":5,"y":71.35695379693061},
    {"x":6,"y":73.94725311314687},{"x":7,"y":69.32066617067903},{"x":8,"y":67.8627244150266},{"x":9,"y":64.95372299104929},{"x":10,"y":66.7796544637531},{"x":11,"y":72.81902870396152},{"x":12,"y":76.87970178667456},
    {"x":13,"y":74.0060048410669},{"x":14,"y":61.54421741142869},{"x":15,"y":78.09093138668686},{"x":16,"y":63.99013148853555},{"x":17,"y":71.90516266738996},{"x":18,"y":72.27068892912939},{"x":19,"y":89.52031313208863},
    {"x":20,"y":87.19931886764243},{"x":21,"y":64.53642106382176},{"x":22,"y":63.55070904130116},{"x":23,"y":77.99888662761077},{"x":24,"y":63.241787978913635},{"x":25,"y":75.56980893015862},{"x":26,"y":71.61023299908265},
    {"x":27,"y":80.2574383537285},{"x":28,"y":86.99536429485306},{"x":29,"y":89.65485572582111},{"x":30,"y":60.53107614861801},{"x":31,"y":81.33891536621377},{"x":32,"y":71.36453253915533},{"x":33,"y":68.37874640710652},
    {"x":34,"y":72.55792180309072},{"x":35,"y":61.5787930903025},{"x":36,"y":75.0408753217198},{"x":37,"y":69.89960985956714},{"x":38,"y":89.5326870214194},{"x":39,"y":72.38565850770101},{"x":40,"y":63.97920084418729},
    {"x":41,"y":79.56143596675247},{"x":42,"y":82.13537037139758},{"x":43,"y":81.27588056959212},{"x":44,"y":63.057581114117056},{"x":45,"y":73.86767764342949},{"x":46,"y":81.54611592181027},{"x":47,"y":84.29940656293184}]
  }
  ];

  $scope.temperature = [{
    "name":"temperature",
    "color":"steelblue",
    "data":[{"x":0,"y":65.60606995364651},{"x":1,"y":76.48741307202727},{"x":2,"y":73.52375820977613},{"x":3,"y":73.38926550233737},{"x":4,"y":73.3366736350581},{"x":5,"y":71.35695379693061},{"x":6,"y":73.94725311314687},
    {"x":7,"y":69.32066617067903},{"x":8,"y":67.8627244150266},{"x":9,"y":64.95372299104929},{"x":10,"y":66.7796544637531},{"x":11,"y":72.81902870396152},{"x":12,"y":85.86864301236346},{"x":13,"y":74.84706577146426},
    {"x":14,"y":70.03292581764981},{"x":15,"y":63.61128306481987},{"x":16,"y":73.67417286615819},{"x":17,"y":83.42571099288762},{"x":18,"y":79.7671609162353},{"x":19,"y":71.67972742812708},{"x":20,"y":62.86496356828138},
    {"x":21,"y":89.64700524928048},{"x":22,"y":83.23826145613566},{"x":23,"y":74.6874109050259},{"x":24,"y":68.37850142503157},{"x":25,"y":73.48453153157607},{"x":26,"y":71.76276732701808},{"x":27,"y":83.49111506715417}]
  }];

  $scope.sound = [{
    "name":"sound",
    "color":"salmon",
    "data":[{"x":0,"y":65.60606995364651},{"x":1,"y":76.48741307202727},{"x":2,"y":73.52375820977613},{"x":3,"y":73.38926550233737},{"x":4,"y":73.3366736350581},{"x":5,"y":71.35695379693061},{"x":6,"y":73.94725311314687},
    {"x":7,"y":69.32066617067903},{"x":8,"y":67.8627244150266},{"x":9,"y":64.95372299104929},{"x":10,"y":66.7796544637531},{"x":11,"y":72.81902870396152},{"x":12,"y":85.86864301236346},{"x":13,"y":74.84706577146426},
    {"x":14,"y":70.03292581764981},{"x":15,"y":63.61128306481987},{"x":16,"y":73.67417286615819},{"x":17,"y":83.42571099288762},{"x":18,"y":79.7671609162353},{"x":19,"y":71.67972742812708},{"x":20,"y":62.86496356828138},
    {"x":21,"y":89.64700524928048},{"x":22,"y":83.23826145613566},{"x":23,"y":74.6874109050259},{"x":24,"y":68.37850142503157},{"x":25,"y":73.48453153157607},{"x":26,"y":71.76276732701808},{"x":27,"y":83.49111506715417},
    {"x":28,"y":75.38891527801752},{"x":29,"y":73.19361909292638},{"x":30,"y":63.758313262369484},{"x":31,"y":67.99378209980205},{"x":32,"y":85.71157425642014},{"x":33,"y":83.20836280938238},{"x":34,"y":69.8840327351354},
    {"x":35,"y":69.04516048030928},{"x":36,"y":71.17114167194813},{"x":37,"y":66.67633372591808},{"x":38,"y":74.12685002200305},{"x":39,"y":76.98439663974568},{"x":40,"y":61.61606614245102},{"x":41,"y":72.18196250265464},
    {"x":42,"y":83.89702200656757},{"x":43,"y":76.64366534678265},{"x":44,"y":80.99208964733407},{"x":45,"y":65.40297521045431},{"x":46,"y":86.22650440782309},{"x":47,"y":72.79093668563291},{"x":48,"y":64.19532870640978},
    {"x":49,"y":67.82004923326895}]},
    {"name":"sound",
    "color":"green",
    "data":[{"x":0,"y":57.866206634789705},{"x":1,"y":50.948012478183955},{"x":2,"y":57.15458594728261},{"x":3,"y":72.40397286601365},{"x":4,"y":57.90451363660395},{"x":5,"y":69.79077016701922},{"x":6,"y":63.95235760137439},
    {"x":7,"y":63.684302067849785},{"x":8,"y":50.33296756912023},{"x":9,"y":74.96396025875583},{"x":10,"y":61.49181341519579},{"x":11,"y":74.78050846373662},{"x":12,"y":70.35256771603599},{"x":13,"y":72.16388133820146},
    {"x":14,"y":50.10851627448574},{"x":15,"y":58.61746180104092},{"x":16,"y":75.80111143644899},{"x":17,"y":62.86679227370769},{"x":18,"y":54.25488513894379},{"x":19,"y":65.25443052640185},{"x":20,"y":58.60325543908402},
    {"x":21,"y":60.71800543228164},{"x":22,"y":55.4849046189338},{"x":23,"y":70.64592244569212},{"x":24,"y":58.56637042015791},{"x":25,"y":74.67903730459511},{"x":26,"y":50.934709971770644},{"x":27,"y":59.2657710891217},
    {"x":28,"y":70.4685683734715},{"x":29,"y":62.47545938240364},{"x":30,"y":79.3007939378731},{"x":31,"y":52.19291909830645},{"x":32,"y":75.15766833908856},{"x":33,"y":60.28520251624286},{"x":34,"y":75.4440127313137},
    {"x":35,"y":78.85333482408896},{"x":36,"y":73.48184902686626},{"x":37,"y":74.494942240417},{"x":38,"y":52.47758583165705},{"x":39,"y":56.67075551347807},{"x":40,"y":51.326536047272384},{"x":41,"y":74.44111596327275},
    {"x":42,"y":79.26369929453358},{"x":43,"y":67.9872951679863},{"x":44,"y":52.92845198651776},{"x":45,"y":74.1009792406112},{"x":46,"y":74.72662387648597},{"x":47,"y":55.19652734976262},{"x":48,"y":54.78104766923934},
    {"x":49,"y":52.538538542576134}]
    }
    ];

	$scope.codeMirrorOption = {
		lineNumbers: true,
		indentWithTabs: true,
		lineWrapping : true,
		mode: 'javascript'
		
    };
	
	$scope.TriggerForm = {
		conditions: "( function(sensor_value) { return this.temperature_greater_than_27_condition(sensor_value) } )",
		active: "true",
		triggerFunc:"( function() { this.temperature_too_hot(); })"
    };

//*****************************************************************************************************************


$scope.sensorOptions100 = {
            renderer: 'line'
        };
    $scope.sensorFeatures100 = {
            xAxis: {
            },
            yAxis: {
                tickFormat: 'formatKMBT'
            }
        };
        $scope.sensorSeries100 = [{
                name: 'Temperature',
                color: 'steelblue',
                data: []
            }, {
                name: 'Light',
                color: 'lightblue',
                data: []
            }];
			
		$scope.sensorx100 = 0;	
		
		$scope.SensorDataSeries = function(id) {
            $scope['sensorData'+ id] = !$scope['sensorData'+ id];
            if ($scope['sensorData'+ id]) {
                $scope['interval' + id] = $interval(function() {
                			var CurrentDate = new Date();
					$http.get('/latestValue?timestamp='+CurrentDate).success(function(data,satus) {
						var y = [];
						y[0] = data[0].value;
						y[1] = data[1].value;
						console.log(y);
						var x = $scope['sensorx' + id];
						var sensorSeries = $scope['sensorSeries' + id];
						for (var i = 0; i < sensorSeries.length; i++) {
							var name = sensorSeries[i].name;
							var color = sensorSeries[i].color;
							var data = sensorSeries[i].data;
							data.push({x: x, y: y[i]});
							sensorSeries[i] = {
								name: name,
								color: color,
								data: data
							};
                    }
                    x++;
                    $scope['sensorx' + id] = x;
						
					});
					
                }, 1000);
            }
            else {
                $interval.cancel($scope['interval' + id]);
            }
        };


//*****************************************************************************************************************	
	
	
	
}]);
