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
        var frequency = $("#js-Frequency").val().trim();
        var firstTrain = $("#js-FirstTrain").val().trim();

        var newTrain = {
            train: trainName,
            destination: destination,
            frequency: frequency,
            firstTrain: firstTrain
        };

        console.log(newTrain);

        database.ref().push(newTrain);

        $("#js-TrainName").val("");
        $("#js-Dest").val("");
        $("#js-Frequency").val("");
        $("#js-FirstTrain").val("");
    });

    database.ref().on("child_added", function(childSnapshot, prevChildKey) {

        console.log(childSnapshot.val());

        // Store everything into a variable.
        var trainName = childSnapshot.val().train;
        var destination = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().firstTrain;
        var frequency = childSnapshot.val().frequency;

        var sysDateTime = moment().format('MM/DD/YYYY HH:mm');
        console.log(sysDateTime);
        console.log(firstTrain);

        var cdt = moment(firstTrain, 'HH:mm');
        console.log(cdt.toDate());
        console.log(cdt.toDate());

        var dateTime = moment(sysDateTime + ' ' + firstTrain, 'MM/DD/YYYY HH:mm');
        console.log(dateTime.format('MM/DD/YYYY HH:mm'))

        // Prettify the employee start
        var nextArrival = '';

        // Calculate the months worked using hardcore math
        // To calculate the months worked
        var minsAway = '';

        // Add each train's data into the table
        $("#js-TrainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
            frequency + "</td><td>" + nextArrival + "</td><td>" + minsAway + "</td></tr>");
    });



});
