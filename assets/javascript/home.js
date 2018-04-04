
// psuedo code

//var fit = "";
//var welness= "";

//var search = $(this).attr("data-selfCare");
//1. will need variables on fit, wellness, retreats, spa, ect
//2, will need on click functions to access the diffrent part
//3. the yelp api will need to be connected to get zip code info and then supply info on keywords in proximal area
//4. connect another api once we get the yelp working


// global variables

let selfHelp =  ["fitness", "healthy foods", "spa", "retreats","wellness", "adventures"];


// on click logic
$(document).on("click",".option", function () {
    let userChoice= $(this).attr("id")
    console.log(userChoice)
    });

let userChoiceText;


$(document).on("click",".option", function() {
userChoiceText= $(this).text().trim();
console.log(userChoiceText);
    if (userChoiceText === "Fitness"){
        $("#topicTitle").text(`Hi! Great, you have chosen ${userChoiceText}`);
        console.log("you clicked fitness");
    } else if (userChoiceText === "Food") {
        $("#topicTitle").text(`Hungry? You have chosen ${userChoiceText}`);
    } else if (userChoiceText === "Spa") {
        $("#topicTitle").text(`Ah, You have chosen ${userChoiceText}`);
    } else if(userChoiceText === "Retreats"){
        $("#topicTitle").text(`Great! Want to go on a ${userChoiceText}`);
    } else if (userChoiceText === "Wellness"){
        $("#topicTitle").text(`Nice! You have chosen ${userChoiceText}`);
    } else if (userChoiceText === "Movies"){
        $("#topicTitle").text(`Awesome! You have chosen ${userChoiceText}`);
    }});

// zip code config to api

$(document).on("click","#zipCode2", function() {

//APIS


$(document).on("click","#zipButton", function () {
    var zip = $("#ZipCode2").val().trim();
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https:\/\/maps.googleapis.com/maps/api/place/textsearch/json?query=${userChoiceText}+in+Atlanta+${zip}&key=AIzaSyDOIrdjOme0yAiuQS8QlE9JTucD7rG81X8`,
        method: "GET",
    }).done(function(response) {
        $("#whateverDiv").text(response.results[0].name);
        console.log(response);
    });


    var movie = "The Social Network";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


    $.ajax({
        url: queryURL,
        method: "GET",
    }).done(function(response) {
        console.log(response);
    });
    //
    // //APIS
    //
    // $.ajax({
    //     url: `https://cors-anywhere.herokuapp.com/https:\/\/maps.googleapis.com/maps/api/place/textsearch/json?query=gyms+food+spas+retreats+welness+movies+in+Atlanta&key=AIzaSyDOIrdjOme0yAiuQS8QlE9JTucD7rG81X8`,
    //     method: "GET",
    // }).done(function(response) {
    //     console.log(response);
    // });
    //
    // var movie = "The Social Network";
    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    //
    //
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    // }).done(function(response) {
    //     console.log(response);
    // });
    //

});













