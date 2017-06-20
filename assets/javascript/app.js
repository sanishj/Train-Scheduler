$(document).ready(function() {


    // <script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAavjGkRY_U4Q2oqFggoJJ00S6wixmfMd8",
        authDomain: "employee-66675.firebaseapp.com",
        databaseURL: "https://employee-66675.firebaseio.com",
        projectId: "employee-66675",
        storageBucket: "",
        messagingSenderId: "885238252860"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var name = "";
    var role = "";
    var startDate = "";
    var monthsWorked = "";
    var monthlyRate = "";
    var totBilled = "";

    $("#addEmp").on("click", function(event) {
        // prevent form from submitting
        event.preventDefault();
        name = $("#empName").val().trim();
        role = $("#role").val().trim();
        startDate = $("#date").val().trim();
        monthlyRate = $("#rate").val().trim();
        console.log(name);
        database.ref().push({
            employee: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate
        });
        /*var dynamicEmpRow = $("<tbody>" + "<tr>" + "<td>" + name +"</td>" + "</tr>" + "</tbody>");
        var dynamicRoleRow = $("<tbody>" + "<tr>" + "<td>" + role +"</td>" + "</tr>" + "</tbody>");
        var dynamicDateRow = $("<tbody>" + "<tr>" + "<td>" + startDate +"</td>" + "</tr>" + "</tbody>");
        var dynamicRateRow = $("<tbody>" + "<tr>" + "<td>" + monthlyRate +"</td>" + "</tr>" + "</tbody>");*/
        var dynamicRow = $("<tbody>" + "<tr>" + "<td>" + name +"</td>" + "<td>" + role +"</td>" 
            + "<td>" + startDate +"</td>" + monthsWorked +"</td>" + "<td>" + monthlyRate +"</td>" + 
            "<td>" + totBilled +"</td>"+ "</tr>" + "</tbody>");
        /*$("#emp").append(dynamicEmpRow);
        $("#roleId").append(dynamicRoleRow);
        $("#dateId").append(dynamicDateRow);
        $("#rateId").append(dynamicRateRow);*/
        $("#tableHead").append(dynamicRow);
        // $('#tableHead > tbody:last-child').append("<tr>" + name + "</tr>" + "<tr>" + role + "</tr>" + "<tr>" + startDate + "</tr>" + "<tr>" + monthlyRate + "</tr>");

    });

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().monthlyRate);
    });

});
