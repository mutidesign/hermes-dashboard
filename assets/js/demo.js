type = ['', 'info', 'success', 'warning', 'danger'];

var seq = 0,
    delays = 80,
    durations = 500;

$().ready(function() {

    $pageheader = $('.page-header');
    $pageheader_img_container = $pageheader.find('.page-header-background');

    $('.fixed-plugin a').click(function(event) {
        // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else if (window.event) {
                window.event.cancelBubble = true;
            }
        }
    });

    $('.fixed-plugin .badge').click(function() {

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var new_color = $(this).data('color');

        $pageheader.attr('data-color', new_color);

    });

    $('.fixed-plugin .img-holder').click(function() {

        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');


        var new_image = $(this).find("img").attr('src');

        $pageheader_img_container.fadeOut('fast', function() {
            $pageheader_img_container.css('background-image', 'url("' + new_image + '")');
            $pageheader_img_container.fadeIn('fast');
        });

    });

    $('.switch input').change(function() {
        $input = $(this);

        if ($input.is(':checked')) {
            $pageheader_img_container.fadeIn('fast');
            $pageheader.attr('data-image', '#')
            background_image = true;
        } else {
            $pageheader.removeAttr('data-image');
            $pageheader_img_container.fadeOut('fast');
            background_image = false;
        }
    });

    $('#twitter').sharrre({
        share: {
            twitter: true
        },
        enableHover: false,
        enableTracking: false,
        buttons: {
            twitter: {}
        },
        click: function(api, options) {
            api.simulateClick();
            api.openPopup('twitter');
        },
        template: '<i class="fa fa-twitter"></i>',
        url: 'https://mutidesign.github.io/hermes-dashboard/examples/dashboard.html'
    });

    $('#facebook').sharrre({
        share: {
            facebook: true
        },
        buttons: {
            facebook: {}
        },

        enableHover: false,
        enableTracking: false,
        click: function(api, options) {
            api.simulateClick();
            api.openPopup('facebook');
        },
        template: '<i class="fa fa-facebook-square"></i>',
        url: 'https://mutidesign.github.io/hermes-dashboard/examples/dashboard.html'
    });


});

demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initChartist: function() {

        var data_year = {
            labels: ['JAN.', 'FEB.', 'MAR.', 'APR.', 'MAY.', 'JUN.', 'JUL.', 'AUG.', 'SEP.', 'OCT.', 'NOV.', 'DEC.'],
            series: [
                [0, 180, 80, 320, 220, 420, 190, 570, 440, 370, 420, 260]
            ]
        };
        var options = {
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 100
            }),
            showArea: false,
            showPoint: true,
            showLine: true,
            height: '200px',
            axisX: {
                showGrid: false
            }
        };

        var chart_year = new Chartist.Line('#chartPreferences1', data_year, options);
        hd.chartistPointWithMargin(chart_year);
        hd.startAnimationForLineChart(chart_year);



        var data_month = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
            series: [
                [12, 16, 21, 3, 12, 0, 22, 10, 6, 18, 9, 13, 36, 4, 12, 17, 19, 10, 10, 1, 8, 12, 2, 22, 50, 42, 2, 18, 10, 5]
            ]
        };


        var chart_month = new Chartist.Line('#chartPreferences2', data_month, options);

        hd.startAnimationForLineChart(chart_month);
        hd.chartistPointWithMargin(chart_month);

        var data_day = {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            series: [
                [12, 3, 22, 16, 17, 2, 4]
            ]
        };

        var chart_day = new Chartist.Line('#chartPreferences3', data_day, options);
        hd.startAnimationForLineChart(chart_day);
        hd.chartistPointWithMargin(chart_day);

        var data_charges = {
            series: [
                [7, 9, 7.3, 7.7, 8.6, 10, 9.1, 8.9, 9, 8.6, 7.3, 7.8, 8.2]
            ]
        };
        var options2 = {
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 100
            }),
            showArea: false,
            showPoint: true,
            low: 6,
            high: 11,
            showLine: true,
            height: '150px',
            axisX: {
                showGrid: false
            }
        };


        var chart_charges = new Chartist.Line('#chartCharges', data_charges, options2);
        hd.chartistPointWithMargin(chart_charges);

        var data_customers = {
            series: [
                [8.9, 9.5, 10, 9.2, 8.9, 9, 8.7, 7.2, 8.8, 9.8, 8.9, 10]
            ]
        };

        var chart_customers = new Chartist.Line('#chartCustomers', data_customers, options2);
        hd.chartistPointWithMargin(chart_customers);

    },

    presentationChartist: function() {

        var data_presentation = {
            series: [
                [2, 5, 4.5, 6, 5, 7, 6, 7, 5.5, 6, 5, 4, 2]
            ]
        };

        var options_presentation = {
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            low: 0,
            showArea: true,
            showPoint: true,
            showLine: true,
            height: "400px",
            width: "120%",
            axisX: {
                showGrid: false
            },
            axisY: {
                showGrid: false
            }
        };

        var chart_presentation = new Chartist.Line('#chartPresentation', data_presentation, options_presentation);
        hd.startAnimationForLineChart(chart_presentation);
        hd.chartistPointWithMargin(chart_presentation);

    },

    initGoogleMaps: function() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function(from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "nc-icon nc-bell-55",
            message: "Welcome to <b>Hermes Dashboard</b> - a beautiful freebie for every web developer."

        }, {
            type: type[color],
            timer: 400,
            placement: {
                from: from,
                align: align
            }
        });
    }


}