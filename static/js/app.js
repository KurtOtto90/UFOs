// Import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear table
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });

    });
};

function handleClick() {
    //get datetime from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check date entered and filter table using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild table using filtered data
    buildTable(filteredData);

};

//d3 use to listen for form button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table on page load
buildTable(tableData);



