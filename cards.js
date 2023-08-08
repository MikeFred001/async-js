"use strict";

const CARDS_API_BASE_URL = "https://deckofcardsapi.com/";
let DECK_ID = null;

async function shuffleCards() {
  const resp = await axios({
    method: "GET",
    url: `${CARDS_API_BASE_URL}api/deck/new/shuffle/?deck_count=1`
  });
  console.log("response data", resp.data);

  DECK_ID = resp.data.deck_id;
  return DECK_ID;
}

async function main() {
  await shuffleCards();
  const card = await drawOneCard(DECK_ID);

}

main()


async function drawOneCard(deckId) {
  const resp = await axios({
    method: "GET",
    url: `${CARDS_API_BASE_URL}api/deck/${deckId}/draw/?count=1`

  });
  console.log("response data", resp.data);

  return resp.data.cards;
}










