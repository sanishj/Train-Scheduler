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



        database.ref().push(newTrain);

    

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val().trainName);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().firstTrain);
        console.log(childSnapshot.val().frequency);
    });

});
