//Sort the data by Energy descending
let sortedData = data.sort((a,b) =>b.energy - a.energy);
console.log("sortedData", sortedData);

//Loop through the array and extracyt each column from each property
for (let i = 0; i<sortedData.length; i++){
    var names = sortedData[i].names;
    console.log(names);
}

// //Create the visualise function for the plots and the display of food lables to be called upon.
// function visualise(foodChoice){
//     //Use D3 to select the dropdown menu
//     let dropdownMenu = d3.select("#selDataset");

//     for (let i=0; i<sortedData.length; i++){
//         let foodChoice = sortedData[i].names;

//     //loop through the array of names in the data and append the names to the dropdown menu.
    
//     dropdownMenu.append("option").text(foodChoice).property("value") 
    
//     for (let i=0; i<sortedData.length; i++){
//         let foodArray = Entry.values(sortedData());
//     }
//     //Use the filter to get the data for the selected food
//     sortedData.filter(i =>sortedData.names == foodChoice);
//     let food1 = foodArray1[0];
    
//     //Define each array needed for plotting
//     let food = food1.names;
//     let energy = food1.energy;

//     //Trace for the horizontal bar chart to display the top 10 food that provide the highest energy
//     let trace1 = {
//         x: energy.slice(0,10).reverse(),
//         y: food.slice(0,10).reverse(),
//         type: "bar",
//         orientation: "h"
//     };

//     //Data array
//     let data1 = [trace1];
//     //Apply a title to layout
//     let layout1 = {
//         title: ("Top 10 Energy Food")
//     };
//     //Render the plot to the div tag with id "bar"
//     Plotly.newPlot("bar", data1, layout1);


// };
// };

// //Update the plots and display upon the selection of a new food
// function optionChanged(foodChoice){
//     visualise(foodChoice);
// };
