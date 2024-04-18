# NutriVis - Visualising Nutritional Profiles of Foods

## Overview and Purpose
NutriVis is a tool designed to simplify the understanding of nutritional data for consumers. It visualises the nutritional profiles of various foods, enabling users to make informed dietary choices by comparing and contrasting the nutritional content of different food items, such as energy, protein, carbohydrates, fats, vitamins, and minerals. NutriVis aims to serve educators, dieticians, and individuals curious about nutrition, providing a detailed and accessible approach to dietary planning and education.

![enter image description here](https://github.com/SonalBhosle23/Project-3-Group-1/blob/main/images/gauge%20chart%201.png?raw=true)

### Group Members
-    Steph Adey
-    Sonal Bhosle
-    Liwei Jiang
-    Aryan Linga

## Repository Contents
-   `Project3Group1.ipynb`: Jupyter Notebook containing the codings and providing the visualisations.
-   `static/js`: The file "data.js" containing the data for 700 final sample and the file app.js containing the coding for the dashboard.
-   `Resources`: Folder containing the original Excel data files and exported CSV and JSON files:
    -   `ABBREV.xlsx`: Original data downloaded from data.world (sourced from U.S. Department of Agriculture (USDA)).
    -   `original.csv`: The csv file converted from the original excel file ABBREV.xlsx.
    -   `origianl.json`: The json file converted from the original excel file ABBREV.xlsx.
    -   `food_label_final.csv`: The csv file converted from the DataFrame of the final sample for visualisations.
    -   `food_label_final.json`: The json file converted from the DataFrame of the final sample for visualisations.
    -   `food.jpg`: An image used to decorate the dashboard.
-   `Images`: Folder containing screenshots of:
    -   `average nutrition values by category`: the first visualisation generated.
    -   `a comparison of two categories`: the second visualisation from comparing two categories.
    -   `updated Nutrients density heatmap`: the third visualisation created using bokeh tools.
    -   `the dashboard image`: an image of the dashboard presenting interactive visualisations.
    -   `an example of food label gnerated on the dashboard`: an image of food label generated on the dashboard.
    -   `gauge chart 1`: the gauge chart for satuated_fat upon a selection of food on the dashboard.
    -   `gauge chart 2`: the gauge chart for satuated_fat upon a selection of food on the dashboard.

## How to Use
To use NutriVis, follow these steps:
1. Access the NutriVis platform online or download the source code from the GitHub repository.
2. Install any necessary dependencies as outlined in the `Project3Group1.ipynb` file.
3. Navigate through the website's interactive elements:
   - Use the dropdown menus to select different food items.
   - View the nutritional data visualised in various forms such as pie charts, gauges, and heat maps.
4. Interact with the visualisations to filter data and explore different nutritional aspects of selected food items.

### MongoDB Database Setup
To set up the MongoDB database and import the necessary data files for NutriVis, follow these steps:
5. Open a terminal window on your computer.
6. Navigate to the Resources folder where the original and exported data files are located. You can do this by typing `cd path/to/Resources` in your terminal, replacing `path/to/Resources` with the actual path to your Resources folder.
7. Use the following commands to load the data into MongoDB. Make sure MongoDB is installed and running on your machine before executing these commands:
   - Import the original data:
     ```bash
     mongoimport --type json -d food -c original --drop --jsonArray original.json
     ```
   - Import the final labeled data:
     ```bash
     mongoimport --type json -d food -c food_label_final --drop --jsonArray food_label_final.json
     ```
   These commands will create a new database called `food` if it doesn't already exist, and add two collections: `original` and `food_label_final`. The `--drop` option ensures that any existing collections with the same names are dropped (deleted) before importing the new data, preventing duplicate entries.

These steps will set up the database needed to run the NutriVis tool with all the necessary data pre-loaded.


## Ethical Considerations
NutriVis is committed to ethical data use and user interaction. Efforts include:
- Ensuring all nutritional data used in NutriVis is sourced from reputable databases, providing accurate and reliable information.
- Designing the tool to be accessible to a diverse user base, avoiding biases towards any specific dietary preferences or health conditions.
- Encouraging informed dietary choices without promoting specific products or diets.
- Respecting data licensing agreements by crediting the USDA FoodData Central as the primary source of our nutritional data. According to their licensing terms, this data is in the public domain under CC0 1.0 Universal (CC0 1.0). While no permission is needed for their use, proper attribution is requested. The suggested citation for using this data is: "U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. fdc.nal.usda.gov."

## References and Acknowledgements
### Data Sources
- Nutritional data sourced from the [USDA Food Composition Databases](https://fdc.nal.usda.gov/), a credible source offering comprehensive information on food ingredients.
- Retrieved from data.world [https://data.world/login?next=%2Fawram%2Ffood-nutritional-values%2Fworkspace%2Ffile%3Ffilename%3DABBREV.xlsx]

### Code References
- Visualisation functionalities are implemented using [Plotly](https://plotly.com/) and [D3.js](https://d3js.org/), popular libraries for creating interactive data visualisations.
- -   University of Adelaide. (2023). Module 14 contents in particular.[https://bootcampspot.instructure.com/courses/4781/pages/14-interactive-web-visualisations?module_item_id=1163045](https://bootcampspot.instructure.com/courses/4781/pages/14-interactive-web-visualisations?module_item_id=1163045)
-   Visualisation Gallery-boheh. Retrieved from ([https://docs.bokeh.org/en/latest/docs/gallery.html](https://docs.bokeh.org/en/latest/docs/gallery.html))
-   How to Guides using ipywidgets interact tools. Retrieved from ([https://ipywidgets.readthedocs.io/en/latest/examples/Using%20Interact.html](https://ipywidgets.readthedocs.io/en/latest/examples/Using%20Interact.html))
