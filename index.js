#!/usr/bin/env node

export default function getScore() {
  console.log(get2018FinalScore());
}

function get2018FinalScore() {
  return "Chiefs " + getChiefsScore() + " - Rams " + getRamsScore();
}

function getChiefsScore() {
  return 51;
}

function getRamsScore() {
  return 54;
}
