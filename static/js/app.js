// //Sort the data by energy descending
let foodNutrients = data.sort((a,b) =>b.name - a.name);
console.log("foodNutrients", foodNutrients);

//Initialize an empty array to store the name of food in the dataset
let namesList = [];

//loop through the array and extract the name property from each object
for (let i = 0; i<foodNutrients.length; i++){
    namesList.push(foodNutrients[i].name);
}

//print the list of names
console.log("list of names:", namesList);

//Initiate the interactive visualisation with the dropdown menu.
function init(){
    //use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    //populate dropdown menu with the food on the list
    namesList.forEach((name) =>{
        dropdownMenu.append("option").text(name).property("value")
    });

    //Create the initial food choice from the list
    let firstFoodChoice = foodNutrients[0].name;
    //Initialise the interactive visualisation
    visualise(firstFoodChoice);
};
init()

//Create the visualisation function for the dashboard
function visualise(namesList){
    //Use filter to get the data for the selected food
    let sampleArr1 = foodNutrients.filter(sample =>sample.name == namesList);
    //get the sample data
    let sample1 = sampleArr1[0];

    //Select the dvi tag with id "nutirition-value"
    let foodLabel = d3.select("#nutrition-value");
    //Clear current content if any
    foodLabel.html("");
    //Loop through each entry and append the key-value pairs to the label
    for (entry in sample1){
        foodLabel.append("h6").text(entry + ":" + sample1[entry])
    };

    //Create a gauge chart for satuated fat
    //Trace 1 for the gauge chart
    let trace1 = {
        domain: {x: [0,10], y: [0,10]},
        value: sample1.satuated_fat,
        title:(namesList + "<br> <b> Satuated Fat</b> <br> "),
        type: "indicator",
        shape: "angular",
        mode: "gauge+number",
        gauge: {
            axis: {range: [0, 100]},
            bar: {color:"green", thickness: 0.08},
            steps: [
                {range: [0,10], color:"#E0FFE0"},
                {range: [10,20], color:"#B0FFB0"},
                {range: [20,30], color:"#80FF80"},
                {range: [30,40], color:"#FFCCCC"},
                {range: [40,50], color:"#FF9999"},
                {range: [50,60], color:"#FF0000"},
                {range: [60,70], color:"#990000"},
                {range: [70,80], color:"#990000"},
                {range: [80,90], color:"#660000"},
                {range: [90,100],color:"#660000"},
            ]
        }
    };
    //Data array
    let data1 = [trace1];
    //Specify layout
    let layout1 = {
        width: 500, 
        height: 400,
        paper_bgcolor: "lavender",
        font: {color: "darkblue", family: "Arial"}
    };
    //Render the gauge chart to the div tag with id "gauge"
    Plotly.newPlot("gauge1", data1, layout1)

    //Create a gauge chart for sugar
    //Trace 2 for the gauge chart
    let trace2 = {
        domain: {x: [0,10], y: [0,10]},
        value: sample1.sugar,
        title:(namesList + "<br> <b> Sugar</b> <br> "),
        type: "indicator",
        shape: "angular",
        mode: "gauge+number",
        gauge: {
            axis: {range: [0, 60]},
            bar: {color:"green", thickness: 0.08},
            steps: [
                {range: [0,20], color:"#80FF80"},
                {range: [20,40], color:"yellow"},
                {range: [40,60], color:"red"},
            ]
        }
    };
    //Data array
    let data2 = [trace2];
    //Specify layout
    let layout2 = {
        width: 500, 
        height: 400,
        paper_bgcolor: "lavender",
        font: {color: "darkblue", family: "Arial"}
    };
    //Render the gauge chart to the div tag with id "gauge"
    Plotly.newPlot("gauge2", data2, layout2)
};

//Update the visualisation upon the selection of food
function optionChanged(namesList){
    visualise(namesList);
};



