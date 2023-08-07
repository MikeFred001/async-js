"use strict";

const NUMBERS_API_BASE_URL = "http://numbersapi.com";

async function getNumberFacts(num){

  const resp1 = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/${num}`
  });
  const resp2 = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/${num}`
  });
  const resp3 = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/${num}`
  });
  const resp4 = await axios({
    method: "GET",
    url: `${NUMBERS_API_BASE_URL}/${num}`
  });

  return [resp1.data, resp2.data, resp3.data, resp4.data];
};

async function displayOnPage(){
  let numFacts = await getNumberFacts(5);

  console.log(numFacts);
  console.log(numFacts['1']);

  for (let num in numFacts) {
    $('#number-facts').append($(`<p>${numFacts[num]}</p>`));
  }
}

displayOnPage();