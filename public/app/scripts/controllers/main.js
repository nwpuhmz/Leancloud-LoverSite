'use strict';

/**
 * @ngdoc function
 * @name angularEshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularEshopApp
 */
angular.module('angularEshopApp')
  .controller('MainCtrl', function ($scope,$document) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.noTransition = false;
    $scope.active = 0;
    $scope.slides = [{'id':0,'image':'http://weddingevent.ancorathemes.com/wp-content/uploads/2015/09/slide3.jpg','text':"hello"}
    ,
      {'id':1,'image':'http://weddingevent.ancorathemes.com/wp-content/uploads/2015/09/slider2.jpg','text':"hello"}];
    var currIndex = 0;

    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 1000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }

    $scope.galleries = [
      {
      'title':'Wedding Articles on Pinterest',
      'time':'June 5, 2015',
       'imgUrl':'images/portfolio/1.jpg'
      },
      {
        'title':'Our Wedding Planner',
        'time':'June 5, 2015',
        'imgUrl':'images/portfolio/2.jpg'
      },
      {
        'title':'It\'s Your Personal Choice',
        'time':'June 5, 2015',
        'imgUrl':'images/portfolio/3.jpg'
      },
      {
        'title':'Wedding Articles on Pinterest',
        'time':'June 5, 2015',
        'imgUrl':'images/portfolio/4.jpg'
      },
      {
        'title':'Our Wedding Planner',
        'time':'June 5, 2015',
        'imgUrl':'images/portfolio/5.jpg'
      },
      {
        'title':'It\'s Your Personal Choice',
        'time':'June 5, 2015',
        'imgUrl':'images/portfolio/6.jpg'
      }
    ];
  });
