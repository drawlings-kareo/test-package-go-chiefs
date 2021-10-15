#!/usr/bin/env node

export default function getScore() {
  console.log(getScore(2018));
}

function getScore(year) {
  return "Chiefs " + getChiefsScore(year) + " -- Rams " + getRamsScore(year) + " | " + year;
}

function getChiefsScore(year) {
  switch (year) {
    case 2018:
      return 51;
    default:
      return 0;
  }
}

function getChiefsScore(year) {
  switch (year) {
    case 2018:
      return 54;
    default:
      return 0;
  }
}
