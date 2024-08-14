const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// FETCHING DATA FROM ENDPOINT
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

//  FUNTION FOR FINDING MATCHES
function findMatch(wordToMatch, cities){
  return cities.filter(place => {
    // HERE WE WILL FIGURE OUT IF THE CITY OR STATE MATCHES WHAT WAS SEARCHED
    const regex = new RegExp(wordToMatch, 'gi'); // Using regex for matching city or state
    return place.city.match(regex) || place.state.match(regex)
  })
} 


// DISPLAY FUNCTION
function displayMatch(){
  const matchArray = findMatch(this.value, cities);
  
  const html = matchArray.map(place =>{
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join('');
  // ACCESSING ELEMENT 'SUGGESTION' FROM HTML
  const suggestions = document.querySelector('.suggestions');
  suggestions.innerHTML = html;
}

  // FUNCTION TO ADD COMMA IN POPULATION DIGITS
  function numberWithCommas(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

const searchInput = document.querySelector('.search');
searchInput.addEventListener('keyup', displayMatch);
