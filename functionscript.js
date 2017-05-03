var codeProvince = 100;
var imgStatusPaht = "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/images/status/";
var imgLanguagePaht = "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/images/language/";
var imgIconsPaht = "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/images/icons/";
var imgMakerIcon = "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/images/icons/maker.png";
///////////////////////Dashboard Table Val
var dashboard_no = '';
var dashboard_status = '';
var dashboard_vehicle_no = '';
var dashboard_type = '';
var dashboard_date = '';
var dashboard_time = '';
var dashboard_location = '';
var dashboard_speed = '';
var dashboard_map = '';
var dashboard_power = '';
var dashboard_idle = '';
var dashboard_driver = '';
///////////////////////Vehicle Table Val
var head_no = '';
var head_vehicle_no = '';
var head_vehicle_type = '';
var head_driver_name = '';
var head_active = '';
var head_action = '';
///////////////////////Vehicle Add Val
var head_add_vehicle = '';
var add_vehicle_no = '';
var add_vehicle_type = '';
var add_province = '';
var add_vehicle_register = '';
var add_unit_id = '';
var add_chassis_no = '';
var add_unit_sim_no = '';
var add_capacity = '';
var add_driver = '';
var add_card_reader_status = '';
var add_active_status = '';
///////////////////////Vehicle Info Val
var head_info_vehicle = '';
var info_vehicle_no = '';
var info_vehicle_type = '';
var info_province = '';
var info_vehicle_register = '';
var info_unit_id = '';
var info_chassis_no = '';
var info_unit_sim_no = '';
var info_capacity = '';
var info_driver = '';
var info_card_reader_status = '';
var info_active_status = '';
///////////////////////Vehicle Update Val
var head_update_vehicle = '';
var update_vehicle_no = '';
var update_vehicle_type = '';
var update_province = '';
var update_vehicle_register = '';
var update_unit_id = '';
var update_chassis_no = '';
var update_unit_sim_no = '';
var update_capacity = '';
var update_driver = '';
var update_card_reader_status = '';
var update_active_status = '';
///////////////////////Driver Table Val
var head_no = '';
var head_company_name = '';
var head_driver_name = '';
var head_licence_no = '';
var head_mobile_no = '';
var head_status = '';
var head_action = '';
///////////////////////Driver Add Val
var head_add_driver = '';
var add_driver_fullname = '';
var add_driver_name = '';
var add_driver_surname = '';
var add_licence_no = '';
var add_licence_expiry = '';
var add_driver_address = '';
var add_mobile_no = '';
var add_company_name = '';
var add_active_status = '';
///////////////////////Driver Info Val
var head_info_driver = '';
var info_driver_name = '';
var info_driver_surname = '';
var info_licence_no = '';
var info_licence_expiry = '';
var info_driver_address = '';
var info_mobile_no = '';
var info_company_name = '';
var info_active_status = '';
///////////////////////Driver Update Val
var head_update_driver = '';
var update_driver_fullname = '';
var update_driver_name = '';
var update_driver_surname = '';
var update_licence_no = '';
var update_licence_expiry = '';
var update_driver_address = '';
var update_mobile_no = '';
var update_company_name = '';
var update_active_status = '';

function showValue(newValue) {
    $('#range').empty().append('Speed x' + newValue);
}

function showtable() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    }
    var str = "test";
    xmlhttp.open("GET", "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getgpsdata.php?q=" + str, true);
    xmlhttp.send();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function () { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showVehicleTableHead() {
    var dataHandler = $("#load-head-here");
    dataHandler.empty();
    var newRow = $(
	'<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
    '<th style="width: 5%"> <div id="head_no" align="center">No.</div>' +
	'<div id="search_space1" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 23%"> <div id="head_vehicle_no" align="center">Vehicle No</div>' +
	'<div id="search_vehicle_id" align="center" style="display:block;"><input type="text" id="data_search_vehicle_id" size="6" maxlength="7"></div>' +
	'</th>' +
    '<th style="width: 24%"> <div id="head_vehicle_type" align="center">Vehicle Type</div>' +
	'<div id="search_vehicle_type" align="center" style="display:block;"><input type="text" id="data_search_vehicle_type" size="8" maxlength="20"></div>' +
	'</th>' +
    '<th style="width: 24%"> <div id="head_driver_name" align="center">Driver Name</div>' +
	'<div id="search_space2" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 10%"> <div id="head_active" align="center">Active</div>' +
	'<div id="search_space3" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 11%"> <div id="head_action" align="center">Action</div>' +
	'<div id="search_space4" style="display:block;"><br></div>' +
	'</th>' +
	'<th style="width: 4%;"><div align="center"><input type="image" onclick="searchFieldVehicle()" src="' + imgIconsPaht + 'search' + '.png' + '" width="20" height="20"></div>' +
    '<div id="search_space5" style="display:block;"><br></div>' +
    '</th>' +
	'</tr>'
	);
    dataHandler.append(newRow);
}

function showDriverTableHead() {
    var dataHandler = $("#load-head-here");
    dataHandler.empty();
    var newRow = $(
	'<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
    '<th style="width: 5%"><div id="head_no" align="center">No.</div>' +
	'<div id="search_space1" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 23%"> <div id="head_company_name" align="center">Company Name</div>' +
	'<div id="search_space2" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 20%"> <div id="head_driver_name" align="center">Driver Name</div>' +
	'<div id="search_driver_name" align="center" style="display:block;">' +
	'<input type="text" id="data_search_driver_name" size="10" maxlength="50"></div>' +
	'</th>' +
    '<th style="width: 20%"> <div id="head_licence_no" align="center">Licence No</div><div id="search_driver_id" align="center" style="display:block;">' +
	'<input type="text" id="data_search_driver_id" size="10" maxlength="10"></div>' +
	'</th>' +
    '<th style="width: 15%"> <div id="head_mobile_no" align="center">Mobile No</div>' +
	'<div id="search_space3" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 7%"> <div id="head_status" align="center">Status</div>' +
	'<div id="search_space4" style="display:block;"><br></div>' +
	'</th>' +
    '<th style="width: 10%"> <div id="head_action" align="center">Action</div>' +
	'<div id="search_space5" style="display:block;"><br></div>' +
	'</th>' +
	'<th style="width: 4%;"><input type="image" onclick="searchFieldDriver()" src="' + imgIconsPaht + 'search' + '.png' + '" width="20" height="20"></div>' +
    '<div id="search_space6" style="display:block;"><br></div>' +
    '</th>' +
    '</tr>'
	);
    dataHandler.append(newRow);
}

function showFirstTable() {
    var num = 0;
    var Numcar = 0;
    var Allca = 0;
    var driver_id = [];
    var unit_id = [];
    unit_id_marker = [];
    vehicle_id_marker = [];
    driver_fullname_marker = [];
    var display_page = $('#display_page option:selected').val();
    var strVehicleNoFirst = '';
    var strVehicleNoSecound = '';
    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getgpsdata.php",
        success: function (result) {

            var dataHandler = $("#load-head-here");
            dataHandler.empty();
            var newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<th style="width: 5%;">' +
                '<div align="center" id="dashboard_no" >No</div>' +
                '<div id="search_space1" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 6%;">' +
                '<div align="center" id="dashboard_status">Status</div>' +
                '<div id="search_space2" style="display:block;"><br></div>' +
                '</th>' +
                '<th align="center" style="width: 9%;">' +
                '<div align="center" id="dashboard_vehicle_no">Vehicle No</div>' +
                '<div id="search_vehicle_id" align="center" style="display:block;"><input type="text" id="data_search_vehicle_id" size="6" maxlength="7"></div>' +
                '</th>' +
                '<th align="center" style="width: 9%;">' +
                '<div align="center" id="dashboard_type">Type</div>' +
                '<div id="search_vehicle_type" align="center" style="display:block;"><input type="text" id="data_search_vehicle_type" size="7" maxlength="20"></div>' +
                '</th>' +
                '<th style="width: 10%;">' +
                '<div align="center" id="dashboard_date">Date</div>' +
                '<div id="search_space3" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 8%;">' +
                '<div align="center" id="dashboard_time">Time</div>' +
                '<div id="search_space4" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 22%;">' +
                '<div align="center" id="dashboard_location">Location</div>' +
                '<div id="search_space5" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 7%;">' +
                '<div align="center" id="dashboard_speed">Speed</div>' +
                '<div id="search_space6" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 5%;">' +
                '<div align="center" id="dashboard_map">Map</div>' +
                '<div id="search_space7" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 6%;">' +
                '<div align="center" id="dashboard_power">Power</div>' +
                '<div id="search_space8" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 5%;">' +
                '<div align="center" id="dashboard_idle">Idle</div>' +
                '<div id="search_space9" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 7%;">' +
                '<div align="center" id="dashboard_driver">Driver</div>' +
                '<div id="search_space10" style="display:block;"><br></div>' +
                '</th>' +
                '<th style="width: 3%;">' +
                '<div id="dashboard_search" align="center"><input type="image" onclick="searchFieldDashboard()" src="' + imgIconsPaht + 'search' + '.png' + '" width="20" height="20"></div>' +
                '<div id="search_space11" style="display:block;"><br></div>' +
                '</th>' +
                '</tr>'
            );
            dataHandler.append(newRow);

            var resultObj = JSON.parse(result);
            dataHandler = $("#load-data-here");
            dataHandler.empty();

            count = Object.keys(resultObj).length;

            for (var i = 0 ; i < count ; i++) Location.push("Please Waiting...");

            $.each(resultObj, function (key, val) {

                if (num < display_page && val.vehicle_active == '1') {
                    console.log(val);

                    if (val.engine_status == 1)
                        Numcar++;

                    num++;

                    var strdatetime = val.utc_ts;
                    var date_time = strdatetime.split(" ");
                    //alert("in if");

                    lat.push(eval(JSON.stringify(val.lat)));
                    lng.push(eval(JSON.stringify(val.lon)));
                    speed.push(eval(JSON.stringify(val.speed)));

                    //alert("lat.length = " + lat.length + "lng.length = " + lng.length);

                    driver_id.push(val.driver_id);
                    unit_id.push(val.unit_id);
                    unit_id_marker.push(val.unit_id);

                    if (val.vehicle_id.length == 6) {
                        strVehicleNoFirst = val.vehicle_id.substring(0, 2);
                        strVehicleNoSecound = val.vehicle_id.substring(2, 7);
                    }
                    else if (val.vehicle_id.length == 7) {
                        strVehicleNoFirst = val.vehicle_id.substring(0, 3)
                        strVehicleNoSecound = val.vehicle_id.substring(3, 7) //returns "ce"
                    }

                    vehicle_id_marker.push(strVehicleNoFirst + '-' + strVehicleNoSecound);
                    driver_fullname_marker.push(val.driver_name + ' ' + val.driver_surname);

                    if (num % 2 == 0) {
                        newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    else {
                        newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    //console.log(local);
                    newRow.html(
                    '<td><div id="count' + num + '" align="center">' + num + '</div></td>' +
                    '<td><div id="engine_status' + num + '" align="center">' + val.engine_status + '</div></td>' +
                    '<td><div id="vehicle_no' + num + '" align="center">' + strVehicleNoFirst + '-' + strVehicleNoSecound + '</div></td>' +
                    '<td><div id="vehicle_type' + num + '" align="center">' + val.vehicle_type + '</div></td>' +
                    '<td><div id="date' + num + '" align="center">' + date_time[0] + '</div></td>' +
                    '<td><div id="time' + num + '" align="center">' + date_time[1] + '</div></td>' +
                    '<td><div id="local' + num + '" align="center">' + 'Please waiting' + '</div></td>' +
                    '<td><div id="speed' + num + '" align="center">' + val.speed + '</div></td>' +
                    '<td><div id="view' + num + '" align="center"><a href="javascript:test(\'' + val.unit_id + '\');">view</a></div></td>' +

                    '<td><div id="ext_power_status' + num + '" align="center">' + val.ext_power_status + '</div></td>' +
                    '<td><div id="idle' + num + '" align="center">' + '00:00' + '</div></td>' +
                    '<td><div id="driver_name' + num + '" align="center">' + val.driver_name + ' ' + val.driver_surname + '</div></td>' +
                    '<td></td>' +
                    "</tr>"
                    );
                    dataHandler.append(newRow);
                    statusStatusDashboard(num, val.engine_status);
                    powerStatusDashboard(num, val.ext_power_status);
                }//if
            });//each

            dataHandler = $("#load-foot-here");
            dataHandler.empty();

            var pluspage = count % display_page;
            if (pluspage > 0) { pluspage = 1; }
            else { pluspage = 0; }
            var allpage = Math.floor(count / display_page) + pluspage;

            var strfoot = ' ';

            for (var i = 1 ; i < allpage ; i++) {
                strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showRestoreTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
            }
            if (count > display_page) {
                strfoot += '<li><button class="button" id="next" onclick="showRestoreTable(' + (2) + ')">Next</button></li>';
            }
            var newRow = $(
            '<tr><td colspan="13"><div id="paging"><ul>' +
            strfoot +
            '</ul></div></tr>'
            );

            dataHandler.append(newRow);

            Allcar = num;

            var percent = Math.round((Numcar / Allcar) * 100);

            availableNum = Numcar;
            AllcarsNum = Allcar;

            $('#Allcars').empty().append(AllcarsNum);
            $('#Runningcars').empty().append(availableNum);

            drawGauge(percent);

            createPoint(num, 2);
            for (var i = 0, l = point.length; i < l; i++) {
                //alert("point[i][0] = " + point[i][0] + ", point[i][1] = " + point[i][1]);
                console.log("point[i][0] = " + point[i][0] + ", point[i][1] = " + point[i][1]);
            }

            $("#data_search_vehicle_id").on("input", function (e) {
                //alert($(this).val());
                //alert($('#data_search_vehicle_id').val());
                //alert($('#data_search_vehicle_type').val());
                if ($('#data_search_vehicle_id').val() == '' && $('#data_search_vehicle_type').val() == '') {
                    showRestoreTable();
                }
                else {
                    updateSearchTable($('#data_search_vehicle_id').val(), $('#data_search_vehicle_type').val());
                }
            });
            $("#data_search_vehicle_type").on("input", function (e) {
                //alert($(this).val());
                //alert($('#data_search_vehicle_id').val());
                //alert($('#data_search_vehicle_type').val());
                if ($('#data_search_vehicle_id').val() == '' && $('#data_search_vehicle_type').val() == '') {
                    showRestoreTable();
                }
                else {
                    //clearGlobalValue();
                    updateSearchTable($('#data_search_vehicle_id').val(), $('#data_search_vehicle_type').val());
                }
            });
        },
        complete: function () {
            flagfinish = true;
            // do the job here
            //alert("complete ajax");
            console.log("complete ajax");
            //alert("lat.length = " + lat.length + " lng.length = " + lng.length);
            console.log("lat.length = " + lat.length + " lng.length = " + lng.length);
            console.log("flagfinish = " + flagfinish);
            console.log("flagFirstTime = " + flagFirstTime);
            if (flagFirstTime) {
                console.log("in if(flagfinish)");
                updateLocal(num, lat, lng);
                clearLocalValue();
                flagFirstTime = false;
            }
        }
    });
}

function showRestoreTable(page_no) {
    var driver_id = [];
    var unit_id = [];
    var display_page = $('#display_page option:selected').val();
    //alert("showtable()");
    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getgpsdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);
            dataHandler = $("#load-data-here");
            dataHandler.empty();

            count = Object.keys(resultObj).length;

            var num = 0;
            $.each(resultObj, function (key, val) {
                driver_id.push(val.driver_id);
                unit_id.push(val.unit_id);

                if (((val.count > ((page_no - 1) * display_page)) || (page_no == null)) && num < display_page && val.vehicle_active == '1') {
                    num++;

                    var strdatetime = val.utc_ts;
                    var date_time = strdatetime.split(" ");

                    if (val.vehicle_id.length == 6) {
                        strVehicleNoFirst = val.vehicle_id.substring(0, 2);
                        strVehicleNoSecound = val.vehicle_id.substring(2, 7);
                    }
                    else if (val.vehicle_id.length == 7) {
                        strVehicleNoFirst = val.vehicle_id.substring(0, 3)
                        strVehicleNoSecound = val.vehicle_id.substring(3, 7) //returns "ce"
                    }

                    if (num % 2 == 0) {
                        newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    else {
                        newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    //console.log(local);
                    newRow.html(
                        '<td><div id="count' + num + '" align="center">' + num + '</div></td>' +
                        '<td><div id="engine_status' + num + '" align="center">' + val.engine_status + '</div></td>' +
                        '<td><div id="vehicle_no' + num + '" align="center">' + strVehicleNoFirst + '-' + strVehicleNoSecound + '</div></td>' +
                        '<td><div id="vehicle_type' + num + '" align="center">' + val.vehicle_type + '</div></td>' +
                        '<td><div id="date' + num + '" align="center">' + date_time[0] + '</div></td>' +
                        '<td><div id="time' + num + '" align="center">' + date_time[1] + '</div></td>' +
                        '<td><div id="local' + num + '" align="center">' + Location[num - 1] + '</div></td>' +
                        '<td><div id="speed' + num + '" align="center">' + val.speed + '</div></td>' +
                        '<td><div id="view' + num + '" align="center"><a href="javascript:test(\'' + val.unit_id + '\');">view</a></div></td>' +
                        '<td><div id="ext_power_status' + num + '" align="center">' + val.ext_power_status + '</div></td>' +
                        '<td><div id="idle' + num + '" align="center">' + '00:00' + '</div></td>' +
                        '<td><div id="driver_name' + num + '" align="center">' + val.driver_name + ' ' + val.driver_surname + '</div></td>' +
                        '<td></td>' +
                        "</tr>"
                    );
                    dataHandler.append(newRow);
                    statusStatusDashboard(num, val.engine_status);
                    powerStatusDashboard(num, val.ext_power_status);
                }
            });//each

            dataHandler = $("#load-foot-here");
            dataHandler.empty();

            var pluspage = count % display_page;
            if (pluspage > 0) { pluspage = 1; }
            else { pluspage = 0; }
            var allpage = Math.floor(count / display_page) + pluspage;
            //alert("display_page = " + display_page + " allpage = " + allpage);
            var strfoot = '';
            if (page_no > 1) {
                strfoot += '<li><button class="button" id="previous" onclick="showRestoreTable(' + (page_no - 1) + ')">Previous</button></li>';
            }
            for (var i = 0 ; i < allpage ; i++) {
                if ((page_no == null) && (i > 0) && ((i + 1) != page_no)) {
                    strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showRestoreTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
                }
                else if ((page_no != null) && ((i + 1) != page_no)) {
                    strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showRestoreTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
                }
            }
            if (page_no == null && count > display_page) {
                strfoot += '<li><button class="button" id="next" onclick="showRestoreTable(' + (2) + ')">Next</button></li>';
            }
            else if (page_no < allpage) { strfoot += '<li><button class="button" id="next" onclick="showRestoreTable(' + (page_no + 1) + ')">Next</button></li>'; }
            //alert(strfoot);
            var newRow = $(
            '<tr><td colspan="13"><div id="paging"><ul>' +
            strfoot +
            '</ul></div></tr>'
            );

            if (strfoot != '')
                dataHandler.append(newRow);
        }//success
    });//ajax
}

function updateTable() {
    var num = 0;
    var Numcar = 0;
    var Allcar;
    var driver_id = [];
    var unit_id = [];
    unit_id_marker = [];
    driver_id_marker = [];
    vehicle_id_marker = [];
    driver_fullname_marker = [];
    //alert("vehicle_id = " + vehicle_id +" vehicle_type = " + vehicle_type);
    console.log("updateTable()");
    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getgpsdata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);
            var dataHandler = $("#load-data-here");

            count = Object.keys(resultObj).length;

            Allcar = count;
            $.each(resultObj, function (key, val) {
                if (val.vehicle_active == '1') {
                    num++;

                    var strdatetime = val.utc_ts;
                    var date_time = strdatetime.split(" ");

                    if (val.engine_status == 1)
                        Numcar++;

                    if (val.vehicle_id.length == 6) {
                        strVehicleNoFirst = val.vehicle_id.substring(0, 2);
                        strVehicleNoSecound = val.vehicle_id.substring(2, 7);
                    }
                    else if (val.vehicle_id.length == 7) {
                        strVehicleNoFirst = val.vehicle_id.substring(0, 3)
                        strVehicleNoSecound = val.vehicle_id.substring(3, 7) //returns "ce"
                    }

                    vehicle_id_marker.push(strVehicleNoFirst + '-' + strVehicleNoSecound);
                    driver_fullname_marker.push(val.driver_name + ' ' + val.driver_surname);

                    $('#count' + num + '').empty().append(num);
                    statusStatusDashboard(num, val.engine_status);
                    $('#vehicle' + num + '').empty().append(strVehicleNoFirst + '-' + strVehicleNoSecound);
                    $('#type' + num + '').empty().append(val.vehicle_type);
                    $('#date' + num + '').empty().append(date_time[0]);
                    $('#time' + num + '').empty().append(date_time[1]);
                    $('#local' + num + '').empty().append(Location[num - 1]);
                    $('#speed' + num + '').empty().append(val.speed);
                    $('#view' + num + '').empty().append('<a href="javascript:test(\'' + val.unit_id + '\');">view</a>');

                    powerStatusDashboard(num, val.ext_power_status);
                    $('#driver' + num + '').empty().append(val.driver_name + ' ' + val.driver_surname);

                    console.log(val);

                    lat.push(eval(JSON.stringify(val.lat)));
                    lng.push(eval(JSON.stringify(val.lon)));
                    speed.push(eval(JSON.stringify(val.speed)));
                    driver_id.push(val.driver_id);
                    unit_id.push(val.unit_id);
                    unit_id_marker.push(val.unit_id);
                }
            });//each

            Allcar = num;

            var percent = Math.round((Numcar / Allcar) * 100);

            availableNum = Numcar;
            AllcarsNum = Allcar;

            $('#Allcars').empty().append(AllcarsNum);
            $('#Runningcars').empty().append(availableNum);
            //alert("AllcarsNum = " + AllcarsNum + " availableNum = " + availableNum + " percent = " + percent);

            drawGauge(percent);
            //alert("drawGauge()");

            createPoint(count, 2);
            for (var i = 0, l = point.length; i < l; i++) {
                //alert("point[i][0] = " + point[i][0] + ", point[i][1] = " + point[i][1]);
                console.log("point[i][0] = " + point[i][0] + ", point[i][1] = " + point[i][1]);
            }
            drop();
        },

    });
}

function updateSearchTable(vehicleID, vehicleType) {
    var vehicle_id = [];
    var vehicle_type = [];
    var unit_id = [];
    var driver_id = [];
    var unit_id_detail = [];
    //alert("vehicleID = " + vehicleID +" vehicleType = " + vehicleType);
    console.log("updateTable()");
    //alert("$.ajax1");
    $.ajax({
        type: "GET",
        data: {
            vehicleID: vehicleID,
            vehicleType: vehicleType,
            action: 'search'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {
            //alert("ajax()");

            var resultObj = JSON.parse(result);

            count = Object.keys(resultObj).length;

            $.each(resultObj, function (key, val) {

                console.log(val);
                vehicle_id.push(val.vehicle_id);
                vehicle_type.push(val.vehicle_type);
                unit_id.push(val.unit_id);
            });//each

            //alert("$.ajax2");
            $.ajax({
                type: "GET",
                data: "",
                url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getgpsdata.php",
                success: function (result) {
                    //alert("$.ajax2 success");
                    var resultObj = JSON.parse(result);
                    dataHandler = $("#load-data-here");
                    dataHandler.empty();

                    count = Object.keys(resultObj).length;
                    var num = 0;
                    $.each(resultObj, function (key, val) {
                        //alert("$.ajax2 each");
                        for (var i = 0 ; i < unit_id.length; i++) {
                            //alert("in for : i = " + i + " vehicle_id[i] = " + vehicle_id[i] + " vehicle_type[i] = " + vehicle_type[i] + " unit_id[i] = " + unit_id[i]);
                            if (val.unit_id == unit_id[i]) {
                                num++;

                                var strdatetime = val.utc_ts;
                                var date_time = strdatetime.split(" ");

                                driver_id.push(val.driver_id);
                                unit_id_detail.push(val.unit_id);

                                if (val.vehicle_id.length == 6) {
                                    strVehicleNoFirst = val.vehicle_id.substring(0, 2);
                                    strVehicleNoSecound = val.vehicle_id.substring(2, 7);
                                }
                                else if (val.vehicle_id.length == 7) {
                                    strVehicleNoFirst = val.vehicle_id.substring(0, 3)
                                    strVehicleNoSecound = val.vehicle_id.substring(3, 7) //returns "ce"
                                }

                                //console.log(local);
                                //alert("in if : i = " + i + " vehicle_id[i] = " + vehicle_id[i] + " vehicle_type[i] = " + vehicle_type[i] + " unit_id[i] = " + unit_id[i]);
                                if (num % 2 == 0) {
                                    newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                                }
                                else {
                                    newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                                }
                                newRow.html(
                                    '<td><div id="count' + num + '" align="center">' + num + '</div></td>' +
                                    '<td><div id="engine_status' + num + '" align="center">' + val.engine_status + '</div></td>' +
                                    '<td><div id="vehicle_no' + num + '" align="center">' + strVehicleNoFirst + '-' + strVehicleNoSecound + '</div></td>' +
                                    '<td><div id="vehicle_type' + num + '" align="center">' + val.vehicle_type + '</div></td>' +
                                    '<td><div id="date' + num + '" align="center">' + date_time[0] + '</div></td>' +
                                    '<td><div id="time' + num + '" align="center">' + date_time[1] + '</div></td>' +
                                    '<td><div id="local' + num + '" align="center">' + Location[num - 1] + '</div></td>' +
                                    '<td><div id="speed' + num + '" align="center">' + val.speed + '</div></td>' +
                                    '<td><div id="view' + num + '" align="center"><a href="javascript:test(\'' + num + '\');">view</a></div></td>' +
                                    '<td><div id="ext_power_status' + num + '" align="center">' + val.ext_power_status + '</div></td>' +
                                    '<td><div id="idle' + num + '" align="center">' + '00:00' + '</div></td>' +
                                    '<td><div id="driver_name' + num + '" align="center">' + val.driver_name + ' ' + val.driver_surname + '</div></td>' +
                                    '<td></td>' +
                                    "</tr>"
                                );
                                dataHandler.append(newRow);
                                statusStatusDashboard(num, val.engine_status);
                                powerStatusDashboard(num, val.ext_power_status);
                            }
                        }
                    });//each

                    dataHandler = $("#load-foot-here");
                    dataHandler.empty();
                }//success
            });//ajax

        }//success
    });//ajax
}

function showDriverName2Marker(driver_id) {
    var strDriverName = '';
    $.ajax({
        type: "GET",
        data: { driverID: driver_id, action: 'viewByDriverID' },//{name: 'Wayne', age: 27, country: 'Ireland'},test.php?name=Wayne&age=27&country=Ireland//"vehicle_id=''",//"userId=12345&userName=test",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            $.each(resultObj, function (key, val) {
                console.log(val);
                $('#driver_name' + index).empty().append(val.driver_name + ' ' + val.driver_surname);
                strDriverName = val.driver_name + ' ' + val.driver_surname;
                alert(strDriverName);
                driver_id_marker.push(strDriverName);
            });//each
        }
    });
}

function showVehicleDetail2Marker(unit_id) {
    var strVehicleNoFirst = '';
    var strVehicleNoSecound = '';
    $.ajax({
        type: "GET",
        data: { unitID: unit_id, action: 'view' },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);

            $.each(resultObj, function (key, val) {
                //console.log(val);			
                if (val.vehicle_id.length == 6) {
                    strVehicleNoFirst = val.vehicle_id.substring(0, 2);
                    strVehicleNoSecound = val.vehicle_id.substring(2, 7);
                }
                else if (val.vehicle_id.length == 7) {
                    strVehicleNoFirst = val.vehicle_id.substring(0, 3)
                    strVehicleNoSecound = val.vehicle_id.substring(3, 7)
                }

                alert(strVehicleNoFirst + '-' + strVehicleNoSecound);
                vehicle_no_marker.push(strVehicleNoFirst + '-' + strVehicleNoSecound);
            });//each
        }
    });
}

function setVehicleViewTable(unit_id) {
    //alert("in showVehicleInfoForm() id = " + vehicle_id);
    $.ajax({
        type: "GET",
        data: { unitID: unit_id, action: 'view' },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);

            $.each(resultObj, function (key, val) {
                console.log(val);
                updateSearchTable(val.vehicle_id, val.vehicle_type);
            });//each
        }
    });
}

function updateLocal(count, lat, lng) {
    //alert("updateLocal()");
    console.log("updateLocal()");
    local = new Array(count);
    //alert("count = " + count + "lat.length = " + lat.length + " local.length = " + local.length);
    console.log("count = " + count + "lat.length = " + lat.length + " local.length = " + local.length);
    for (var i = 0, l = count; i < l; i++) {
        //alert("i = " + i + " lat[i] = " + lat[i] + " lng[i] = " + lng[i]);
        console.log("i = " + i + " lat[i] = " + lat[i] + " lng[i] = " + lng[i]);
        geo(i, lat[i], lng[i]);
    }

    setLocal(count);
}

function geocodeLatLng(lat, lng) {
    //alert("geocodeLatLng lat = " + lat + ", lng = " + lng);
    latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
        if (status === 'OK') {
            //alert("status === OK");
            if (results[1]) {
                //alert("results[1] = " + results[1].formatted_address);
                console.log(results[1].formatted_address);
                return results[1].formatted_address;
            }
        }
        else {
            //alert("status === NO");
        }
        return "Unknow";
    });
}



function clearGlobalValue() {
    lat = [];
    lng = [];
    engine_status = [];
    ext_power_status = [];
    speed = [];
    unit_id_marker = [];
    driver_id_marker = [];
    vehicle_no_marker = [];
    countlocal = 0;
    index = -1;
    id = [];
    wait;
    count;
    point = [];
}

function clearLocalValue() {
    local = [];
    localcount = [];
    flagfinish = false;
}

function geo(index, lat, lng) {
    console.log("geo(index,lat,lng) index = " + index + " , lat = " + lat + " , lng = " + lng);
    //alert("geo(index,lat,lng) index = " + index +" , lat = " + lat + " , lng = " + lng);
    var id = setInterval(frame, (index + 1) + 200);
    var flagOK = false;
    function frame() {
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        console.log("frame index = " + index + " , id = " + id + " , lat = " + lat + " , lng = " + lng);
        //alert("frame index = " + index +" , id = " + id + " , lat = " + lat + " , lng = " + lng);
        if (flagOK) {
            console.log("index = " + index + " --> in if flagOK == true");
            //alert("index = " + index +" --> in if flagOK == true");
            clearInterval(id);
            console.log("clearInterval(id) id = " + id);
            //alert("clearInterval(id) id = " + id);
        } else {
            console.log("index = " + index + " --> in else geocoder.geocode()");
            //alert("index = " + index +" --> in else geocoder.geocode()");
            geocoder.geocode({ 'location': latlng }, function (results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        console.log("index = " + index + ", status === OK " + ", results[1].formatted_address = " + results[1].formatted_address);
                        //alert("index = " + index + ", status === OK " + ", results[1].formatted_address = " +results[1].formatted_address);
                        local[index] = results[1].formatted_address;
                        console.log("index = " + index + " local[index] = " + local[index]);
                        //alert("index = " + index + " local[index] = " +local[index]);
                        localcount.push(results[1].formatted_address);
                        console.log("localcount.length = " + localcount.length);
                        //alert("localcount.length = " + localcount.length);
                        flagOK = true;
                    }
                }
            });
        }
    }
}

function waitFunction() {
    alert("waitFunction()");
    wait = setTimeout(function () { waitFinish() }, 3000);
}

function waitFinish() {
    alert("waitFinish()");
    alert("clearTimeout(wait)");
    clearTimeout(wait);
}

function myStopFunction() {
    clearTimeout(wait);
}

function setLocal(count) {
    console.log("setLocal()");
    //alert("setLocal()");
    var flagOK = false;
    var id = setInterval(frame, 100);
    function frame() {
        if (flagOK) {
            //alert("createTable() --> in if flagOK == true");
            clearInterval(id);
            flagfinish = true;
            //alert("setLocal() clearInterval(id) id = " + id);
            console.log("setLocal() clearInterval(id) id = " + id);
        } else {
            //alert("setLocal() localcount.length = " + localcount.length + " count = " + count);
            console.log("setLocal() localcount.length = " + localcount.length + " count = " + count);
            if (localcount.length >= count) {
                //alert("in if localcount.length == count" + " ---> localcount.length = " + localcount.length + " count = " + count);
                console.log("in if localcount.length == count" + " ---> localcount.length = " + localcount.length + " count = " + count);
                for (var i = 0 ; i < count; i++) {
                    $('#local' + (i + 1) + '').empty().append(local[i]);
                    Location[i] = local[i];
                }
                //alert("flagOK = true");
                flagOK = true;
                drop();
            }
        }
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function removeFromItem(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}

function removeFromIndex(array, index) {
    array.splice(index - 1, index);
}

function documentReady() {

    var BGimgPaht = "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/images/counter/bg.png";

    loadfunction();

    $('<img src="' + BGimgPaht + '">').load(function () {
        $(this).width(30).height(30).appendTo('#BGimageT');
    });
    $('<img src="' + BGimgPaht + '">').load(function () {
        $(this).width(30).height(30).appendTo('#BGimageB');
    });

    // Change the selector if needed
    var $table = $('table.scroll'), $bodyCells = $table.find('tbody tr:first').children(), colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function () {
        // Get the tbody columns width array
        colWidth = $bodyCells.map(function () {
            return $(this).width();
        }).get();

        // Set the width of thead columns
        $table.find('thead tr').children().each(function (i, v) {
            $(v).width(colWidth[i]);
        });
    }).resize(); // Trigger resize handler

    var d = new Date(Date.now());
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    if (month < 10) { month = '0' + month }
    if (date < 10) { date = '0' + date }
    var now = year + '-' + month + '-' + date;
    var hours = d.getHours();
    var minutes = d.getMinutes();
    if (hours < 10) { hours = '0' + hours }
    if (minutes < 10) { minutes = '0' + minutes }

    var time = hours + ":" + minutes;// + ":" + d.getSeconds();
    console.log(now);
    console.log(time);

    $('#startdate').attr('value', now);
    $('#startdate').attr('max', now);
    $('#starttime').attr('value', '06:00');

    $('#enddate').attr('value', now);
    $('#enddate').attr('max', now);
    $('#endtime').val(time);

    $('#startdate').change(function () {
        console.log($('#startdate').val());
        flagFirstGetPath = true;
        stops();
    });
    $('#starttime').change(function () {
        console.log($('#starttime').val());
        flagFirstGetPath = true;
        stops();
    });
    $('#enddate').change(function () {
        console.log($('#enddate').val());
        flagFirstGetPath = true;
        stops();
    });
    $('#endtime').change(function () {
        console.log($('#endtime').val());
        flagFirstGetPath = true;
        stops();
    });

    google.maps.event.addDomListener(window, 'load', initialize);

    getWeatherDemo();
}

function counter() {
    var imgCounterPaht = "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/images/counter/";
    var i = 20;

    counterTimer = setInterval(function () {
        if (i == -1) i = 20;
        $("#imageT").empty();
        $('<img src="' + imgCounterPaht + i + '.png' + '">').load(function () {
            $(this).width(30).height(30).appendTo('#imageT');
        });
        $("#imageB").empty();
        $('<img src="' + imgCounterPaht + i + '.png' + '">').load(function () {
            $(this).width(30).height(30).appendTo('#imageB');
        });
        i--;
    }, 1000);
}

function initialize() {

    //alert("initialize()");

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });

    infowindowLine = new google.maps.InfoWindow();

    var mapOptions = {
        center: { lat: parseFloat(pathCoords[0].lat), lng: parseFloat(pathCoords[0].lng) },
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: true
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

}

function getVehiclePath() {
    if (flagFirstGetPath) {
        //alert($("#unitID").val());
        var unit_id = $("#unitID").val();
        console.log(unit_id);

        var start_date = $("#startdate").val();
        console.log(start_date);

        var start_time = $("#starttime").val();
        console.log(start_time);

        var end_date = $("#enddate").val();
        console.log(end_date);

        var end_time = $("#endtime").val();
        console.log(end_time);

        var start = start_date + ' ' + start_time + ':00';
        console.log(start);
        var end = end_date + ' ' + end_time + ':59';
        console.log(end);

        pathCoords = [];
        status_pathCoords = [];
        date_pathCoords = [];
        time_pathCoords = [];
        location_pathCoords = [];
        speed_pathCoords = [];
        power_pathCoords = [];
        idle_pathCoords = [];
        var datetime = [];
        var str_datetime;

        if (mark != null) {
            //alert("clear mark");
            mark.setMap(null);
        }

        $.ajax({
            type: "GET",
            data: { unitID: unit_id, action: 'path', Start: start, End: end },//
            url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getgpsdata.php",
            success: function (result) {
                var resultObj = JSON.parse(result);
                count = Object.keys(resultObj).length;
                if (count > 0) {
                    var dataHandler = $("#load-data-report-here");
                    dataHandler.empty();
                }
                var num = 0;
                $.each(resultObj, function (key, val) {
                    num++;
                    console.log(val);
                    pathCoords.push({ "lat": val.lat, "lng": val.lon });
                    status_pathCoords.push(val.engine_status);
                    str_datetime = val.utc_ts;
                    datetime = str_datetime.split(" ");
                    date_pathCoords.push(datetime[0]);
                    time_pathCoords.push(datetime[1]);
                    location_pathCoords.push("lat : " + val.lat + "<br> lng : " + val.lon);
                    speed_pathCoords.push(val.speed);
                    power_pathCoords.push(val.ext_power_status);
                    idle_pathCoords.push("00:" + val.speed);

                    if (num % 2 == 0) {
                        newRow = $('<tr id="report_row' + num + '" style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    else {
                        newRow = $('<tr id="report_row' + num + '"style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    //console.log(local);
                    newRow.html(
                    '<td style="width:12%"><div id="status' + num + '" align="center">' + val.engine_status + '</div></td>' +
                    '<td style="width:20%"><div id="datetime' + num + '" align="center">' + datetime[0] + '<br>' + datetime[1] + '</div></td>' +
                    '<td style="width:26%"><div id="location' + num + '" align="center">' + "lat : " + val.lat + "<br> lng : " + val.lon + '</div></td>' +
                    '<td style="width:12%"><div id="speeds' + num + '" align="center">' + val.speed + '</div></td>' +
                    '<td style="width:10%"><div id="power' + num + '" align="center">' + val.ext_power_status + '</div></td>' +
                    '<td style="width:10%"><div id="idles' + num + '" align="center">' + "00:" + val.speed + '</div></td>' +
                    '<td style="width:8%"><div id="view' + num + '" align="center"><a href="javascript:marking(\'' + num + '\');">view</a></div></td>' +
                    "</tr>"
                    );
                    dataHandler.append(newRow);
                    statusStatusReport(num, val.engine_status);
                    powerStatusReport(num, val.ext_power_status);
                });//each
                if (count > 0) {
                    var latlng = new google.maps.LatLng(pathCoords[0].lat, pathCoords[0].lng);
                    //alert("panTo lat = " + pathCoords[0].lat + " lng = " + pathCoords[0].lng);
                    initialize();
                    map.panTo(latlng);
                    autoRefresh(pathCoords);
                    flagFirstGetPath = false;
                }
                else {
                    alert("Have no data in date-time selected!");
                }
            }//success
        });//ajax
    }
    else {
        autoRefresh(pathCoords);
    }
}

function moveMarker(map, marker, latlng) {
    marker.setPosition(latlng);
    map.panTo(latlng);
}

function pauses() {
    pause = !pause;
    if (mark != null) {
        //alert("clear mark");
        mark.setMap(null);
    }
    //alert("play = " + play + " pause = " + pause + " stop = " + stop);
}

function stops() {
    if (mark != null) {
        //alert("clear mark");
        mark.setMap(null);
    }
    $("#report_row" + i).css('border', '0px solid #FF0000');
    i = 0;
    play = false;
    pause = true;
    clearInterval(timerID);
    timerID = null;
    //alert("i =" + i +" play = " + play + " pause = " + pause + " stop = " + stop + " timer = " + timer);
}

function autoRefresh(pathCoords) {
    //alert("top play = " + play + " pause = " + pause + " stop = " + stop);
    if (!play) {
        if (mark != null) {
            //alert("clear mark");
            mark.setMap(null);
        }
        var firstrowpos = $('#load-data-report-here tr:first').position();
        //alert(firstrowpos.top);
        $('#load-data-report-here').scrollTop(firstrowpos.top - 100);
        i = 0;
        timer = 600 - ($('#pathTime').val() * 100);
        //alert("top timer = " + timer);
        play = true;
        flagFirst = true;
        //alert("timer =" + timer);// + "timer*100 =" + timer*100);

        for (var j = 0; j < polyline.length; j++) {
            polyline[j].setMap(null); //or line[i].setVisible(false);
        }
        marker = new google.maps.Marker({ map: map, icon: "http://maps.google.com/mapfiles/ms/micons/blue.png" });
    }

    if (play) {
        if (pause) {
            if (mark != null) {
                //alert("clear mark");
                mark.setMap(null);
            }
            //alert(" before pause = " + pause);
            pause = false;
            //alert(" after pause = " + pause);
        }

        if (timerID == null) {
            timerID = setInterval(function () {
                //alert("i =" + i +" play = " + play + " pause = " + pause + " stop = " + stop);
                console.log("i =" + i + " play = " + play + " pause = " + pause + " stop = " + stop + " timer = " + timer);
                if (!pause && !stop) {
                    if (i < pathCoords.length) {

                        var latlng = new google.maps.LatLng(pathCoords[i].lat, pathCoords[i].lng);

                        if (!flagFirst) {

                            lineSymbol = {
                                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
                            };

                            elines[i] = new google.maps.Polyline({
                                path: [
                                        latlngPrevious,
                                        latlng
                                ],
                                icons: [{
                                    icon: lineSymbol,
                                    offset: '100%'
                                }],
                                geodesic: true,
                                strokeColor: colors[0],
                                strokeOpacity: 1.0,
                                strokeWeight: 3,
                                editable: false,
                                map: map,
                                myID: i
                            });

                            var rowpos = $("#report_row" + (i + 1)).position();
                            var height = $("#report_row" + (i + 1)).height();
                            rowpos.top = rowpos.top - (height * 2);
                            console.log(i + ':' + rowpos.top);
                            if (i >= 4)
                                $('#load-data-report-here').scrollTop((i - 3) * (height + 1));
                            $("#report_row" + (i)).css('border', '0px solid #FF0000');
                            $("#report_row" + (i + 1)).css('border', '3px solid #FF0000');
                            map.panTo(latlng);
                            elines[i].setMap(map);
                            polyline.push(elines[i]);
                            statusStatusDashboard(1, status_pathCoords[i]);
                            $('#date1').empty().append(date_pathCoords[i]);
                            $('#time1').empty().append(time_pathCoords[i]);
                            $('#local1').empty().append(location_pathCoords[i]);
                            $('#speed1').empty().append(speed_pathCoords[i]);
                            powerStatusDashboard(1, power_pathCoords[i]);
                            $('#idle1').empty().append(idle_pathCoords[i]);

                            latlngPrevious = latlng;
                            i++;
                        }
                        else {
                            latlngPrevious = latlng;
                            flagFirst = false;
                        }
                    }
                    else {
                        $("#report_row" + i).css('border', '0px solid #FF0000');
                        //alert("else before i = " + i);
                        i = 0;
                        //alert("else after i = " + i);
                        play = false;
                        pause = true;
                        clearInterval(timerID);
                        timerID = null;
                    }
                }
            }, timer);
        }
    }
}

function createPoint(rows, cols) {

    var arr = [];

    // Creates all lines:
    for (var i = 0; i < rows; i++) {

        // Creates an empty line
        arr.push([]);

        // Adds cols to the empty line:
        arr[i].push(new Array(cols));

        arr[i][0] = parseFloat(lat[i]);
        arr[i][1] = parseFloat(lng[i]);
    }

    point = arr;
}

function drop() {
    //window.alert('markers.length = ' + markers.length);
    if (markers.length > 0) {
        deleteListeners();
        deleteMarkers();
    }
    //window.alert('point.length = ' + point.length);
    setTimeout(function () {
        for (var i = 0; i < point.length; i++) {
            //alert("vehicle_no_marker[i] = " + vehicle_no_marker[i] + " driver_id_marker[i] = " + driver_id_marker[i]);
            addMarkerWithTimeout(i, i * 200, unit_id_marker[i], vehicle_id_marker[i], driver_fullname_marker[i], speed[i]);
        }
    }, 500);

}

function addMarkerWithTimeout(i, timeout, unit_id_marker, vehicle_id_marker, driver_fullname_marker, speed) {
    //window.alert('addMarkerWithTimeout()');
    window.setTimeout(function () {
        addMarker(map, infowindow, i, unit_id_marker, vehicle_id_marker, driver_fullname_marker, speed);
    }, timeout);
}

function addMarker(map, infowindow, i, unit_id_marker, vehicle_id_marker, driver_fullname_marker, speed) {
    var marker = new google.maps.Marker({
        title: vehicle_id_marker,//'Click to show details',
        position: { lat: point[i][0], lng: point[i][1] },
        //position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: imgMakerIcon
    });
    var mouseover = google.maps.event.addListener(marker, 'mouseover', function () {
        showInfoWindow(map, marker, i, vehicle_id_marker, driver_fullname_marker, speed);
    });

    var mouseout = google.maps.event.addListener(marker, 'mouseout', function () {
        infoWindow.close();
    });

    var click = google.maps.event.addListener(marker, 'click', function () {
        clickMarker(unit_id_marker);
    });

    listenerHandle.push(mouseover);
    listenerHandle.push(mouseout);
    listenerHandle.push(click);

    markers.push(marker);
}

function clickMarker(unit_id_marker) {
    //alert(unit_id_marker);
    test(unit_id_marker);
}

function showInfoWindow(map, marker, i, vehicle_id_marker, driver_fullname_marker, speed) {
    infoWindow.open(map, marker);
    buildIWContent(marker, i, vehicle_id_marker, driver_fullname_marker, speed);
}

function buildIWContent(marker, i, vehicle_id_marker, driver_fullname_marker, speed) {
    document.getElementById('iw-vehicle-no').textContent = vehicle_id_marker;//vehicle_no;
    document.getElementById('iw-driver').textContent = driver_fullname_marker;//driver;
    document.getElementById('iw-speed').textContent = speed;

    infoWindow.open(map, marker);
}

function deleteListeners() {
    for (var i = 0; i < listenerHandle.length; i++) {
        google.maps.event.removeListener(listenerHandle[i]);
    }
    listenerHandle = [];
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    //clearListeners();
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function showDriverUpdateSearch(driver_id, driver_name) {
    //alert("showtable()");
    var count;
    $.ajax({
        type: "GET",
        data: {
            driverID: driver_id,
            driverName: driver_name,
            action: 'search'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);
            var dataHandler = $("#load-data-here");
            dataHandler.empty();

            count = Object.keys(resultObj).length;
            var num = 0;
            $.each(resultObj, function (key, val) {
                num++;
                console.log(val);

                if (num % 2 == 0) {
                    var newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                }
                else {
                    var newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                }
                //console.log(local);
                //alert(val.data_id);

                newRow.html(
                   '<td><div id="count' + num + '" align="center">' + num + '</div></td>' +
                   '<td><div id="company_name' + num + '" align="center">' + val.org + '</div></td>' +
                   '<td><div id="driver_name' + num + '" align="center">' + val.driver_name + ' ' + val.driver_surname + '</div></td>' +
                   '<td><div id="driver_id' + num + '" align="center">' + val.driver_id + '</div></td>' +
                   '<td><div id="mobile_no' + num + '" align="center">' + val.mobile_no + '</div></td>' +
                   '<td><div id="status' + num + '" align="center">' + val.active + '</div></td>' +
                   '<td><div id="action' + num + '" align="center">' +
                   '<input type="image" id="showDriverInfoForm" onclick="showDriverInfoForm(' + val.data_id + ')" src="' + imgIconsPaht + 'look' + '.png' + '" width="20" height="20" style="background-color: #1A9F00;" > ' +
                   '<input type="image" id="showDriverUpdateForm" onclick="showDriverUpdateForm(' + val.data_id + ')" src="' + imgIconsPaht + 'edit' + '.png' + '" width="20" height="20" style="background-color: #13009F;"> ' +
                   '<input type="image" id="deleteDriverDB" onclick="deleteDriverDB(' + val.data_id + ')" src="' + imgIconsPaht + 'delete' + '.png' + '" width="20" height="20" style="background-color: #9F0025;"></div></td>' +
                   //'<td><div id="action' + val.count + '" align="center"><button id="showDriverInfoForm" onclick="showDriverInfoForm('+ val.data_id +')">S</button><button id="showDriverUpdateForm" onclick="showDriverUpdateForm('+ val.data_id +')">E</button><button id="deleteDriverDB" onclick="deleteDriverDB('+ val.data_id +')">D</button></div></td>' +
                   '<td><div id="space' + num + '" align="center"></div></td>' +
                   "</tr>"
                );
                dataHandler.append(newRow);
            });//each

            dataHandler = $("#load-foot-here");
            dataHandler.empty();

            //alert("after ajax()");
            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();
            var space = 20 - (count * 2);
            //alert("count = " + count + " space = " + space);
            if (space > 0) {
                for (var i = 0 ; i < space ; i++) {
                    var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>');
                    newRow.html('<td></td>' + "</tr>");
                    dataHandler.append(newRow);
                }//for
            }
        }
    });
}

function showDriverTable(page_no) {
    var display_page = $('#display_page option:selected').val();
    //alert("page_no = " + page_no);
    var count;
    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);
            var dataHandler = $("#load-data-here");
            dataHandler.empty();

            count = Object.keys(resultObj).length;

            var num = 0;
            $.each(resultObj, function (key, val) {
                if (((val.count > ((page_no - 1) * display_page)) || (page_no == null)) && num < display_page) {
                    console.log(val);
                    num++;

                    if (num % 2 == 0) {
                        var newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    else {
                        var newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                    }

                    newRow.html(
                       '<td><div id="count' + val.count + '" align="center">' + num + '</div></td>' +
                       '<td><div id="company_name' + val.count + '" align="center">' + val.org + '</div></td>' +
                       '<td><div id="driver_name' + val.count + '" align="center">' + val.driver_name + ' ' + val.driver_surname + '</div></td>' +
                       '<td><div id="driver_id' + val.count + '" align="center">' + val.driver_id + '</div></td>' +
                       '<td><div id="mobile_no' + val.count + '" align="center">' + val.mobile_no + '</div></td>' +
                       '<td><div id="status' + val.count + '" align="center">' + val.active + '</div></td>' +
                       '<td><div id="action' + val.count + '" align="center">' +
                       '<input type="image" id="showDriverInfoForm" onclick="showDriverInfoForm(' + val.data_id + ')" src="' + imgIconsPaht + 'look' + '.png' + '" width="20" height="20" style="background-color: #1A9F00;" > ' +
                       '<input type="image" id="showDriverUpdateForm" onclick="showDriverUpdateForm(' + val.data_id + ')" src="' + imgIconsPaht + 'edit' + '.png' + '" width="20" height="20" style="background-color: #13009F;"> ' +
                       '<input type="image" id="deleteDriverDB" onclick="deleteDriverDB(' + val.data_id + ')" src="' + imgIconsPaht + 'delete' + '.png' + '" width="20" height="20" style="background-color: #9F0025;"></div></td>' +
                       '<td><div id="space' + val.count + '" align="center"></div></td>' +
                       "</tr>"
                    );
                    dataHandler.append(newRow);
                    statusStatus(val.count, val.active);
                }//if
            });//each

            //alert("load-foot-here");
            dataHandler = $("#load-foot-here");
            dataHandler.empty();

            var pluspage = count % display_page;
            if (pluspage > 0) { pluspage = 1; }
            else { pluspage = 0; }
            var allpage = Math.floor(count / display_page) + pluspage;
            //alert("display_page = " + display_page + " allpage = " + allpage);
            var strfoot = '';
            if (page_no > 1) {
                strfoot += '<li><button class="button" id="previous" onclick="showDriverTable(' + (page_no - 1) + ')">Previous</button></li>';
            }
            for (var i = 0 ; i < allpage ; i++) {
                if ((page_no == null) && (i > 0) && ((i + 1) != page_no)) {
                    strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showDriverTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
                }
                else if ((page_no != null) && ((i + 1) != page_no)) {
                    strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showDriverTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
                }
            }
            if (page_no == null && count > display_page) {
                strfoot += '<li><button class="button" id="next" onclick="showDriverTable(' + (2) + ')">Next</button></li>';
            }
            else if (page_no < allpage) { strfoot += '<li><button class="button" id="next" onclick="showDriverTable(' + (page_no + 1) + ')">Next</button></li>'; }
            //alert(strfoot);
            var newRow = $(
            '<tr><td colspan="13"><div id="paging"><ul>' +
            strfoot +
            '</ul></div></tr>'
            );
            if (strfoot != '')
                dataHandler.append(newRow);

            //alert("after ajax()");
            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();
            var space = 20 - (num * 2);
            //alert("count = " + count + " space = " + space);
            if (space > 0) {
                for (var i = 0 ; i < space ; i++) {
                    var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>');
                    newRow.html('<td></td>' + "</tr>");
                    dataHandler.append(newRow);
                }//for
            }

            dataHandler = $("#head-form-data-here");
            dataHandler.empty();
            dataHandler = $("#form-data-here");
            dataHandler.empty();
        }
    });
}

function drawGauge(percent) {

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#DF5353'], // red
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#55BF3B'] // green
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    var chartSpeed = Highcharts.chart('container-caravailable', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: ''
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: '',
            data: [percent],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:35px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}%</span><br/>' +
                       '<span style="font-size:18px;color:silver">Car Avaliable</span></div>'
            },
            tooltip: {
                valueSuffix: 'Car Avaliacle'
            }
        }]

    }));

}

function addNewDriver() {

    var dataHandler = $("#head-form-data-here");
    dataHandler.empty();

    var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
					'<th colspan="2" style="width: 100%"> <div id="head_add_driver" align="center">Add Driver Information</div></th>' +
					'</tr>');
    dataHandler.append(newRow);
    /////////////////////////////////////////
    dataHandler = $("#form-data-here");
    dataHandler.empty();

    newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left" width="30%"><div id="add_driver_fullname" >Driver Name</div></td>' +
		'<td align="left" width="70%"><div id="add_driver_name" style="float: left;">Name:</div><input type="text" id="data_driver_name" size="12" style="float: left;">' +
		'<div id="add_driver_surname" style="float: left;">Surname:</div>' +
	    '<input type="text" id="data_driver_surname" size="15" style="float: left;"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_licence_no">Licence No</div>' +
		'</td>' +
		'<td align="left"><input type="text" id="data_driver_id" size="18" maxlength="18"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_licence_expiry">Licence Expiry</div></td>' +
		'<td align="left"><input type="date" id="data_licence_expiry"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_driver_address">Driver Address</div></td>' +
		'<td align="left"><input type="text" id="data_driver_address" size="50"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_mobile_no">Mobile No</div></td>' +
		'<td align="left"><input type="text" id="data_mobile_no" size="10" maxlength="10"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_company_name">Company Name</div></td>' +
		'<td align="left"><input type="text" id="data_company_name" size="50"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_active_status">Active Status</div></td>' +
		'<td align="left"><input type="checkbox" id="data_active" value="active"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
        '<td align="left"><div></div></td>' +
        '<td align="center"><div><button id="add" onclick="addDriverDB()">Add New Driver</button>' +
	    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
	    '<button id="cancel" onclick="cancelAddDriverDB()">Cancel</button></div></td>' +
        "</tr>"
		);
    dataHandler.append(newRow);

    setDriverAddFormLanguage();

    setSelectLicenceLanguage();

    setSelectDriverLicType();

    setSelectDriverSexLanguage();

    $('#transport').click(function () {
        if ($(this).is(':checked')) {
            //alert("transport");
            var language = getCookie("language");
            if (language == "") $('#select_driver_lic_car_code').empty().append(selectDriverLicTranThai());
            else if (language == "thai") $('#select_driver_lic_car_code').empty().append(selectDriverLicTranThai());
            else if (language == "eng") $('#select_driver_lic_car_code').empty().append(selectDriverLicTranEng());

            $('#data_driver_lic_car_code').attr('size', 1);
            $('#data_driver_lic_car_code').attr('maxlength', 2);

            setSelectDriverLicType();
        }
    });

    $('#private').click(function () {
        if ($(this).is(':checked')) {
            //alert("private");
            var language = getCookie("language");
            if (language == "") $('#select_driver_lic_car_code').empty().append(selectDriverLicCarThai());
            else if (language == "thai") $('#select_driver_lic_car_code').empty().append(selectDriverLicCarThai());
            else if (language == "eng") $('#select_driver_lic_car_code').empty().append(selectDriverLicCarEng());

            $('#data_driver_lic_car_code').attr('size', 3);
            $('#data_driver_lic_car_code').attr('maxlength', 4);

            setSelectDriverLicType();
        }
    });

    dataHandler = $("#spaceAfterTable");
    dataHandler.empty();
    var space = 3;
    //alert("count = " + count + " space = " + space);
    if (space > 0) {
        for (var i = 0 ; i < space ; i++) {
            var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>');
            newRow.html('<td></td>' + "</tr>");
            dataHandler.append(newRow);
        }//for
    }

    window.scrollTo(0, document.body.scrollHeight);
}

function setSelectDriverLicTypeLanguage() {
    var language = getCookie("language");
    if (language == "thai") {
        var check = document.getElementById("transport").checked;
        if (check == true) $('#select_driver_lic_car_code').empty().append(selectDriverLicTranThai());
        else $('#select_driver_lic_car_code').empty().append(selectDriverLicCarThai());
    }
    else if (language == "eng") {
        var check = document.getElementById("transport").checked;
        if (check == true) $('#select_driver_lic_car_code').empty().append(selectDriverLicTranEng());
        else $('#select_driver_lic_car_code').empty().append(selectDriverLicCarEng());
    }
}

function setSelectDriverLicType() {
    $('#data_driver_lic_car_code').val('');

    $("#data_select_driver_lic_car_code").change(function () {
        //alert("change");
        $('#data_driver_lic_car_code').val($('#data_select_driver_lic_car_code option:selected').val());
    });

    $('#data_driver_lic_car_code').on('input', function (e) {
        //alert($(this).val());var myLength = $("#myTextbox").val().length;
        var myLength = $(this).val().length;
        var maxLength = document.getElementById("data_driver_lic_car_code").maxLength;

        if (myLength == 2 && maxLength == 2)
            $('#data_select_driver_lic_car_code').val($(this).val()).change();
        else if (myLength == 4 && maxLength == 4)
            $('#data_select_driver_lic_car_code').val($(this).val()).change();
    });
}

function addDriverDB() {
    var data_driver_name = $('#data_driver_name').val();
    var data_driver_surname = $('#data_driver_surname').val();
    var data_driver_id = $('#data_driver_id').val();
    var data_licence_expiry = $('#data_licence_expiry').val();
    var data_driver_address = $('#data_driver_address').val();
    var data_mobile_no = $('#data_mobile_no').val();
    var data_company_name = $('#data_company_name').val();

    if ($('#data_active').prop('checked')) { status = 1; }
    else { status = 0; }
    var data_active = status;

    //alert("data_driver_name = " + data_driver_name);
    console.log("data_driver_name = " + data_driver_name);
    //alert("data_driver_surname = " + data_driver_surname);
    console.log("data_driver_surname = " + data_driver_surname);
    //alert("data_driver_id = " + data_driver_id);
    console.log("data_driver_id = " + data_driver_id);
    //alert("data_licence_expiry = " + data_licence_expiry);
    console.log("data_licence_expiry = " + data_licence_expiry);
    //alert("data_driver_address = " + data_driver_address);
    console.log("data_driver_address = " + data_driver_address);
    //alert("data_mobile_no = " + data_mobile_no);
    console.log("data_mobile_no = " + data_mobile_no);
    //alert("data_company_name = " + data_company_name);
    console.log("data_company_name = " + data_company_name);
    //alert("data_active = " + data_active);
    console.log("data_active = " + data_active);

    $.ajax({
        type: "GET",
        data: {
            driver_id: data_driver_id,
            driver_name: data_driver_name,
            driver_surname: data_driver_surname,
            licence_expiry: data_licence_expiry,
            driver_address: data_driver_address,
            mobile_no: data_mobile_no,
            company_name: data_company_name,
            active: data_active,
            action: 'insert'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/setdriverdata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);
            $.each(resultObj, function (key, val) {
                console.log(val);
            });//each
        }
    })
		 .done(function () {
		     alert("Add New Driver Succesful!");

		     var dataHandler = $("#head-form-data-here");
		     dataHandler.empty();
		     dataHandler = $("#form-data-here");
		     dataHandler.empty();
		     showDriverTable();
		 })
		 .fail(function () {
		     alert("Something Wrong. Please Try Again!");
		 })
		 .always(function () {
		     //alert( "complete" );
		 });
}

function showDriverUpdateForm(data_id) {
    var active;
    $.ajax({
        type: "GET",
        data: { dataID: data_id, action: 'viewByDataID' },//{name: 'Wayne', age: 27, country: 'Ireland'},test.php?name=Wayne&age=27&country=Ireland//"vehicle_id=''",//"userId=12345&userName=test",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            var dataHandler = $("#head-form-data-here");
            dataHandler.empty();

            var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
                '<th colspan="2" style="width: 100%"> <div id="head_update_driver" align="center">Update Vehicle Information</div></th>' +
                '</tr>');
            dataHandler.append(newRow);

            dataHandler = $("#form-data-here");
            dataHandler.empty();

            $.each(resultObj, function (key, val) {
                console.log(val);
                //console.log(local);
                //alert(val.driver_id);
                active = val.active;

                newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left" width="30%"><div id="update_driver_fullname">Driver Name</div></td>' +
                      '<td align="left" width="70%"><div id="update_driver_name" style="float: left;">Name</div><input type="text" id="data_driver_name" size="12" value="' + val.driver_name + '" style="float: left;">' +
                      '<div id="update_driver_surname" style="float: left;">Surname</div>' +
                      '<input type="text" id="data_driver_surname" size="15" value="' + val.driver_surname + '" style="float: left;"></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div id="update_licence_no">Licence No</div></td>' +
                      '<td align="left"><input type="text" id="data_driver_id" size="18" maxlength="18" value="' + val.driver_id + '" disabled></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div id="update_licence_expiry">Licence Expiry</div></td>' +
                      '<td align="left"><input type="date" id="data_licence_expiry" value="' + val.licence_expiry + '"></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div id="update_driver_address">Driver Address</div></td>' +
                      '<td align="left"><input type="text" id="data_driver_address" size="50" value="' + val.driver_address + '"></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div id="update_mobile_no">Mobile No</div></td>' +
                      '<td align="left"><input type="text" id="data_mobile_no" size="10" maxlength="10" value="' + val.mobile_no + '"></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div id="update_company_name">Company Name</div></td>' +
                      '<td align="left"><input type="text" id="data_company_name" size="50" value="' + val.org + '"></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div id="update_active_status">Active Status</div></td>' +
                      '<td align="left"><input type="checkbox" id="data_active" value="active"></td>' +
                      "</tr>" +
                      '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                      '<td align="left"><div></div></td>' +
                      '<td align="center"><div><button id="update" onclick="updateDriverDB(' + data_id + ')">Update Driver</button>' +
                      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                      '<button id="cancel" onclick="cancelAddDriverDB()">Cancel</button></div></td>' +
                      "</tr>"
               );
                dataHandler.append(newRow);
                setDriverUpdateFormLanguage();
            });//each

            if (active == 0) $('#data_active').prop('checked', false);
            else if (active == 1) $('#data_active').prop('checked', true);

            //alert("after ajax()");
            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();

            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}


function updateDriverDB(data_id) {
    var data_driver_name = $('#data_driver_name').val();
    var data_driver_surname = $('#data_driver_surname').val();
    var data_driver_id = $('#data_driver_id').val();
    var data_licence_expiry = $('#data_licence_expiry').val();
    var data_driver_address = $('#data_driver_address').val();
    var data_mobile_no = $('#data_mobile_no').val();
    var data_company_name = $('#data_company_name').val();

    if ($('#data_active').prop('checked')) { status = 1; }
    else { status = 0; }
    var data_active = status;

    //alert("data_driver_name = " + data_driver_name);
    console.log("data_driver_name = " + data_driver_name);
    //alert("data_driver_surname = " + data_driver_surname);
    console.log("data_driver_surname = " + data_driver_surname);
    //alert("data_driver_id = " + data_driver_id);
    console.log("data_driver_id = " + data_driver_id);
    //alert("data_licence_expiry = " + data_licence_expiry);
    console.log("data_licence_expiry = " + data_licence_expiry);
    //alert("data_driver_address = " + data_driver_address);
    console.log("data_driver_address = " + data_driver_address);
    //alert("data_mobile_no = " + data_mobile_no);
    console.log("data_mobile_no = " + data_mobile_no);
    //alert("data_company_name = " + data_company_name);
    console.log("data_company_name = " + data_company_name);
    //alert("data_active = " + data_active);
    console.log("data_active = " + data_active);

    $.ajax({
        type: "GET",
        data: {
            dataID: data_id,
            driver_id: data_driver_id,
            driver_name: data_driver_name,
            driver_surname: data_driver_surname,
            licence_expiry: data_licence_expiry,
            driver_address: data_driver_address,
            mobile_no: data_mobile_no,
            company_name: data_company_name,
            active: data_active,
            action: 'update'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/setdriverdata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);
            $.each(resultObj, function (key, val) {
                console.log(val);
            });//each
        }
    })
		 .done(function () {
		     alert("Add New Driver Succesful!");

		     var dataHandler = $("#head-form-data-here");
		     dataHandler.empty();
		     dataHandler = $("#form-data-here");
		     dataHandler.empty();
		     showDriverTable();
		 })
		 .fail(function () {
		     alert("Something Wrong. Please Try Again!");
		 })
		 .always(function () {
		     //alert( "complete" );
		 });
}

function cancelAddDriverDB() {
    var dataHandler = $("#head-form-data-here");
    dataHandler.empty();
    dataHandler = $("#form-data-here");
    dataHandler.empty();

    showDriverTable();
}

function deleteDriverDB(id) {
    var pass = prompt("Please enter your password confirm to delete this:", "");
    if (pass != "" && pass != null) {
        $.ajax({
            url: 'http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/functions.php',
            type: 'post',
            data: { "pass": pass },
            success: function (response) {
                if (response == 'true') {
                    var data_id = id;
                    $.ajax({
                        type: "GET",
                        data: {
                            dataID: data_id,
                            action: 'delete'
                        },
                        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/setdriverdata.php",
                        success: function (result) {
                            var resultObj = JSON.parse(result);
                            $.each(resultObj, function (key, val) {
                                console.log(val);
                            });//each
                        }
                    })
						.done(function () {
						    alert("Delete Driver Complete!");

						    var dataHandler = $("#head-form-data-here");
						    dataHandler.empty();
						    dataHandler = $("#form-data-here");
						    dataHandler.empty();
						    showDriverTable();
						})
						.fail(function () {
						    alert("Something Wrong. Please Try Again!");
						})
						.always(function () {
						    //alert( "complete" );
						});
                }
                else if (response == 'false') {
                    alert("Invalid password!");
                }
            }
        });
    }
}


function addNewVehicle() {

    var dataHandler = $("#head-form-data-here");
    dataHandler.empty();

    var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
					'<th colspan="2" style="width: 100%"> <div id="head_add_vehicle" align="center">Add Vehicle Information</div></th>' +
					'</tr>');
    dataHandler.append(newRow);
    /////////////////////////////////////////
    dataHandler = $("#form-data-here");
    dataHandler.empty();

    //code2Province(val.province_code)
    newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_vehicle_no">Vehicle No</div></td>' +
		'<td align="left"><input type="text" id="data_vehicle_id_first" size="2" maxlength="3"> - ' +
		'<input type="text" id="data_vehicle_id_second" size="3" maxlength="4"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_vehicle_type">Vehicle Type</div></td>' +
		'<td align="left"><input type="text" id="data_vehicle_type" size="23" maxlength="20"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_province">Province</div></td>' +
		'<td align="left"><div id="select_province"></div></td>' +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_vehicle_register">Vehicle Register Type</div></td>' +
		'<td align="left"><input type="text" id="data_vehicle_register_type" size="4" maxlength="4"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_unit_id">Unit ID</div></td>' +
		'<td align="left"><input type="text" id="data_unit_id" size="40"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_chassis_no">Chassis No</div></td>' +
		'<td align="left"><input type="text" id="data_vehicle_chassis_no" size="25"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_unit_sim_no">Unit Sim No</div></td>' +
		'<td align="left"><input type="text" id="data_unit_sim" size="10" maxlength="10"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_capacity">Capacity</div></td>' +
		'<td align="left"><input type="text" id="data_capacity" size="2" maxlength="2"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_driver">Driver</div></td>' +
		'<td align="left"><div id="select_driver"></div>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_card_reader_status">Card Reader Status</div></td>' +
		'<td align="left"><input type="checkbox" id="data_cardreader" value="card"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
		'<td align="left"><div id="add_active_status">Active Status</div></td>' +
		'<td align="left"><input type="checkbox" id="data_active" value="active"></td>' +
		"</tr>" +
		'<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
        '<td align="left"><div></div></td>' +
        '<td align="center"><div><button id="add" onclick="addVehicleDB()">Add New Vehicle</button>' +
	    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
	    '<button id="cancel" onclick="cancelAddVehicleDB()">Cancel</button></div></td>' +
        "</tr>"
		);
    dataHandler.append(newRow);

    selectDriver();

    setVehicleAddFormLanguage();

    setSelectProvinceLanguage();

    dataHandler = $("#spaceAfterTable");
    dataHandler.empty();

    window.scrollTo(0, document.body.scrollHeight);
}

function addVehicleDB() {
    var data_vehicle_id_first = $('#data_vehicle_id_first').val();
    var data_vehicle_id_second = $('#data_vehicle_id_second').val();
    var data_vehicle_id = data_vehicle_id_first + data_vehicle_id_second;
    //////////////////////////////////////////////////////////////////
    var data_vehicle_type = $('#data_vehicle_type').val();
    var data_province_code = $('#data_province_code option:selected').val();
    var data_vehicle_register_type = $('#data_vehicle_register_type').val();
    var data_unit_id = $('#data_unit_id').val();
    var data_vehicle_chassis_no = $('#data_vehicle_chassis_no').val();
    var data_unit_sim = $('#data_unit_sim').val();
    var data_capacity = $('#data_capacity').val();
    var data_select_driver = $('#data_select_driver option:selected').val();
    //alert(data_active);
    var status;
    if ($('#data_cardreader').prop('checked')) { status = 1; }
    else { status = 0; }
    var data_cardreader = status;

    if ($('#data_active').prop('checked')) { status = 1; }
    else { status = 0; }
    var data_active = status;
    //alert("data_vehicle_id = " + data_vehicle_id);
    console.log("data_vehicle_id = " + data_vehicle_id);
    //alert("data_vehicle_type = " + data_vehicle_type);
    console.log("data_vehicle_type = " + data_vehicle_type);
    //alert("data_province_code = " + data_province_code);
    console.log("data_province_code = " + data_province_code);
    //alert("data_vehicle_register_type = " + data_vehicle_register_type);
    console.log("data_vehicle_register_type = " + data_vehicle_register_type);
    //alert("data_unit_id = " + data_unit_id);
    console.log("data_unit_id = " + data_unit_id);
    //alert("data_vehicle_chassis_no = " + data_vehicle_chassis_no);
    console.log("data_vehicle_chassis_no = " + data_vehicle_chassis_no);
    //alert("data_unit_sim = " + data_unit_sim);
    console.log("data_unit_sim = " + data_unit_sim);
    //alert("data_capacity = " + data_capacity);
    console.log("data_capacity = " + data_capacity);
    //alert("data_driver_name = " + data_driver_name);
    //console.log("data_driver_name = " +data_driver_name);
    //alert("data_driver_surname = " + data_driver_surname);
    //console.log("data_driver_surname = " +data_driver_surname);
    //alert("data_select_driver = " + data_select_driver);
    console.log("data_select_driver = " + data_select_driver);
    //alert("data_cardreader = " + data_cardreader);
    console.log("data_cardreader = " + data_cardreader);
    //alert("data_active = " + data_active);
    console.log("data_active = " + data_active);

    $.ajax({
        type: "GET",
        data: {
            vehicle_id: data_vehicle_id,
            vehicle_type: data_vehicle_type,
            province_code: data_province_code,
            vehicle_register_type: data_vehicle_register_type,
            unit_id: data_unit_id,
            vehicle_chassis_no: data_vehicle_chassis_no,
            unit_sim: data_unit_sim,
            capacity: data_capacity,
            driver_id: data_select_driver,
            cardreader: data_cardreader,
            active: data_active,
            action: 'insert'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/setvehicledata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);
            $.each(resultObj, function (key, val) {
                console.log(val);
            });//each
        }
    })
		 .done(function () {
		     alert("Add New Vehicle Succesful!");

		     var dataHandler = $("#head-form-data-here");
		     dataHandler.empty();
		     dataHandler = $("#form-data-here");
		     dataHandler.empty();
		     showVehicleTable();
		 })
		 .fail(function () {
		     alert("Something Wrong. Please Try Again!");
		 })
		 .always(function () {
		     //alert( "complete" );
		 });
}

function updateVehicleDB() {
    var data_vehicle_id_first = $('#data_vehicle_id_first').val();
    var data_vehicle_id_second = $('#data_vehicle_id_second').val();
    var data_vehicle_id = data_vehicle_id_first + data_vehicle_id_second;
    //////////////////////////////////////////////////////////////////
    var data_vehicle_type = $('#data_vehicle_type').val();
    var data_province_code = $('#data_province_code option:selected').val();
    var data_vehicle_register_type = $('#data_vehicle_register_type').val();
    var data_unit_id = $('#data_unit_id').val();
    var data_vehicle_chassis_no = $('#data_vehicle_chassis_no').val();
    var data_unit_sim = $('#data_unit_sim').val();
    var data_capacity = $('#data_capacity').val();
    var data_select_driver = $('#data_select_driver option:selected').val();

    var status;
    if ($('#data_cardreader').prop('checked')) { status = 1; }
    else { status = 0; }
    var data_cardreader = status;

    if ($('#data_active').prop('checked')) { status = 1; }
    else { status = 0; }
    var data_active = status;
    //alert("data_vehicle_id = " + data_vehicle_id);
    console.log("data_vehicle_id = " + data_vehicle_id);
    //alert("data_vehicle_type = " + data_vehicle_type);
    console.log("data_vehicle_type = " + data_vehicle_type);
    //alert("data_province_code = " + data_province_code);
    console.log("data_province_code = " + data_province_code);
    //alert("data_vehicle_register_type = " + data_vehicle_register_type);
    console.log("data_vehicle_register_type = " + data_vehicle_register_type);
    //alert("data_unit_id = " + data_unit_id);
    console.log("data_unit_id = " + data_unit_id);
    //alert("data_vehicle_chassis_no = " + data_vehicle_chassis_no);
    console.log("data_vehicle_chassis_no = " + data_vehicle_chassis_no);
    //alert("data_unit_sim = " + data_unit_sim);
    console.log("data_unit_sim = " + data_unit_sim);
    //alert("data_capacity = " + data_capacity);
    console.log("data_capacity = " + data_capacity);
    //alert("data_driver_name = " + data_driver_name);
    //console.log("data_driver_name = " +data_driver_name);
    //alert("data_driver_surname = " + data_driver_surname);
    //console.log("data_driver_surname = " +data_driver_surname);
    //alert("data_select_driver = " + data_select_driver);
    console.log("data_select_driver = " + data_select_driver);
    //alert("data_cardreader = " + data_cardreader);
    console.log("data_cardreader = " + data_cardreader);
    //alert("data_active = " + data_active);
    console.log("data_active = " + data_active);

    $.ajax({
        type: "GET",
        data: {
            vehicle_id: data_vehicle_id,
            vehicle_type: data_vehicle_type,
            province_code: data_province_code,
            vehicle_register_type: data_vehicle_register_type,
            unit_id: data_unit_id,
            vehicle_chassis_no: data_vehicle_chassis_no,
            unit_sim: data_unit_sim,
            capacity: data_capacity,
            driver_id: data_select_driver,
            cardreader: data_cardreader,
            active: data_active,
            action: 'update'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/setvehicledata.php",
        success: function (result) {
            var resultObj = JSON.parse(result);
            $.each(resultObj, function (key, val) {
                console.log(val);
            });//each
        }
    })
		 .done(function () {
		     alert("Update Vehicle Succesful!");

		     var dataHandler = $("#head-form-data-here");
		     dataHandler.empty();
		     dataHandler = $("#form-data-here");
		     dataHandler.empty();
		     showVehicleTable();
		 })
		 .fail(function () {
		     alert("Something Wrong. Please Try Again!");
		 })
		 .always(function () {
		     //alert( "complete" );
		 });
}

function deleteVehicleDB(id) {
    var pass = prompt("Please enter your password confirm to delete this:", "");
    if (pass != "" && pass != null) {
        $.ajax({
            url: 'http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/functions.php',
            type: 'post',
            data: { "pass": pass },
            success: function (response) {
                if (response == 'true') {
                    var data_vehicle_id = id;
                    $.ajax({
                        type: "GET",
                        data: {
                            vehicle_id: data_vehicle_id,
                            action: 'delete'
                        },
                        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/setvehicledata.php",
                        success: function (result) {
                            var resultObj = JSON.parse(result);
                            $.each(resultObj, function (key, val) {
                                console.log(val);
                            });//each
                        }
                    })
					.done(function () {
					    alert("Delete Vehicle Complete!");

					    var dataHandler = $("#head-form-data-here");
					    dataHandler.empty();
					    dataHandler = $("#form-data-here");
					    dataHandler.empty();
					    showVehicleTable();
					})
					.fail(function () {
					    alert("Something Wrong. Please Try Again!");
					})
					.always(function () {
					    //alert( "complete" );
					});
                }
                else if (response == 'false') {
                    alert("Invalid password!");
                }
            }
        });
    }
}

function cancelAddVehicleDB() {
    var dataHandler = $("#head-form-data-here");
    dataHandler.empty();
    dataHandler = $("#form-data-here");
    dataHandler.empty();

    showVehicleTable();
}

function showVehicleUpdateForm(vehicle_id) {
    //alert("in showVehicleInfoForm() id = " + vehicle_id);
    var id;
    var driver_id;
    var strActive;
    var strRead;
    var card_reader;
    var active;
    var strVehicleID;
    var firstVehicleID;
    var secondVehicleID;

    $.ajax({
        type: "GET",
        data: { vehicleID: vehicle_id, action: 'view' },//{name: 'Wayne', age: 27, country: 'Ireland'},test.php?name=Wayne&age=27&country=Ireland//"vehicle_id=''",//"userId=12345&userName=test",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            var dataHandler = $("#head-form-data-here");
            dataHandler.empty();

            var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
                '<th colspan="2" style="width: 100%"> <div id="head_update_vehicle" align="center">Update Vehicle Information</div></th>' +
                '</tr>');
            dataHandler.append(newRow);

            dataHandler = $("#form-data-here");
            dataHandler.empty();

            $.each(resultObj, function (key, val) {
                console.log(val);
                //console.log(local);
                //alert(val.vehicle_id);
                id = val.driver_id;
                codeProvince = val.province_code;
                strVehicleID = val.vehicle_id;
                card_reader = val.card_reader;
                active = val.active;

                if (strVehicleID.length == 6) {
                    //var text="excellent"
                    //var text="123456";
                    firstVehicleID = strVehicleID.substring(0, 2) //returns "exce"
                    secondVehicleID = strVehicleID.substring(2, 7) //returns "ce"
                }
                else if (strVehicleID.length == 7) {
                    //var text="excellent"
                    firstVehicleID = strVehicleID.substring(0, 3) //returns "exce"
                    secondVehicleID = strVehicleID.substring(3, 7) //returns "ce"
                }
                newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_vehicle_no">Vehicle No</div></td>' +
                  '<td align="left"><input type="text" id="data_vehicle_id_first" size="2" maxlength="3" value="' + firstVehicleID + '" disabled> - ' +
                  '<input type="text" id="data_vehicle_id_second" size="3" maxlength="4" value="' + secondVehicleID + '" disabled></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_vehicle_type">Vehicle Type</div></td>' +
                  '<td align="left"><input type="text" id="data_vehicle_type" size="23" maxlength="20" value="' + val.vehicle_type + '"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_province">Province</div></td>' +
                  '<td align="left"><div id="select_province"></div></td>' +
                  '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_vehicle_register">Vehicle Register Type</div></td>' +
                  '<td align="left"><input type="text" id="data_vehicle_register_type" size="4" maxlength="4" value="' + val.vehicle_register_type + '"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_unit_id">Unit ID</div></td>' +
                  '<td align="left"><input type="text" id="data_unit_id" size="40" value="' + val.unit_id + '"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_chassis_no">Chassis No</div></td>' +
                  '<td align="left"><input type="text" id="data_vehicle_chassis_no" size="25" value="' + val.vehicle_chassis_no + '"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_unit_sim_no">Unit Sim No</div></td>' +
                  '<td align="left"><input type="text" id="data_unit_sim" size="10" maxlength="10" value="' + val.unit_sim + '"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_capacity">Capacity</div></td>' +
                  '<td align="left"><input type="text" id="data_capacity" size="2" maxlength="2" value="' + val.capacity + '"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_driver">Driver</div></td>' +
                  '<td align="left"><div id="select_driver"></div>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_card_reader_status">Card Reader Status</div></td>' +
                  '<td align="left"><input type="checkbox" id="data_cardreader" value="card"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div id="update_active_status">Active Status</div></td>' +
                  '<td align="left"><input type="checkbox" id="data_active" value="active"></td>' +
                  "</tr>" +
                  '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                  '<td align="left"><div></div></td>' +
                  '<td align="center"><div><button id="add" onclick="updateVehicleDB()">Update Vehicle</button>' +
                  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                  '<button id="cancel" onclick="cancelAddVehicleDB()">Cancel</button></div></td>' +
                  "</tr>"
               );
                dataHandler.append(newRow);
                setVehicleUpdateFormLanguage();
            });//each

            selectedDriver(id);

            setSelectProvinceLanguage();

            $('#data_province_code').val(codeProvince).change();

            if (card_reader == 0) $('#data_cardreader').attr('checked', false);
            else if (card_reader == 1) $('#data_cardreader').attr('checked', true);

            if (active == 0) $('#data_active').prop('checked', false);
            else if (active == 1) $('#data_active').prop('checked', true);

            //alert("after ajax()");
            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();

            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}

function showVehicleUpdateSearch(vehicle_id, vehicle_type) {
    //alert("in showVehicleInfoForm() id = " + vehicle_id);
    var count;
    var driver_id = [];

    $.ajax({
        type: "GET",
        data: {
            vehicleID: vehicle_id,
            vehicleType: vehicle_type,
            action: 'search'
        },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);
            var dataHandler = $("#load-data-here");
            dataHandler.empty();

            count = Object.keys(resultObj).length;
            var num = 0;
            $.each(resultObj, function (key, val) {
                num++;
                console.log(val);

                driver_id.push(val.driver_id);

                if (num % 2 == 0) {
                    var newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                }
                else {
                    var newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                }

                var str1 = '\'';
                var strVehicleID = val.vehicle_id;
                var str3 = '\'';
                var id = str1 + strVehicleID + str3;

                if (strVehicleID.length == 6) {
                    var firstVehicleID = strVehicleID.substring(0, 2)
                    var secondVehicleID = strVehicleID.substring(2, 7)
                    var strDash = '-';
                    strVehicleID = firstVehicleID + strDash + secondVehicleID;
                }
                else if (strVehicleID.length == 7) {
                    var firstVehicleID = strVehicleID.substring(0, 3)
                    var secondVehicleID = strVehicleID.substring(3, 7)
                    var strDash = '-';
                    strVehicleID = firstVehicleID + strDash + secondVehicleID;
                }

                newRow.html(
                   '<td><div id="count' + num + '" align="center">' + num + '</div></td>' +
                   '<td><div id="vehicle_id' + num + '" align="center">' + strVehicleID + '</div></td>' +
                   '<td><div id="vehicle_type' + num + '" align="center">' + val.vehicle_type + '</div></td>' +
                   '<td><div id="driver_name' + num + '" align="center"></div></td>' +
                   '<td><div id="active' + num + '" align="center">' + val.active + '</div></td>' +
                   '<td><div id="action' + num + '" align="center">' +
                   '<input type="image" id="showVehicleInfoForm" onclick="showVehicleInfoForm(' + id + ')" src="' + imgIconsPaht + 'look' + '.png' + '" width="20" height="20" style="background-color: #1A9F00;" > ' +
                   '<input type="image" id="showVehicleUpdateForm" onclick="showVehicleUpdateForm(' + id + ')" src="' + imgIconsPaht + 'edit' + '.png' + '" width="20" height="20" style="background-color: #13009F;"> ' +
                   '<input type="image" id="deleteVehicleDB" onclick="deleteVehicleDB(' + id + ')" src="' + imgIconsPaht + 'delete' + '.png' + '" width="20" height="20" style="background-color: #9F0025;"></div></td>' +
                   '<td></td>' +
                   "</tr>"
                );
                dataHandler.append(newRow);
            });//each

            //alert("count = " + count + " driver_id.length = " + driver_id.length);
            for (var i = 0 ; i < count; i++) {
                //alert("i = " + i + " driver_id[i] = " + driver_id[i]);
                showDriverName2VehicleTable((i + 1), driver_id[i]);
            }

            dataHandler = $("#load-foot-here");
            dataHandler.empty();

            //alert("after ajax()");
            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();
            var space = 20 - (count * 2);
            //alert("count = " + count + " space = " + space);
            if (space > 0) {
                for (var i = 0 ; i < space ; i++) {
                    var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>');
                    newRow.html('<td></td>' + "</tr>");
                    dataHandler.append(newRow);
                }//for
            }
        }
    });
}

function showVehicleTable(page_no) {
    //alert("showVehicleTable()");
    //var local = "";
    var display_page = $('#display_page option:selected').val();
    //alert("page_no = " + page_no);
    var count;
    var driver_id = [];
    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);
            var dataHandler = $("#load-data-here");
            dataHandler.empty();

            count = Object.keys(resultObj).length;

            var num = 0;
            $.each(resultObj, function (key, val) {
                if (((val.count > ((page_no - 1) * display_page)) || (page_no == null)) && num < display_page) {
                    console.log(val);
                    num++;

                    driver_id.push(val.driver_id);

                    if (num % 2 == 0) {
                        var newRow = $('<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    else {
                        var newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
                    }
                    //console.log(local);
                    //alert(val.vehicle_id);
                    var str1 = '\'';
                    var strVehicleID = val.vehicle_id;
                    var str3 = '\'';
                    var id = str1 + strVehicleID + str3;
                    //alert("id = " + id);
                    if (strVehicleID.length == 6) {
                        //var text="excellent"
                        //var text="123456";
                        var firstVehicleID = strVehicleID.substring(0, 2) //returns "exce"
                        var secondVehicleID = strVehicleID.substring(2, 7) //returns "ce"
                        var strDash = '-';
                        strVehicleID = firstVehicleID + strDash + secondVehicleID;
                    }
                    else if (strVehicleID.length == 7) {
                        //var text="excellent"
                        var firstVehicleID = strVehicleID.substring(0, 3) //returns "exce"
                        var secondVehicleID = strVehicleID.substring(3, 7) //returns "ce"
                        var strDash = '-';
                        strVehicleID = firstVehicleID + strDash + secondVehicleID;
                    }

                    newRow.html(
                       '<td><div id="count' + val.count + '" align="center">' + num + '</div></td>' +
                       '<td><div id="vehicle_id' + val.count + '" align="center">' + strVehicleID + '</div></td>' +
                       '<td><div id="vehicle_type' + val.count + '" align="center">' + val.vehicle_type + '</div></td>' +
                       '<td><div id="driver_name' + val.count + '" align="center"></div></td>' +
                       '<td><div id="active' + val.count + '" align="center">' + val.active + '</div></td>' +
                       '<td><div id="action' + val.count + '" align="center">' +
                       '<input type="image" id="showVehicleInfoForm" onclick="showVehicleInfoForm(' + id + ')" src="' + imgIconsPaht + 'look' + '.png' + '" width="20" height="20" style="background-color: #1A9F00;" > ' +
                       '<input type="image" id="showVehicleUpdateForm" onclick="showVehicleUpdateForm(' + id + ')" src="' + imgIconsPaht + 'edit' + '.png' + '" width="20" height="20" style="background-color: #13009F;"> ' +
                       '<input type="image" id="deleteVehicleDB" onclick="deleteVehicleDB(' + id + ')" src="' + imgIconsPaht + 'delete' + '.png' + '" width="20" height="20" style="background-color: #9F0025;"></div></td>' +
                       '<td></td>' +
                       "</tr>"
                    );
                    dataHandler.append(newRow);
                    activeStatus(val.count, val.active);
                }
            });//each

            //alert("load-foot-here");
            dataHandler = $("#load-foot-here");
            dataHandler.empty();
            var pluspage = count % display_page;
            if (pluspage > 0) { pluspage = 1; }
            else { pluspage = 0; }
            var allpage = Math.floor(count / display_page) + pluspage;
            //alert("display_page = " + display_page + " allpage = " + allpage);
            var strfoot = '';
            if (page_no > 1) {
                strfoot += '<li><button class="button" id="previous" onclick="showVehicleTable(' + (page_no - 1) + ')">Previous</button></li>';
            }
            for (var i = 0 ; i < allpage ; i++) {
                if ((page_no == null) && (i > 0) && ((i + 1) != page_no)) {
                    strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showVehicleTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
                }
                else if ((page_no != null) && ((i + 1) != page_no)) {
                    strfoot += '<li><button class="button" id="page' + (i + 1) + '" onclick="showVehicleTable(' + (i + 1) + ')">' + (i + 1) + '</button></li>';
                }
            }
            if (page_no == null && count > display_page) {
                strfoot += '<li><button class="button" id="next" onclick="showVehicleTable(' + (2) + ')">Next</button></li>';
            }
            else if (page_no < allpage) { strfoot += '<li><button class="button" id="next" onclick="showVehicleTable(' + (page_no + 1) + ')">Next</button></li>'; }
            //alert(strfoot);
            var newRow = $(
            '<tr><td colspan="13"><div id="paging"><ul>' +
            strfoot +
            '</ul></div></tr>'
            );

            if (strfoot != '')
                dataHandler.append(newRow);
            for (var i = 0 ; i < num; i++) {
                //alert("i = " + i + " driver_id[i] = " + driver_id[i]);
                showDriverName2VehicleTable((i + 1), driver_id[i]);
            }

            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();
            var space = 20 - (num * 2);
            //alert("num = " + num + " space = " + space);
            if (space > 0) {
                for (var i = 0 ; i < space ; i++) {
                    var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>');
                    newRow.html('<td></td>' + "</tr>");
                    dataHandler.append(newRow);
                }//for
            }

            dataHandler = $("#head-form-data-here");
            dataHandler.empty();
            dataHandler = $("#form-data-here");
            dataHandler.empty();
        }
    });
}

function changeDisplayPageVehicle(page) {
    ///alert(sel.value);
    $('#data_search_vehicle_id').val('');
    $('#data_search_vehicle_type').val('');
    showVehicleTable();
}
function changeDisplayPageDriver(page) {
    ///alert(sel.value);
    $('#data_search_driver_id').val('');
    $('#data_search_driver_type').val('');
    showDriverTable();
}

function changeDisplayPageDashboard(page) {
    ///alert(sel.value);
    $('#data_search_vehicle_id').val('');
    $('#data_search_vehicle_type').val('');
    showRestoreTable();
}


function showDriverInfoForm(data_id) {
    //alert("in showVehicleInfoForm() id = " + vehicle_id);
    $.ajax({
        type: "GET",
        data: { dataID: data_id, action: 'viewByDataID' },//{name: 'Wayne', age: 27, country: 'Ireland'},test.php?name=Wayne&age=27&country=Ireland//"vehicle_id=''",//"userId=12345&userName=test",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            var dataHandler = $("#head-form-data-here");
            dataHandler.empty();

            var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
                '<th colspan="2" style="width: 100%"> <div id="head_info_driver" align="center">Driver Information</div></th>' +
                '</tr>');
            dataHandler.append(newRow);

            dataHandler = $("#form-data-here");
            dataHandler.empty();

            $.each(resultObj, function (key, val) {
                console.log(val);
                //console.log(local);
                //alert(val.vehicle_id);
                if (val.active == 0) strActive = 'Inactive';
                else if (val.active == 1) strActive = 'Active';

                newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left" width="40%"><div id="info_driver_name">Driver Name</div></td>' +
                '<td align="left" width="60%"><div id="data_driver_name">' + val.driver_name + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_driver_surname">Driver Surname</div></td>' +
                '<td align="left"><div id="data_driver_surname">' + val.driver_surname + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_licence_no">Licence No</div></td>' +
                '<td align="left"><div id="data_driver_id">' + val.driver_id + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_licence_expiry">Licence Expiry</div></td>' +
                '<td align="left"><div id="data_licence_expiry">' + val.licence_expiry + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_driver_address">Driver Address</div></td>' +
                '<td align="left"><div id="data_driver_address">' + val.driver_address + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_mobile_no">Mobile No</div></td>' +
                '<td align="left"><div id="data_mobile_no">' + val.mobile_no + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_company_name">Company Name</div></td>' +
                '<td align="left"><div id="data_company_name">' + val.org + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_active_status">Active Status</div></td>' +
                '<td align="left"><div id="data_active">' + strActive + '</div></td>' +
                "</tr>"
             );
                dataHandler.append(newRow);
                activeStatusDriverInfo(val.active);
            });//each

            setDriverInfoFormLanguage();

            //alert("after ajax()");
            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();

            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}

function showVehicleInfoForm(vehicle_id) {
    //alert("in showVehicleInfoForm() id = " + vehicle_id);
    var id;
    var strActive;
    var strRead;

    $.ajax({
        type: "GET",
        data: { vehicleID: vehicle_id, action: 'view' },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            var dataHandler = $("#head-form-data-here");
            dataHandler.empty();

            var newRow = $('<tr style="word-wrap: break-word; overflow-wrap: break-word";>' +
                '<th colspan="2" style="width: 100%"> <div id="head_info_vehicle" align="center">Vehicle Information</div></th>' +
                '</tr>');
            dataHandler.append(newRow);

            dataHandler = $("#form-data-here");
            dataHandler.empty();

            $.each(resultObj, function (key, val) {
                console.log(val);

                id = val.driver_id;
                codeProvince = val.province_code;

                if (val.card_reader == 0) strRead = 'Unread';
                else if (val.card_reader == 1) strRead = 'Read';

                if (val.active == 0) strActive = 'Inactive';
                else if (val.active == 1) strActive = 'Active';

                var strVehicleID = val.vehicle_id;

                if (strVehicleID.length == 6) {
                    //var text="excellent"
                    //var text="123456";
                    var firstVehicleID = strVehicleID.substring(0, 2) //returns "exce"
                    var secondVehicleID = strVehicleID.substring(2, 7) //returns "ce"
                    var strDash = '-';
                    strVehicleID = firstVehicleID + strDash + secondVehicleID;
                }
                else if (strVehicleID.length == 7) {
                    //var text="excellent"
                    var firstVehicleID = strVehicleID.substring(0, 3) //returns "exce"
                    var secondVehicleID = strVehicleID.substring(3, 7) //returns "ce"
                    var strDash = '-';
                    strVehicleID = firstVehicleID + strDash + secondVehicleID;
                }

                newRow = $('<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left" width="40%"><div id="info_vehicle_no">Vehicle No</div></td>' +
                '<td align="left" width="60%"><div id="data_vehicle_id">' + strVehicleID + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_vehicle_type">Vehicle Type</div></td>' +
                '<td align="left"><div id="data_vehicle_type">' + val.vehicle_type + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_province">Province</div></td>' +
                '<td align="left"><div id="data_province_code"></div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_vehicle_register">Vehicle Register Type</div></td>' +
                '<td align="left"><div id="data_vehicle_register_type">' + val.vehicle_register_type + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_unit_id">Unit ID</div></td>' +
                '<td align="left"><div id="data_unit_id">' + val.unit_id + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_chassis_no">Chassis No</div></td>' +
                '<td align="left"><div id="data_vehicle_chassis_no">' + val.vehicle_chassis_no + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_unit_sim_no">Unit Sim No</div></td>' +
                '<td align="left"><div id="data_unit_sim">' + val.unit_sim + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_capacity">Capacity</div></td>' +
                '<td align="left"><div id="data_capacity">' + val.capacity + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_driver">Driver</div></td>' +
                '<td align="left"><div id="data_driver_name"></div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_card_reader_status">Card Reader Status</div></td>' +
                '<td align="left"><div id="data_cardreader">' + strRead + '</div></td>' +
                "</tr>" +
                '<tr style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>' +
                '<td align="left"><div id="info_active_status">Active Status</div></td>' +
                '<td align="left"><div id="data_active">' + strActive + '</div></td>' +
                "</tr>"
             );
                dataHandler.append(newRow);
                cardreaderStatusVehicleInfo(val.card_reader);
                activeStatusVehicleInfo(val.active);
            });//each

            setVehicleInfoFormLanguage();
            setDataProvinceLanguage();
            showDriverName2VehicleForm(id);

            dataHandler = $("#spaceAfterTable");
            dataHandler.empty();

            window.scrollTo(0, document.body.scrollHeight);
        }
    });
}

function showDriverName2VehicleTable(index, driver_id) {
    $.ajax({
        type: "GET",
        data: { driverID: driver_id, action: 'viewByDriverID' },
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            $.each(resultObj, function (key, val) {
                console.log(val);
                $('#driver_name' + index).empty().append(val.driver_name + ' ' + val.driver_surname);
            });//each
        }
    });
}

function showDriverName2VehicleForm(driver_id) {
    //alert("showtable()");
    $.ajax({
        type: "GET",
        data: { driverID: driver_id, action: 'viewByDriverID' },//{name: 'Wayne', age: 27, country: 'Ireland'},test.php?name=Wayne&age=27&country=Ireland//"vehicle_id=''",//"userId=12345&userName=test",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            $.each(resultObj, function (key, val) {
                console.log(val);
                $('#data_driver_name').empty().append(val.driver_name + ' ' + val.driver_surname);
            });//each
        }
    });
}

function selectDriver() {

    var strSelect = '<select id="data_select_driver">';

    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);
            $.each(resultObj, function (key, val) {
                console.log(val);
                if (val.active == 1)
                    strSelect += '<option value="' + val.driver_id + '">' + val.driver_name + ' ' + val.driver_surname + '</option>';
            });//each

            //alert(strSelect + '</select>');
            strSelect += '</select>'
            console.log(strSelect + '</select>');
            var dataHandler = $("#select_driver");
            dataHandler.empty();

            var newRow = $(strSelect);
            //alert("newRow = " + newRow);
            dataHandler.append(newRow);
        }
    });
}

function selectedDriver(id) {
    var strSelect = '<select id="data_select_driver">';

    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getdriverdata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            $.each(resultObj, function (key, val) {
                console.log(val);
                if (val.active == 1)
                    strSelect += '<option value="' + val.driver_id + '">' + val.driver_name + ' ' + val.driver_surname + '</option>';
            });//each

            //alert(strSelect + '</select>');
            strSelect += '</select>'
            console.log(strSelect + '</select>');
            var dataHandler = $("#select_driver");
            dataHandler.empty();

            var newRow = $(strSelect);
            //alert("newRow = " + newRow);
            dataHandler.append(newRow);

            $('#data_select_driver').val(id).change();
        }
    });
}


function makeTextFile(text) {
    var textFile = null;
    var data = new Blob([text], { type: 'text/plain' });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
};

function GenerateFiles() {
    //alert("in GenerateFiles()");
    var strMaster = '';
    var strVender = '';
    var newline = String.fromCharCode(13, 10);

    strVender = 'Name of Vendor: XYZ GPS Co., Ltd' + newline + 'Name of Contact Personnel: Mr. ABC DEF' + newline +
                'Tel: +66(0)98 765 4321' + newline + 'Email: admin@gmail.com' + newline + 'Remarks: This is the complete list of trucks. It excludes scrapped vehicles.';

    $.ajax({
        type: "GET",
        data: "",
        url: "http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/getvehicledata.php",
        success: function (result) {

            var resultObj = JSON.parse(result);

            count = Object.keys(resultObj).length;
            var num = 0;

            $.each(resultObj, function (key, val) {
                strMaster += val.vender_id + ',' + val.unit_id + ',' + val.driver_id + ',' + val.province_code + ',' + val.vehicle_type + ',' + val.vehicle_chassis_no + newline;
            });//each
            var link = document.getElementById('venderdownloadlink');
            link.download = "VenderInfo.txt";
            link.href = makeTextFile(strVender);
            link.style.display = 'block';

            var slash = document.getElementById('slash');
            slash.style.display = 'block';

            var today = new Date();
            //alert(today);
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!

            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var today = yyyy + '-' + mm + '-' + dd;
            //alert(today);
            link = document.getElementById('masterdownloadlink');
            link.download = "master" + today + ".csv";
            link.href = makeTextFile(strMaster);
            link.style.display = 'block';

            var C2D = document.getElementById('C2D');
            C2D.style.display = 'block';
            //alert("Generate Files");
        }//success
    });//ajax
}

function marking(index) {

    if (mark != null)
        mark.setMap(null);

    var symbolOne = {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: '#F00',
        fillColor: '#F00',
        fillOpacity: 1,
        scale: 4
    };

    mark = new google.maps.Marker({
        position: { lat: parseFloat(pathCoords[index - 1].lat), lng: parseFloat(pathCoords[index - 1].lng) },
        icon: symbolOne,
        map: map
    });

    var latlng = new google.maps.LatLng(pathCoords[index - 1].lat, pathCoords[index - 1].lng);
    map.panTo(latlng);
}

function test(unit_id) {
    $('#map').css('width', '50%');
    $("#report").css("display", "");
    clearInterval(updateTableTimer);
    clearInterval(counterTimer);
    $("#gauge").empty();
    $("#gaugebelow").empty();
    $("#player").css("display", "");
    $("#languagebar").css("display", "");
    $("#records").css("display", "");
    $("#topborder").css("display", "");
    $("#datatable").css("display", "");
    $("#BGimageB").css("display", "none");
    $("#imageB").css("display", "none");
    $("#imageT").css("display", "none");
    $("#languagebar").empty();
    $("#records").empty();
    $("#dashboard_search").empty();
    setVehicleViewTable(unit_id);
    $("#unitID").val(unit_id);
    if (markers.length > 0) {
        deleteListeners();
        deleteMarkers();
    }
    var dataHandler = $("#load-data-report-here");
    dataHandler.empty();
    for (var num = 0 ; num < 8 ; num++) {
        if (num % 2 == 0) {
            newRow = $('<tr id="report_row' + num + '" style="vertical-align: top; background-color: #E1EEf4; word-wrap: break-word; overflow-wrap: break-word";>');
        }
        else {
            newRow = $('<tr id="report_row' + num + '"style="vertical-align: top; word-wrap: break-word; overflow-wrap: break-word";>');
        }
        newRow.html(
            '<td style="width:12%"><div id="status' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            '<td style="width:20%"><div id="datetime' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            '<td style="width:26%"><div id="location' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<br>&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            '<td style="width:12%"><div id="speeds' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            '<td style="width:10%"><div id="power' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            '<td style="width:10%"><div id="idles' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            '<td style="width:8%"><div id="view' + num + '" align="center">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '</div></td>' +
            "</tr>"
        );
        dataHandler.append(newRow);
    }
    searchFieldDashboard();
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

function statusStatusReport(index, status) {
    if (status == 0) status = 0;
    else if (status == 1) status = 1;
    else if (status == 2) status = 2;
    else if (status == 3) status = 3;
    $("#status" + index).empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#status' + index);
    });
}
function powerStatusReport(index, status) {
    if (status == 0) status = 3;
    else if (status == 1) status = 1;
    $("#power" + index).empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#power' + index);
    });
}

function statusStatusDashboard(index, status) {
    if (status == 0) status = 0;
    else if (status == 1) status = 1;
    else if (status == 2) status = 2;
    else if (status == 3) status = 3;
    $("#engine_status" + index).empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#engine_status' + index);
    });
}
function powerStatusDashboard(index, status) {
    if (status == 0) status = 3;
    else if (status == 1) status = 1;
    $("#ext_power_status" + index).empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#ext_power_status' + index);
    });
}

function cardreaderStatusVehicleInfo(status) {
    if (status == 0) status = 1;
    else if (status == 1) status = 3;
    $("#data_cardreader").empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#data_cardreader');
    });
}

function activeStatusVehicleInfo(status) {
    if (status == 1) status = 3;
    $("#data_active").empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#data_active');
    });
}

function activeStatusDriverInfo(status) {
    if (status == 1) status = 3;
    $("#data_active").empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#data_active');
    });
}
function activeStatus(index, status) {
    if (status == 1) status = 3;
    $("#active" + index).empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#active' + index);
    });
}

function statusStatus(index, status) {
    if (status == 1) status = 3;
    $("#status" + index).empty();
    $('<img src="' + imgStatusPaht + status + '.png' + '">').load(function () {
        $(this).width(15).height(15).appendTo('#status' + index);
    });
}

function languageStatus(index, status) {
    var lang = '';
    var active = '';
    if (index == 0 && status == 0) {
        status = 0;
        lang = 'thai';
        active = 'false';
    }
    else if (index == 0 && status == 1) {
        status = 1;
        lang = 'thai';
        active = 'true';
    }
    else if (index == 1 && status == 0) {
        status = 2;
        lang = 'eng';
        active = 'false';
    }
    else if (index == 1 && status == 1) {
        status = 3;
        lang = 'eng';
        active = 'true';
    }

    var dataHandler = $("#language" + index);
    dataHandler.empty();
    if (active == 'true')
        var newRow = $('<input type="image" onclick="changeLanguage(\'' + lang + '\',\'' + active + '\')" src="' + imgLanguagePaht + status + '.png' + '" width="30" height="30" style="float: right; border:0 none;">');
    else if (active == 'false')
        var newRow = $('<input type="image" disabled="disabled" onclick="changeLanguage(\'' + lang + '\',\'' + active + '\')" src="' + imgLanguagePaht + status + '.png' + '" width="30" height="30" style="float: right; border:0 none;">');
    dataHandler.append(newRow);
}

function changeLanguage(lang, active) {
    if (active == 'true') {
        if (lang == "thai") {
            setCookie("language", "thai", 30);
            setThaiVal();
            languageStatus(0, 0);
            languageStatus(1, 1);
            $('#data_province_code').empty().append(code2ProvinceThai(codeProvince));

            $('#driver_driver_lic_car_label').empty().append('ชนิด&nbsp;:&nbsp;');
            $('#select_driver_sex_code').empty().append(selectDriverSexThai());
        }
        else if (lang == "eng") {
            setCookie("language", "eng", 30);
            setEngVal();
            languageStatus(0, 1);
            languageStatus(1, 0);
            $('#data_province_code').empty().append(code2ProvinceEng(codeProvince));

            $('#driver_driver_lic_car_label').empty().append('Type&nbsp;:&nbsp;');
            $('#select_driver_sex_code').empty().append(selectDriverSexEng());
        }
        setLanguage();
        setDashboardLanguage();

        setVehicleAddFormLanguage();
        setVehicleInfoFormLanguage();
        setVehicleUpdateFormLanguage();
        setDriverAddFormLanguage();
        setDriverInfoFormLanguage();
        setDriverUpdateFormLanguage();

        setSelectDriverLicTypeLanguage();
        setSelectDriverLicType();

        setSelectDriverSexLanguage();
    }
}

function setSelectDriverSexLanguage() {
    var language = getCookie("language");
    //alert("language = " + language);
    if (language == "") {
        //alert("language != ");
        $('#select_driver_sex_code').empty().append(selectDriverSexThai());
        $('#driver_sex_label').empty().append('&nbsp;เพศ&nbsp;:&nbsp;');
    }
    else if (language == "thai") {
        //alert("language == thai");
        $('#select_driver_sex_code').empty().append(selectDriverSexThai());
        $('#driver_sex_label').empty().append('&nbsp;เพศ&nbsp;:&nbsp;');
    }
    else if (language == "eng") {
        //alert("language == eng");
        $('#select_driver_sex_code').empty().append(selectDriverSexEng());
        $('#driver_sex_label').empty().append('&nbsp;Sex&nbsp;:&nbsp;');
    }
}

function setDataProvinceLanguage() {
    var language = getCookie("language");
    //alert("language = " + language);
    if (language == "") {
        //alert("language != ");
        $('#data_province_code').empty().append(code2ProvinceThai(codeProvince));
    }
    else if (language == "thai") {
        //alert("language == thai");
        $('#data_province_code').empty().append(code2ProvinceThai(codeProvince));
    }
    else if (language == "eng") {
        //alert("language == eng");
        $('#data_province_code').empty().append(code2ProvinceEng(codeProvince));
    }
}

function setSelectProvinceLanguage() {
    var language = getCookie("language");
    //alert("language = " + language);
    if (language == "") {
        //alert("language != ");
        $('#select_province').empty().append(selectProvinceThai());
    }
    else if (language == "thai") {
        //alert("language == thai");
        $('#select_province').empty().append(selectProvinceThai());
    }
    else if (language == "eng") {
        //alert("language == eng");
        $('#select_province').empty().append(selectProvinceEng());
    }
}

function setSelectLicenceLanguage() {
    var language = getCookie("language");
    //alert("language = " + language);
    if (language == "") {
        //alert("language != ");
        $('#select_driver_lic_car_code').empty().append(selectDriverLicTranThai());
        $('#driver_driver_lic_car_label').empty().append('ชนิด&nbsp;:&nbsp;');
    }
    else if (language == "thai") {
        //alert("language == thai");
        $('#select_driver_lic_car_code').empty().append(selectDriverLicTranThai());
        $('#driver_driver_lic_car_label').empty().append('ชนิด&nbsp;:&nbsp;');
    }
    else if (language == "eng") {
        //alert("language == eng");
        $('#select_driver_lic_car_code').empty().append(selectDriverLicTranEng());
        $('#driver_driver_lic_car_label').empty().append('Type&nbsp;:&nbsp;');
    }
}

function checkLanguage() {
    var language = getCookie("language");
    //alert("language = " + language);
    if (language == "") {
        //alert("language != ");
        setCookie("language", "thai", 30);
        setThaiVal();
        languageStatus(0, 0);
        languageStatus(1, 1);
    }
    else if (language == "thai") {
        //alert("language == thai");
        setThaiVal();
        languageStatus(0, 0);
        languageStatus(1, 1);
    }
    else if (language == "eng") {
        //alert("language == eng");
        setEngVal();
        languageStatus(0, 1);
        languageStatus(1, 0);
    }
    setLanguage();
    setDashboardLanguage();

    setVehicleAddFormLanguage();
    setVehicleInfoFormLanguage();
    setVehicleUpdateFormLanguage();
    setDriverAddFormLanguage();
    setDriverInfoFormLanguage();
    setDriverUpdateFormLanguage();
}

function checkPass() {
    $.ajax({
        url: 'http://siamcomdeveloper.tk/wordpress/wp-content/themes/collect/js/functions.php',
        type: 'post',
        data: { "pass": 'test' },
        success: function (response) {
            alert(response);
        }
    });
}

function searchFieldDashboard() {

    $('#data_search_vehicle_id').val('');
    $('#data_search_vehicle_type').val('');

    var x = document.getElementById('search_vehicle_id');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('search_vehicle_type');
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }

    for (var i = 1; i < 12; i++) {
        var z = document.getElementById('search_space' + i);
        if (z.style.display === 'none') {
            z.style.display = 'block';
        }
        else {
            z.style.display = 'none';
        }
    }
    showRestoreTable();
}

function searchFieldVehicle() {

    $('#data_search_vehicle_id').val('');
    $('#data_search_vehicle_type').val('');

    var x = document.getElementById('search_vehicle_id');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('search_vehicle_type');
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }

    for (var i = 1; i < 6; i++) {
        var z = document.getElementById('search_space' + i);
        if (z.style.display === 'none') {
            z.style.display = 'block';
        }
        else {
            z.style.display = 'none';
        }
    }
    showVehicleTable();
}

function searchFieldDriver() {

    $('#data_search_driver_id').val('');
    $('#data_search_driver_name').val('');

    var x = document.getElementById('search_driver_id');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

    var y = document.getElementById('search_driver_name');
    if (y.style.display === 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }

    for (var i = 1; i < 7; i++) {
        var z = document.getElementById('search_space' + i);
        if (z.style.display === 'none') {
            z.style.display = 'block';
        }
        else {
            z.style.display = 'none';
        }
    }
    showDriverTable();
}

function setThaiVal() {
    ///////////////////////Dashboard Table Val
    dashboard_no = 'ลำดับ';
    dashboard_status = 'สถานะ';
    dashboard_vehicle_no = 'ทะเบียน';
    dashboard_type = 'ยี่ห้อ';
    dashboard_date = 'วัน';
    dashboard_time = 'เวลา';
    dashboard_location = 'ตำแหน่ง';
    dashboard_speed = 'ความเร็ว';
    dashboard_map = 'แผนที่';
    dashboard_power = 'พลังาน';
    dashboard_idle = 'นิ่ง';
    dashboard_driver = 'ผู้ขับขี่';
    ///////////////////////Vehicle Table Val
    head_no = 'ลำดับ';
    head_vehicle_no = 'ทะเบียนรถยนต์';
    head_vehicle_type = 'ยี่ห้อรถยนต์';
    head_driver_name = 'ชื่อผู้ขับขี่';
    head_active = 'สถานะ';
    head_action = 'การกระทำ';
    ///////////////////////Vehicle Add Val
    head_add_vehicle = 'เพิ่ม รถยนต์ในระบบ';
    add_vehicle_no = 'ทะเบียนรถยนต์';
    add_vehicle_type = 'ยี่ห้อรถยนต์';
    add_province = 'จังหวัด';
    add_vehicle_register = 'รหัสลงทะเบียนรถยนต์';
    add_unit_id = 'รหัสกล่องข้อมูลรถยนต์';
    add_chassis_no = 'รหัสตัวถังรถยนต์';
    add_unit_sim_no = 'หมายเลขซิมการ์ด';
    add_capacity = 'จำนวนที่นั่ง';
    add_driver = 'ผู้ขับขี่รถยนต์';
    add_card_reader_status = 'สถานะเครื่องอ่าน';
    add_active_status = 'สถานะรถยนต์';
    ///////////////////////Vehicle Info Val
    head_info_vehicle = 'รายละเอียดรถยนต์';
    info_vehicle_no = 'ทะเบียนรถยนต์';
    info_vehicle_type = 'ยี่ห้อรถยนต์';
    info_province = 'จังหวัด';
    info_vehicle_register = 'รหัสลงทะเบียนรถยนต์';
    info_unit_id = 'รหัสกล่องข้อมูลรถยนต์';
    info_chassis_no = 'รหัสตัวถังรถยนต์';
    info_unit_sim_no = 'หมายเลขซิมการ์ด';
    info_capacity = 'จำนวนที่นั่ง';
    info_driver = 'ผู้ขับขี่รถยนต์';
    info_card_reader_status = 'สถานะเครื่องอ่าน';
    info_active_status = 'สถานะรถยนต์';
    ///////////////////////Vehicle Update Val
    head_update_vehicle = 'อัพเดท รายละเอียดรถยนต์';
    update_vehicle_no = 'ทะเบียนรถยนต์';
    update_vehicle_type = 'ยี่ห้อรถยนต์';
    update_province = 'จังหวัด';
    update_vehicle_register = 'รหัสลงทะเบียนรถยนต์';
    update_unit_id = 'รหัสกล่องข้อมูลรถยนต์';
    update_chassis_no = 'รหัสตัวถังรถยนต์';
    update_unit_sim_no = 'หมายเลขซิมการ์ด';
    update_capacity = 'จำนวนที่นั่ง';
    update_driver = 'ผู้ขับขี่รถยนต์';
    update_card_reader_status = 'สถานะเครื่องอ่าน';
    update_active_status = 'สถานะรถยนต์';
    ///////////////////////Driver Table Val
    head_no = 'ลำดับ';
    head_company_name = 'ชื่อบริษัทผู้ขับขี่รถยนต์';
    head_driver_name = 'ชื่อผู้ขับขี่รถยนต์';
    head_licence_no = 'เลขที่ใบอนุญาตขับขี่รถยนต์';
    head_mobile_no = 'หมายเลขโทรศัพท์';
    head_status = 'สถานะ';
    head_action = 'การกระทำ';
    ///////////////////////Driver Add Val
    head_add_driver = 'เพิ่ม ผู้ขับขี่รถยนต์ในระบบ';
    add_driver_fullname = 'ชื่อ-นามสกุล ผู้ขับขี่รถยนต์';
    add_driver_name = 'ชื่อ:&nbsp;';
    add_driver_surname = '&nbsp;นามสกุล:&nbsp;';
    add_licence_no = 'เลขที่ใบอนุญาตขับขี่รถยนต์';
    add_licence_expiry = 'วันหมดอายุ';
    add_driver_address = 'ที่อยู่';
    add_mobile_no = 'หมายเลขโทรศัพท์';
    add_company_name = 'ชื่อบริษัทผู้ขับขี่รถยนต์';
    add_active_status = 'สถานะ';
    ///////////////////////Driver Info Val
    head_info_driver = 'รายละเอียดผู้ขับขี่รถยนต์';
    info_driver_name = 'ชื่อ';
    info_driver_surname = 'นามสกุล';
    info_licence_no = 'เลขที่ใบอนุญาตขับขี่รถยนต์';
    info_licence_expiry = 'วันหมดอายุ';
    info_driver_address = 'ที่อยู่';
    info_mobile_no = 'หมายเลขโทรศัพท์';
    info_company_name = 'ชื่อบริษัทผู้ขับขี่รถยนต์';
    info_active_status = 'สถานะ';
    ///////////////////////Driver Update Val
    head_update_driver = 'อัพเดท รายละเอียดผู้ขับขี่รถยนต์';
    update_driver_fullname = 'ชื่อ-นามสกุล ผู้ขับขี่รถยนต์';
    update_driver_name = 'ชื่อ:&nbsp;';
    update_driver_surname = '&nbsp;นามสกุล:&nbsp;';
    update_licence_no = 'เลขที่ใบอนุญาตขับขี่รถยนต์';
    update_licence_expiry = 'วันหมดอายุ';
    update_driver_address = 'ที่อยู่';
    update_mobile_no = 'หมายเลขโทรศัพท์';
    update_company_name = 'ชื่อบริษัทผู้ขับขี่รถยนต์';
    update_active_status = 'สถานะ';
}

function setEngVal() {
    //valLang = 'Eng';
    ///////////////////////Dashboard Table Val
    dashboard_no = 'No';
    dashboard_status = 'Status';
    dashboard_vehicle_no = 'Vehicle No';
    dashboard_type = 'Type';
    dashboard_date = 'Date';
    dashboard_time = 'Time';
    dashboard_location = 'Location';
    dashboard_speed = 'Speed';
    dashboard_map = 'Map';
    dashboard_power = 'Power';
    dashboard_idle = 'Idle';
    dashboard_driver = 'Driver';
    ///////////////////////Vehicle Table Val
    head_no = 'No';
    head_vehicle_no = 'Vehicle No';
    head_vehicle_type = 'Vehicle Type';
    head_driver_name = 'Driver Name';
    head_active = 'Active';
    head_action = 'Action';
    ///////////////////////Vehicle Add Val
    head_add_vehicle = 'Add Vehicle Information';
    add_vehicle_no = 'Vehicle No';
    add_vehicle_type = 'Vehicle Type';
    add_province = 'Province';
    add_vehicle_register = 'Vehicle Register Type';
    add_unit_id = 'Unit ID';
    add_chassis_no = 'Chassis No';
    add_unit_sim_no = 'Unit Sim No';
    add_capacity = 'Capacity';
    add_driver = 'Driver';
    add_card_reader_status = 'Card Reader Status';
    add_active_status = 'Active Status';
    ///////////////////////Vehicle Info Val
    head_info_vehicle = 'Vehicle Information';
    info_vehicle_no = 'Vehicle No';
    info_vehicle_type = 'Vehicle Type';
    info_province = 'Province';
    info_vehicle_register = 'Vehicle Register Type';
    info_unit_id = 'Unit ID';
    info_chassis_no = 'Chassis No';
    info_unit_sim_no = 'Unit Sim No';
    info_capacity = 'Capacity';
    info_driver = 'Driver';
    info_card_reader_status = 'Card Reader Status';
    info_active_status = 'Active Status';
    ///////////////////////Vehicle Update Val
    head_update_vehicle = 'Update Vehicle Information';
    update_vehicle_no = 'Vehicle No';
    update_vehicle_type = 'Vehicle Type';
    update_province = 'Province';
    update_vehicle_register = 'Vehicle Register Type';
    update_unit_id = 'Unit ID';
    update_chassis_no = 'Chassis No';
    update_unit_sim_no = 'Unit Sim No';
    update_capacity = 'Capacity';
    update_driver = 'Driver';
    update_card_reader_status = 'Card Reader Status';
    update_active_status = 'Active Status';
    ///////////////////////Driver Table Val
    head_no = 'No';
    head_company_name = 'Company Name';
    head_driver_name = 'Driver Name';
    head_licence_no = 'Licence No';
    head_mobile_no = 'Mobile No';
    head_status = 'Status';
    head_action = 'Action';
    ///////////////////////Driver Add Val
    head_add_driver = 'Add Driver Information';
    add_driver_fullname = 'Driver Name';
    add_driver_name = 'Name:&nbsp;';
    add_driver_surname = '&nbsp;Surname:&nbsp;';
    add_licence_no = 'Licence No';
    add_licence_expiry = 'Licence Expiry';
    add_driver_address = 'Driver Address';
    add_mobile_no = 'Mobile No';
    add_company_name = 'Company Name';
    add_active_status = 'Active Status';
    ///////////////////////Driver Info Val
    head_info_driver = 'Driver Information';
    info_driver_name = 'Driver Name';
    info_driver_surname = 'Driver Surname';
    info_licence_no = 'Licence No';
    info_licence_expiry = 'Licence Expiry';
    info_driver_address = 'Driver Address';
    info_mobile_no = 'Mobile No';
    info_company_name = 'Company Name';
    info_active_status = 'Active Status';
    ///////////////////////Driver Update Val
    head_update_driver = 'Update Driver Information';
    update_driver_fullname = 'Driver Name';
    update_driver_name = 'Name:&nbsp;';
    update_driver_surname = '&nbsp;Surname:&nbsp;';
    update_licence_no = 'Licence No';
    update_licence_expiry = 'Licence Expiry';
    update_driver_address = 'Driver Address';
    update_mobile_no = 'Mobile No';
    update_company_name = 'Company Name';
    update_active_status = 'Active Status';
}

function setLanguage() {
    ///////////////////////Vehicle Table Val
    $('#head_no').empty().append(head_no);
    $('#head_vehicle_no').empty().append(head_vehicle_no);
    $('#head_vehicle_type').empty().append(head_vehicle_type);
    $('#head_driver_name').empty().append(head_driver_name);
    $('#head_active').empty().append(head_active);
    $('#head_action').empty().append(head_action);
    ///////////////////////Driver Table Val
    $('#head_no').empty().append(head_no);
    $('#head_company_name').empty().append(head_company_name);
    $('#head_driver_name').empty().append(head_driver_name);
    $('#head_licence_no').empty().append(head_licence_no);
    $('#head_mobile_no').empty().append(head_mobile_no);
    $('#head_status').empty().append(head_status);
    $('#head_action').empty().append(head_action);
}

function setDashboardLanguage() {
    ///////////////////////Dashboard Table Val
    $('#dashboard_no').empty().append(dashboard_no);
    $('#dashboard_status').empty().append(dashboard_status);
    $('#dashboard_vehicle_no').empty().append(dashboard_vehicle_no);
    $('#dashboard_type').empty().append(dashboard_type);
    $('#dashboard_date').empty().append(dashboard_date);
    $('#dashboard_time').empty().append(dashboard_time);
    $('#dashboard_location').empty().append(dashboard_location);
    $('#dashboard_speed').empty().append(dashboard_speed);
    $('#dashboard_map').empty().append(dashboard_map);
    $('#dashboard_power').empty().append(dashboard_power);
    $('#dashboard_idle').empty().append(dashboard_idle);
    $('#dashboard_driver').empty().append(dashboard_driver);
}

function setVehicleAddFormLanguage() {
    ///////////////////////Vehicle Info Val
    $('#head_add_vehicle').empty().append(head_add_vehicle);
    $('#add_vehicle_no').empty().append(add_vehicle_no);
    $('#add_vehicle_type').empty().append(add_vehicle_type);
    $('#add_province').empty().append(add_province);
    $('#add_vehicle_register').empty().append(add_vehicle_register);
    $('#add_unit_id').empty().append(add_unit_id);
    $('#add_chassis_no').empty().append(add_chassis_no);
    $('#add_unit_sim_no').empty().append(add_unit_sim_no);
    $('#add_capacity').empty().append(add_capacity);
    $('#add_driver').empty().append(add_driver);
    $('#add_card_reader_status').empty().append(add_card_reader_status);
    $('#add_active_status').empty().append(add_active_status);
}

function setVehicleInfoFormLanguage() {
    ///////////////////////Vehicle Info Val
    $('#head_info_vehicle').empty().append(head_info_vehicle);
    $('#info_vehicle_no').empty().append(info_vehicle_no);
    $('#info_vehicle_type').empty().append(info_vehicle_type);
    $('#info_province').empty().append(info_province);
    $('#info_vehicle_register').empty().append(info_vehicle_register);
    $('#info_unit_id').empty().append(info_unit_id);
    $('#info_chassis_no').empty().append(info_chassis_no);
    $('#info_unit_sim_no').empty().append(info_unit_sim_no);
    $('#info_capacity').empty().append(info_capacity);
    $('#info_driver').empty().append(info_driver);
    $('#info_card_reader_status').empty().append(info_card_reader_status);
    $('#info_active_status').empty().append(info_active_status);
}

function setVehicleUpdateFormLanguage() {
    ///////////////////////Vehicle Update Val
    $('#head_update_vehicle').empty().append(head_update_vehicle);
    $('#update_vehicle_no').empty().append(update_vehicle_no);
    $('#update_vehicle_type').empty().append(update_vehicle_type);
    $('#update_province').empty().append(update_province);
    $('#update_vehicle_register').empty().append(update_vehicle_register);
    $('#update_unit_id').empty().append(update_unit_id);
    $('#update_chassis_no').empty().append(update_chassis_no);
    $('#update_unit_sim_no').empty().append(update_unit_sim_no);
    $('#update_capacity').empty().append(update_capacity);
    $('#update_driver').empty().append(update_driver);
    $('#update_card_reader_status').empty().append(update_card_reader_status);
    $('#update_active_status').empty().append(update_active_status);
}

function setDriverAddFormLanguage() {
    ///////////////////////Driver Info Val
    $('#head_add_driver').empty().append(head_add_driver);
    $('#add_driver_fullname').empty().append(add_driver_fullname);
    $('#add_driver_name').empty().append(add_driver_name);
    $('#add_driver_surname').empty().append(add_driver_surname);
    $('#add_licence_no').empty().append(add_licence_no);
    $('#add_licence_expiry').empty().append(add_licence_expiry);
    $('#add_driver_address').empty().append(add_driver_address);
    $('#add_mobile_no').empty().append(add_mobile_no);
    $('#add_company_name').empty().append(add_company_name);
    $('#add_active_status').empty().append(add_active_status);
}

function setDriverInfoFormLanguage() {
    ///////////////////////Driver Info Val
    $('#head_info_driver').empty().append(head_info_driver);
    $('#info_driver_name').empty().append(info_driver_name);
    $('#info_driver_surname').empty().append(info_driver_surname);
    $('#info_licence_no').empty().append(info_licence_no);
    $('#info_licence_expiry').empty().append(info_licence_expiry);
    $('#info_driver_address').empty().append(info_driver_address);
    $('#info_mobile_no').empty().append(info_mobile_no);
    $('#info_company_name').empty().append(info_company_name);
    $('#info_active_status').empty().append(info_active_status);
}

function setDriverUpdateFormLanguage() {
    ///////////////////////Driver Info Val
    $('#head_update_driver').empty().append(head_update_driver);
    $('#update_driver_fullname').empty().append(update_driver_fullname);
    $('#update_driver_name').empty().append(update_driver_name);
    $('#update_driver_surname').empty().append(update_driver_surname);
    $('#update_licence_no').empty().append(update_licence_no);
    $('#update_licence_expiry').empty().append(update_licence_expiry);
    $('#update_driver_address').empty().append(update_driver_address);
    $('#update_mobile_no').empty().append(update_mobile_no);
    $('#update_company_name').empty().append(update_company_name);
    $('#update_active_status').empty().append(update_active_status);
}

function selectDriverSexThai() {
    var strDriverSex = '<select id="data_select_driver_sex_code">' +
      '<option value="1">ชาย</option>' +
      '<option value="2">หญิง</option>' +
      '</select>';
    return strDriverSex;
}

function selectDriverSexEng() {
    var strDriverSex = '<select id="data_select_driver_sex_code">' +
      '<option value="1">Male</option>' +
      '<option value="2">Female</option>' +
      '</select>';
    return strDriverSex;
}

function selectDriverLicTranThai() {
    var strDriverLicTran = '<select id="data_select_driver_lic_car_code">' +
      '<option value="11">ผู้ขับรถส่วนบุคคลชนิดที่ 1</option>' +
      '<option value="12">ผู้ขับรถส่วนบุคคลชนิดที่ 2</option>' +
      '<option value="13">ผู้ขับรถส่วนบุคคลชนิดที่ 3</option>' +
      '<option value="14">ผู้ขับรถส่วนบุคคลชนิดที่ 4</option>' +
      '<option value="21">ผู้ขับรถทุกประเภทชนิดที่ 1</option>' +
      '<option value="22">ผู้ขับรถทุกประเภทชนิดที่ 2</option>' +
      '<option value="23">ผู้ขับรถทุกประเภทชนิดที่ 3</option>' +
      '<option value="24">ผู้ขับรถทุกประเภทชนิดที่ 4</option>' +
      '<option value="50">ผู้บริการ</option>' +
      '<option value="40">นายตรวจ</option>' +
      '<option value="30">ผู้เก็บค่าโดยสาร</option>' +
      '</select>';
    return strDriverLicTran;
}

function selectDriverLicTranEng() {
    var strDriverLicTran = '<select id="data_select_driver_lic_car_code">' +
      '<option value="11">Private Automobile Driver(Type 1)</option>' +
      '<option value="12">Private Automobile Driver(Type 2)</option>' +
      '<option value="13">Private Automobile Driver(Type 3)</option>' +
      '<option value="14">Private Automobile Driver(Type 4)</option>' +
      '<option value="21">All Type Driver(Type 1)</option>' +
      '<option value="22">All Type Driver(Type 2)</option>' +
      '<option value="23">All Type Driver(Type 3)</option>' +
      '<option value="24">All Type Driver(Type 4)</option>' +
      '<option value="50">Service Person</option>' +
      '<option value="40">Inspector</option>' +
      '<option value="30">Fare Official</option>' +
      '</select>';
    return strDriverLicTran;
}

function selectDriverLicCarThai() {
    var strDriverLicCar = '<select id="data_select_driver_lic_car_code">' +
      '<option value="1100">รถยนต์ส่วนบุคคล (ชั่วคราว)</option>' +
      '<option value="1200">รถยนต์สามล้อส่วนบุคคล (ชั่วคราว)</option>' +
      '<option value="1300">รถจักรยานยนต์ส่วนบุคคล (ชั่วคราว)</option>' +
      '<option value="2100">รถยนต์ส่วนบุคคล (1 ปี)</option>' +
      '<option value="2200">รถยนต์สามล้อส่วนบุคคล (1 ปี)</option>' +
      '<option value="2300">รถจักรยานยนต์ (1 ปี)</option>' +
      '<option value="2400">รถยนต์ส่วนบุคคล</option>' +
      '<option value="2500">รถยนต์สามล้อส่วนบุคคล</option>' +
      '<option value="2600">รถจักรยานยนต์ส่วนบุคคล</option>' +
      '<option value="3100">รถยนต์ส่วนบุคคล (ตลอดชีพ)</option>' +
      '<option value="3200">รถยนต์สามล้อส่วนบุคคล (ตลอดชีพ)</option>' +
      '<option value="3300">รถจักรยานยนต์ส่วนบุคคล (ตลอดชีพ)</option>' +
      '<option value="4100">รถยนต์สาธรณะ</option>' +
      '<option value="4200">รถยนต์สามล้อสาธรณะ</option>' +
      '<option value="4300">รถจักรยานยนต์สาธรณะ</option>' +
      '<option value="5100">รถระหว่างประเทศ</option>' +
      '<option value="6100">รถบดถนน</option>' +
      '<option value="6200">รถแทรกเตอร์</option>' +
      '<option value="6300">รถใช้งานเกษตรกรรม</option>' +
      '<option value="7100">รถอื่นๆ</option>' +
      '<option value="8100">รถจักรยานสองล้อ (ตลอดชีพ)</option>' +
      '<option value="8200">รถไถนา</option>' +
      '</select>';
    return strDriverLicCar;
}

function selectDriverLicCarEng() {
    var strDriverLicCar = '<select id="data_select_driver_lic_car_code">' +
      '<option value="1100">Private Automobile(Temp)</option>' +
      '<option value="1200">Private Motor Tricycle(Temp)</option>' +
      '<option value="1300">Private Motorcycle(Temp)</option>' +
      '<option value="2100">Private Automobile(One year)</option>' +
      '<option value="2200">Private Motor Tricycle(One year)</option>' +
      '<option value="2300">Motorcycle(One year)</option>' +
      '<option value="2400">Private Automobile(Five year)</option>' +
      '<option value="2500">Private Motor Tricycle(Five year)</option>' +
      '<option value="2600">Private Motorcycle(Five year)</option>' +
      '<option value="3100">Private Automobile(Life)</option>' +
      '<option value="3200">Private Motor Tricycle(Life)</option>' +
      '<option value="3300">Motorcycle(Life)</option>' +
      '<option value="4100">Public Automobile</option>' +
      '<option value="4200">Public Motor Tricycle</option>' +
      '<option value="4300">Public Motorcycle</option>' +
      '<option value="5100">International Driving Permit</option>' +
      '<option value="6100">Road Roller</option>' +
      '<option value="6200">Tractor</option>' +
      '<option value="6300">Farm\'s Vehicle</option>' +
      '<option value="7100">Other</option>' +
      '<option value="8100">Bicycle(Life)</option>' +
      '<option value="8200">car</option>' +
      '</select>';
    return strDriverLicCar;
}

function code2ProvinceThai(code) {
    var province;
    if (code == '001') province = 'กรุงเทพมหานคร';
    else if (code == '100') province = 'ชัยนาท';
    else if (code == '101') province = 'สิงห์บุรี';
    else if (code == '102') province = 'ลพบุรี';
    else if (code == '103') province = 'อ่างทอง';
    else if (code == '104') province = 'สระบุรี';
    else if (code == '105') province = 'พระนครศรีอยุธยา';
    else if (code == '106') province = 'ปทุมธานี';
    else if (code == '107') province = 'นนทบุรี';
    else if (code == '108') province = 'สมุทรปราการ';
    else if (code == '200') province = 'นครนายก';
    else if (code == '201') province = 'ปราจีนบุรี';
    else if (code == '202') province = 'ฉะเชิงเทรา';
    else if (code == '203') province = 'ชลบุรี';
    else if (code == '204') province = 'ระยอง';
    else if (code == '205') province = 'จันทบุรี';
    else if (code == '206') province = 'ตราด';
    else if (code == '207') province = 'สระแก้ว';
    else if (code == '300') province = 'ชัยภูมิ';
    else if (code == '301') province = 'ยโสธร';
    else if (code == '302') province = 'อุบลราชธานี';
    else if (code == '303') province = 'ศรีสะเกษ';
    else if (code == '304') province = 'บุรีรัมย์';
    else if (code == '305') province = 'นครราชสีมา';
    else if (code == '306') province = 'สุรินทร์';
    else if (code == '307') province = 'อำนาจเจริญ';
    else if (code == '308') province = 'หนองบัวลำภู';
    else if (code == '309') province = 'บึงกาฬ';
    else if (code == '400') province = 'หนองคาย';
    else if (code == '401') province = 'เลย';
    else if (code == '402') province = 'อุดรธานี';
    else if (code == '403') province = 'นครพนม';
    else if (code == '404') province = 'สกลนคร';
    else if (code == '405') province = 'ขอนแก่น';
    else if (code == '406') province = 'กาฬสินธุ์';
    else if (code == '407') province = 'มหาสารคาม';
    else if (code == '408') province = 'ร้อยเอ็ด';
    else if (code == '409') province = 'มุกดาหาร';
    else if (code == '500') province = 'เชียงราย';
    else if (code == '501') province = 'แม่ฮ่องสอน';
    else if (code == '502') province = 'เชียงใหม่';
    else if (code == '503') province = 'พะเยา';
    else if (code == '504') province = 'น่าน';
    else if (code == '505') province = 'ลำพูน';
    else if (code == '506') province = 'ลำปาง';
    else if (code == '507') province = 'แพร่';
    else if (code == '600') province = 'อุตรดิตถ์';
    else if (code == '601') province = 'สุโขทัย';
    else if (code == '602') province = 'ตาก';
    else if (code == '603') province = 'พิษณุโลก';
    else if (code == '604') province = 'กำแพงเพชร';
    else if (code == '605') province = 'พิจิตร';
    else if (code == '606') province = 'เพชรบูรณ์';
    else if (code == '607') province = 'นครสวรรค์';
    else if (code == '608') province = 'อุทัยธานี';
    else if (code == '700') province = 'สุพรรณบุรี';
    else if (code == '701') province = 'กาญจนบุรี';
    else if (code == '702') province = 'นครปฐม';
    else if (code == '703') province = 'ราชบุรี';
    else if (code == '704') province = 'สมุทรสาคร';
    else if (code == '705') province = 'สมุทรสงคราม';
    else if (code == '706') province = 'เพชรบุรี';
    else if (code == '707') province = 'ประจวบคีรีขันธ์';
    else if (code == '800') province = 'ชุมพร';
    else if (code == '801') province = 'ระนอง';
    else if (code == '802') province = 'สุราษฎร์ธานี';
    else if (code == '803') province = 'พังงา';
    else if (code == '804') province = 'นครศรีธรรมราช';
    else if (code == '805') province = 'กระบี่';
    else if (code == '806') province = 'ภูเก็ต';
    else if (code == '900') province = 'พัทลุง';
    else if (code == '901') province = 'ตรัง';
    else if (code == '902') province = 'สงขลา';
    else if (code == '903') province = 'สตูล';
    else if (code == '904') province = 'ปัตตานี';
    else if (code == '905') province = 'ยะลา';
    else if (code == '906') province = 'นราธิวาส';
    else if (code == '000') province = 'ไม่ระบุจังหวัด';
    else {
        province = 'Not found';
    }
    return province;
}

function code2ProvinceEng(code) {
    var province;
    if (code == '001') province = 'Bangkok';
    else if (code == '100') province = 'Chai Nat';
    else if (code == '101') province = 'Sing Buri';
    else if (code == '102') province = 'Lop Buri';
    else if (code == '103') province = 'Ang Thong';
    else if (code == '104') province = 'Saraburi';
    else if (code == '105') province = 'Ayutthaya';
    else if (code == '106') province = 'Pathum Thani';
    else if (code == '107') province = 'Nonthaburi';
    else if (code == '108') province = 'Samut Prakan';
    else if (code == '200') province = 'Nakhon Nayok';
    else if (code == '201') province = 'Prachin Buri';
    else if (code == '202') province = 'Chachoengsao';
    else if (code == '203') province = 'Chon Buri';
    else if (code == '204') province = 'Rayong';
    else if (code == '205') province = 'Chanthaburi';
    else if (code == '206') province = 'Trat';
    else if (code == '207') province = 'Sa Kaeo';
    else if (code == '300') province = 'Chaiyaphum';
    else if (code == '301') province = 'Yasothon';
    else if (code == '302') province = 'Ubon Ratchathani';
    else if (code == '303') province = 'Si Sa Ket';
    else if (code == '304') province = 'Buri Ram';
    else if (code == '305') province = 'Nakhon Ratchasima';
    else if (code == '306') province = 'Surin';
    else if (code == '307') province = 'Amnat Charoen';
    else if (code == '308') province = 'Nong Bua Lam Phu';
    else if (code == '309') province = 'Bueng Kan';
    else if (code == '400') province = 'Nong Khai';
    else if (code == '401') province = 'Loei';
    else if (code == '402') province = 'Udon Thani';
    else if (code == '403') province = 'Nakhon Phanom';
    else if (code == '404') province = 'Sakon Nakhon';
    else if (code == '405') province = 'Khon Kaen';
    else if (code == '406') province = 'Kalasin';
    else if (code == '407') province = 'Maha Sarakham';
    else if (code == '408') province = 'Roi Et';
    else if (code == '409') province = 'Mukdahan';
    else if (code == '500') province = 'Chiang Rai';
    else if (code == '501') province = 'Mae Hong Son';
    else if (code == '502') province = 'Chiang Mai';
    else if (code == '503') province = 'Phayao';
    else if (code == '504') province = 'Nan';
    else if (code == '505') province = 'Lamphun';
    else if (code == '506') province = 'Lampang';
    else if (code == '507') province = 'Phrae';
    else if (code == '600') province = 'Uttaradit';
    else if (code == '601') province = 'Sukhothai';
    else if (code == '602') province = 'Tak';
    else if (code == '603') province = 'Phitsanulok';
    else if (code == '604') province = 'Kamphaeng Phet';
    else if (code == '605') province = 'Phichit';
    else if (code == '606') province = 'Phetchabun';
    else if (code == '607') province = 'Nakhon Sawan';
    else if (code == '608') province = 'Uthai Thani';
    else if (code == '700') province = 'Suphan Buri';
    else if (code == '701') province = 'Kanchanaburi';
    else if (code == '702') province = 'Nakhon Pathom';
    else if (code == '703') province = 'Ratchaburi';
    else if (code == '704') province = 'Samut Sakhon';
    else if (code == '705') province = 'Samut Songkhram';
    else if (code == '706') province = 'Phetchaburi';
    else if (code == '707') province = 'Prachuap Khiri Khan';
    else if (code == '800') province = 'Chumphon';
    else if (code == '801') province = 'Ranong';
    else if (code == '802') province = 'Surat Thani';
    else if (code == '803') province = 'Phangnga';
    else if (code == '804') province = 'Nakhon Si Thammarat';
    else if (code == '805') province = 'Krabi';
    else if (code == '806') province = 'Phuket';
    else if (code == '900') province = 'Phatthalung';
    else if (code == '901') province = 'Trang';
    else if (code == '902') province = 'Songkhla';
    else if (code == '903') province = 'Satun';
    else if (code == '904') province = 'Pattani';
    else if (code == '905') province = 'Yala';
    else if (code == '906') province = 'Narathiwat';
    else if (code == '000') province = 'Other';
    else {
        province = 'Not found';
    }
    return province;
}

function selectProvinceEng() {
    var strProvince = '<select id="data_province_code">' +
      '<option value="001">Bangkok</option>' +
      '<option value="805">Krabi</option>' +
      '<option value="701">Kanchanaburi</option>' +
      '<option value="406">Kalasin</option>' +
      '<option value="604">Kamphaeng Phet</option>' +
      '<option value="405">Khon Kaen</option>' +
      '<option value="205">Chanthaburi</option>' +
      '<option value="202">Chachoengsao </option>' +
      '<option value="100">Chai Nat</option>' +
      '<option value="300">Chaiyaphum</option>' +
      '<option value="800">Chumphon</option>' +
      '<option value="203">Chon Buri</option>' +
      '<option value="502">Chiang Mai</option>' +
      '<option value="500">Chiang Rai</option>' +
      '<option value="901">Trang</option>' +
      '<option value="206">Trat</option>' +
      '<option value="602">Tak</option>' +
      '<option value="200">Nakhon Nayok</option>' +
      '<option value="702">Nakhon Pathom</option>' +
      '<option value="403">Nakhon Phanom</option>' +
      '<option value="305">Nakhon Ratchasima</option>' +
      '<option value="804">Nakhon Si Thammarat</option>' +
      '<option value="607">Nakhon Sawan</option>' +
      '<option value="906">Narathiwat</option>' +
      '<option value="504">Nan</option>' +
      '<option value="107">Nonthaburi</option>' +
      '<option value="309">Bueng Kan</option>' +
      '<option value="304">บุรีรัมย์</option>' +
      '<option value="707">Buri Ram</option>' +
      '<option value="106">Pathum Thani</option>' +
      '<option value="201">Prachin Buri</option>' +
      '<option value="904">Pattani</option>' +
      '<option value="503">Phayao</option>' +
      '<option value="105">Ayutthaya</option>' +
      '<option value="803">Phangnga</option>' +
      '<option value="605">Phichit </option>' +
      '<option value="603">Phitsanulok</option>' +
      '<option value="706">Phetchaburi</option>' +
      '<option value="606">Phetchabun</option>' +
      '<option value="507">Phrae</option>' +
      '<option value="900">Phatthalung</option>' +
      '<option value="806">Phuket</option>' +
      '<option value="407">Maha Sarakham</option>' +
      '<option value="409">Mukdahan</option>' +
      '<option value="501">Mae Hong Son</option>' +
      '<option value="301">Yasothon</option>' +
      '<option value="905">Yala</option>' +
      '<option value="408">Roi Et</option>' +
      '<option value="801">Ranong</option>' +
      '<option value="204">Rayong</option>' +
      '<option value="703">Ratchaburi</option>' +
      '<option value="102">Lop Buri</option>' +
      '<option value="506">Lampang</option>' +
      '<option value="505">Lamphun</option>' +
      '<option value="401">Loei</option>' +
      '<option value="303">Si Sa Ket</option>' +
      '<option value="404">Sakon Nakhon</option>' +
      '<option value="902">Songkhla</option>' +
      '<option value="704">Samut Sakhon</option>' +
      '<option value="108">Samut Prakan</option>' +
      '<option value="705">Samut Songkhram</option>' +
      '<option value="207">Sa Kaeo</option>' +
      '<option value="104">Saraburi</option>' +
      '<option value="101">Sing Buri</option>' +
      '<option value="601">Sukhothai </option>' +
      '<option value="700">Suphan Buri</option>' +
      '<option value="802">Surat Thani</option>' +
      '<option value="306">Surin</option>' +
      '<option value="903">Satun</option>' +
      '<option value="400">Nong Khai</option>' +
      '<option value="308">Nong Bua Lam Phu</option>' +
      '<option value="307">Amnat Charoen</option>' +
      '<option value="402">Udon Thani</option>' +
      '<option value="600">Uttaradit</option>' +
      '<option value="608">Uthai Thani</option>' +
      '<option value="302">Ubon Ratchathani</option>' +
      '<option value="103">Ang Thong </option>' +
      '<option value="000">Other</option>' +
      '</select>';
    return strProvince;
}

function selectProvinceThai() {
    var strProvince = '<select id="data_province_code">' +
      '<option value="001">กรุงเทพมหานคร</option>' +
      '<option value="805">กระบี่ </option>' +
      '<option value="701">กาญจนบุรี </option>' +
      '<option value="406">กาฬสินธุ์ </option>' +
      '<option value="604">กำแพงเพชร </option>' +
      '<option value="405">ขอนแก่น</option>' +
      '<option value="205">จันทบุรี</option>' +
      '<option value="202">ฉะเชิงเทรา </option>' +
      '<option value="100">ชัยนาท </option>' +
      '<option value="300">ชัยภูมิ </option>' +
      '<option value="800">ชุมพร </option>' +
      '<option value="203">ชลบุรี </option>' +
      '<option value="502">เชียงใหม่ </option>' +
      '<option value="500">เชียงราย </option>' +
      '<option value="901">ตรัง </option>' +
      '<option value="206">ตราด </option>' +
      '<option value="602">ตาก </option>' +
      '<option value="200">นครนายก </option>' +
      '<option value="702">นครปฐม </option>' +
      '<option value="403">นครพนม </option>' +
      '<option value="305">นครราชสีมา </option>' +
      '<option value="804">นครศรีธรรมราช </option>' +
      '<option value="607">นครสวรรค์ </option>' +
      '<option value="906">นราธิวาส </option>' +
      '<option value="504">น่าน </option>' +
      '<option value="107">นนทบุรี </option>' +
      '<option value="309">บึงกาฬ</option>' +
      '<option value="304">บุรีรัมย์</option>' +
      '<option value="707">ประจวบคีรีขันธ์ </option>' +
      '<option value="106">ปทุมธานี </option>' +
      '<option value="201">ปราจีนบุรี </option>' +
      '<option value="904">ปัตตานี </option>' +
      '<option value="503">พะเยา </option>' +
      '<option value="105">พระนครศรีอยุธยา </option>' +
      '<option value="803">พังงา </option>' +
      '<option value="605">พิจิตร </option>' +
      '<option value="603">พิษณุโลก </option>' +
      '<option value="706">เพชรบุรี </option>' +
      '<option value="606">เพชรบูรณ์ </option>' +
      '<option value="507">แพร่ </option>' +
      '<option value="900">พัทลุง </option>' +
      '<option value="806">ภูเก็ต </option>' +
      '<option value="407">มหาสารคาม </option>' +
      '<option value="409">มุกดาหาร </option>' +
      '<option value="501">แม่ฮ่องสอน </option>' +
      '<option value="301">ยโสธร </option>' +
      '<option value="905">ยะลา </option>' +
      '<option value="408">ร้อยเอ็ด </option>' +
      '<option value="801">ระนอง </option>' +
      '<option value="204">ระยอง </option>' +
      '<option value="703">ราชบุรี</option>' +
      '<option value="102">ลพบุรี </option>' +
      '<option value="506">ลำปาง </option>' +
      '<option value="505">ลำพูน </option>' +
      '<option value="401">เลย </option>' +
      '<option value="303">ศรีสะเกษ</option>' +
      '<option value="404">สกลนคร</option>' +
      '<option value="902">สงขลา </option>' +
      '<option value="704">สมุทรสาคร </option>' +
      '<option value="108">สมุทรปราการ </option>' +
      '<option value="705">สมุทรสงคราม </option>' +
      '<option value="207">สระแก้ว </option>' +
      '<option value="104">สระบุรี </option>' +
      '<option value="101">สิงห์บุรี </option>' +
      '<option value="601">สุโขทัย </option>' +
      '<option value="700">สุพรรณบุรี </option>' +
      '<option value="802">สุราษฎร์ธานี </option>' +
      '<option value="306">สุรินทร์ </option>' +
      '<option value="903">สตูล </option>' +
      '<option value="400">หนองคาย </option>' +
      '<option value="308">หนองบัวลำภู </option>' +
      '<option value="307">อำนาจเจริญ </option>' +
      '<option value="402">อุดรธานี </option>' +
      '<option value="600">อุตรดิตถ์ </option>' +
      '<option value="608">อุทัยธานี </option>' +
      '<option value="302">อุบลราชธานี</option>' +
      '<option value="103">อ่างทอง </option>' +
      '<option value="000">อื่นๆ</option>' +
      '</select>';
    return strProvince;
}

function _time(id) {
    date = new Date;
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = '' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    setTimeout('_time("' + id + '");', '1000');
    return true;
}

function _date(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    result = '' + days[day] + ' ' + months[month] + ' ' + d + ' ' + year;
    document.getElementById(id).innerHTML = result;
    setTimeout('_date("' + id + '");', '1000');
    return true;
}

function FtoC(temp) { return Math.round((temp - 32) / (9 / 5)); }

function getWeatherDemo() {
    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
          'where woeid in (select woeid from geo.places(1) where text="Bangkok")&format=json', function (data) {
              console.log(data);
              /*alert("The temperatute in London is " +
                  data.query.results.channel.item.condition.temp +
                  data.query.results.channel.units.temperature
              );*/
              $('#temp').empty().append(FtoC(data.query.results.channel.item.condition.temp) + '°C');//data.query.results.channel.units.temperature
              $('#templocation').empty().append("Location : Bangkok");
          });
}