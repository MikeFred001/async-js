"use strict";

const CARDS_API_BASE_URL = "https://deckofcardsapi.com";

let DECK_ID = null;

async function fetchShuffledDeck() {
  const resp = await axios({
    method: "GET",
    url: `${CARDS_API_BASE_URL}/api/deck/new/shuffle/?deck_count=1`
  });
  console.log("response data", resp.data);

  DECK_ID = resp.data.deck_id;
}


async function main() {
  await fetchShuffledDeck();
}


async function drawOneCard() {
  const resp = await axios({
    method: "GET",
    url: `${CARDS_API_BASE_URL}/api/deck/${DECK_ID}/draw/?count=1`
  });

  const cardImageURL = resp.data.cards[0].image;

  const card = $(`<img src=${cardImageURL} alt="Card"></img>`).addClass('card');
  tiltCard(card);
  $('#cards').append(card);
}


function tiltCard(card) {
  const randomAngle = Math.floor(Math.random() * 90) + 300;
  card.css({"transform": `rotate(${randomAngle}deg)`});
};


main();

$('#card-btn').on('click', drawOneCard);










