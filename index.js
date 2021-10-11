#!/usr/bin/env node

export default function getScore() {
  console.log("Chiefs " + getChiefsScore() + ", Rams" + getRamsScore());
}

function getChiefsScore() {
  return 51;
}

function getRamsScore() {
  return 54;
}
