"use strict";

const NUMBERS_API_BASE_URL = "http://numbersapi.com";

/** Fetches ten number facts from the numbers API. */
async function getTenNumFacts(){
  const resp = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/1..10?json`,
    responseType: 'json'

  });
  return resp.data;
}

/** Fetches number fact data for a given number from the numbers api.
 * Returns that data
 */
async function getNumFact(num){
  const resp = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/${num}?json`,
    responseType: 'json'
  });
  return resp.data.text;
}

/** Returns 4 facts about a given number using numbers api */
async function getFavNumFacts(num){
  const factsPromises = [];

  for (let i = 0; i < 4; i++) {
    factsPromises.push(getNumFact(num));
  }

  return await Promise.allSettled(factsPromises);
}

/** Loops through fact data from both requests and appends them to the DOM */
async function displayFactsOnPage(){
  let tenNumFacts = await getTenNumFacts();

  console.log("number facts>>>>>", tenNumFacts);

  for (let fact in tenNumFacts) {
    $('#number-facts').append($(`<p>${tenNumFacts[fact]}</p>`));
  }

  let favNumFacts = await getFavNumFacts(5);

  console.log("number facts>>>>>", favNumFacts);

  for (let fact in favNumFacts) {
    $('#number-facts').append($(`<p>${favNumFacts[fact].value}</p>`));
  }
}

displayFactsOnPage();