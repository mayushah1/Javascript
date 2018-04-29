// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to dataSet initially
var filteredAddresses = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredAddresses.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAddresses[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, 
      // create a new cell at set its inner text to be the current value at the current address's field
      var $cell = $row.insertCell(j);
      $cell.innerText = address[fields[j]];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterDate = $dateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredAddresses = dataSet.filter(function(address) {
    var addressState = address.state.toLowerCase();
    var addressCity = address.city.toLowerCase();
    var addressDate = address.date;
    var addressShape = address.shape.toLowerCase();
    var addressCountry = address.country.toLowerCase();



    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      if (filterDate.length > 0)  {
      return addressDate === filterDate;
      }
      else if (filterState.length > 0 && filterCity.length > 0) {
      return addressState === filterState && addressCity === filterCity;
      }
      else if (filterState.length == 0) {
      return addressCity === filterCity;
      }
      else if (filterCity.length == 0) {
      return addressState === filterState;
      }
  });
  renderTable();
}
// Render the table for the first time on page load
renderTable();
