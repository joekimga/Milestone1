
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




$(document).on("click",".option", function () {
let userChoiceText= $(this).text();
    if (userChoiceText === "fitness"){
        $("#fitness").text(`Hi! Great, you have chosen ${userChoiceText}`);
    } else if (userChoiceText === "food") {
        $("#food").text(`Hungry? You have chosen ${userChoiceText}`);
    } else if (userChoiceText === "spa") {
        $("#spa").text(`Ah, You have chosen ${userChoiceText}`);
    } else if(userChoiceText === "retreats"){
        $("#retreats").text(`Great! Want to go on a ${userChoiceText}`);
    } else if (userChoiceText === "wellness"){
        $("#wellness").text(`Nice! You have chosen ${userChoiceText}`);
    } else if (userChoiceText === "adventures"){
        $("#adventures").text(`Awesome! You have chosen ${userChoiceText}`);
    }});


//can we do this for loop ?

// for (i=0; selfHelp.length; i++ ) {
//     $(document).on("click",".option", function () {
//         let userChoiceText= $(this).text();
//         if (userChoiceText === "fitness"){
//             $("#fitness").text(`Hi! Great, you have chosen ${userChoiceText}`);
//         } else if (userChoiceText === "food") {
//             $("#food").text(`Hungry? You have chosen ${userChoiceText}`);
//         } else if (userChoiceText === "spa") {
//             $("#spa").text(`Ah, You have chosen ${userChoiceText}`);
//         } else if(userChoiceText === "retreats"){
//             $("#retreats").text(`Great! Want to go on a ${userChoiceText}`);
//         } else if (userChoiceText === "wellness"){
//             $("#wellness").text(`Nice! You have chosen ${userChoiceText}`);
//         } else if (userChoiceText === "adventures"){
//             $("#adventures").text(`Awesome! You have chosen ${userChoiceText}`);
//         }});
// }










    // let userChoiceText = $(this).text();
    //
    // if(userChoice === "fitness"){
    //     $("#topicTitle").text(`Hey You have chosen ${userChoiceText}`);
    // else if
    //
    //
    //         });

