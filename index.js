#!/usr/bin/env node

export default function getScore() {
  console.log(getScore(2018));
}

function getScore(year) {
  return "Chiefs " + getChiefsScore() + " -- Rams " + getRamsScore() + " | " + year;
}

function getChiefsScore() {
  return 51;
}

function getRamsScore() {
  return 54;
}
