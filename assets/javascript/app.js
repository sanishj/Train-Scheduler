$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBxMFppZPw_ZHM_9Dh-VJvhkMrezTShtsM",
        authDomain: "traintrkr.firebaseapp.com",
        databaseURL: "https://traintrkr.firebaseio.com",
        projectId: "traintrkr",
        storageBucket: "traintrkr.appspot.com",
        messagingSenderId: "1087400696597"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    // Button event controller
    $("#js-AddTrain").on("click", function(event) {
        // prevent form from submitting
        event.preventDefault();
        var trainName = $("#js-TrainName").val().trim();
        var destination = $("#js-Dest").val().trim();
        var firstTrain = $("#js-FirstTrain").val().trim();
        var frequency = $("#js-Frequency").val().trim();
        
        var newTrain = {
            train: trainName,
            destination : destination,
            firstTrain : firstTrain,
            frequency : frequency
        };

        console.log(newTrain);
        


        database.ref().push({
            TrainName: trainName,
            TrainDestination: destination,
            FirstTrain: startDate,
            TrainFrequency: monthlyRate
        });

    var name = "";
    var role = "";
    var startDate = "";
    var monthsWorked = "";
    var monthlyRate = "";
    var totBilled = "";

        /*var dynamicEmpRow = $("<tbody>" + "<tr>" + "<td>" + name +"</td>" + "</tr>" + "</tbody>");
        var dynamicRoleRow = $("<tbody>" + "<tr>" + "<td>" + role +"</td>" + "</tr>" + "</tbody>");
        var dynamicDateRow = $("<tbody>" + "<tr>" + "<td>" + startDate +"</td>" + "</tr>" + "</tbody>");
        var dynamicRateRow = $("<tbody>" + "<tr>" + "<td>" + monthlyRate +"</td>" + "</tr>" + "</tbody>");*/
        var dynamicRow = $("<tbody>" + "<tr>" + "<td>" + trainName + "</td>" + "<td>" + destination + "</td>" + "<td>" + firstTrain + "</td>" + monthsWorked + "</td>" + "<td>" + frequency + "</td>" +
            "<td>" + totBilled + "</td>" + "</tr>" + "</tbody>");
        /*$("#emp").append(dynamicEmpRow);
        $("#roleId").append(dynamicRoleRow);
        $("#dateId").append(dynamicDateRow);
        $("#rateId").append(dynamicRateRow);*/
        $("#tableHead").append(dynamicRow);
        // $('#tableHead > tbody:last-child').append("<tr>" + name + "</tr>" + "<tr>" + role + "</tr>" + "<tr>" + startDate + "</tr>" + "<tr>" + monthlyRate + "</tr>");

    });

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val().trainName);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().firstTrain);
        console.log(childSnapshot.val().frequency);
    });

});
