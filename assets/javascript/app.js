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

        
        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTrainTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
        console.log("firstTrain: " + firstTrainTimeConverted);
        // Current Time
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));
        console.log(currentTime);
        // Difference between the times
        var diffTime = moment().diff(moment(firstTrainTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);
        // Time apart (remainder)
        var tRemainder = diffTime % frequency;
        console.log(tRemainder);
        // Minute Until Train
        minutesAway = frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + minutesAway);

        var nextArrival = tRemainder;

        var minsAway = minutesAway;

        // Add each train's data into the table
        $("#js-TrainTable > tbody").append("<tr class='text-left'><td>" + trainName + "</td><td>" + destination + "</td><td>" +
            frequency + "</td><td>" + nextArrival + "</td><td>" + minsAway + "</td></tr>");
    });



});
