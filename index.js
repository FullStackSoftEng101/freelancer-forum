/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
// === State ===

function makeFreelancer() {
  const nameIndex = Math.floor(Math.random() * NAMES.length);
  const name = NAMES[nameIndex];
  const occupation = sample(OCCUPATIONS);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));
  return { name, occupation, rate };
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}
const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  const freelancer = makeFreelancer();
  freelancers.push(freelancer);
}

/**
 * @returns {Freelancer} a freelancer with random name, ocuppation and rate
 */

// === Components ===

// === Render ===
/**
 *  // <table>s eject "fake" elements, which is why we need to use
  // <tbody id="FreelancerRows"> instead of <FreelancerRows>.
  // This prevents our component from being forced outside of the table.

 * 
 */
function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
  <h1></h1>
  <AverageRate></AverageRate>
  <table><thead>
  <tr>
  <th>Name</th>
  <th>Occupation</th>
  <th>Rate</th>
  </tr>
  </thead>
  <tbody>
  </table>
  `;
}

render();
