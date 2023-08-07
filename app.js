"use strict";

const NUMBERS_API_BASE_URL = "http://numbersapi.com";

async function getNumFact(num){
  const resp = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/${num}`,
    responseType: 'json'
  });
  return resp.data;
}

async function getAllNumFacts(num){
  const facts = [];

  for (let i = 0; i < 4; i++) {
    facts.push(await getNumFact(num));
  }

  return facts;
}

async function displayOnPage(){
  let numFacts = await getAllNumFacts(5);

  console.log("number facts>>>>>", numFacts);

  for (let fact in numFacts) {
    $('#number-facts').append($(`<p>${numFacts[fact]}</p>`));
  }
}

displayOnPage();