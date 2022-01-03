// vim: expandtab ts=2
// SPDX-FileCopyrightText: 2021 Benedict Harcourt <ben.harcourt@harcourtprogramming.co.uk>
// SPDX-License-Identifier: CC0-1.0

"use strict";

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function* makeTimes()
{
  let end   = 2010;
  let start = 2000;
  let dist  = end - start;

  const ratio = 1.07;
  const stop  = -4000;

  yield formatDate(start, end);

  while (start > stop) {
    dist *= ratio;
    end   = start;
    start = start - Math.round(dist);

    if (start < stop) {
      start = stop;
    }

    yield formatDate(start, end);
  }
}

function formatDate(start, end) {
  if (start > 0 && end > 0) {
    return start.toFixed(0) + "-" + end.toFixed(0) + " CE";
  }
  if (start < 0 && end < 0) {
    return Math.abs(start).toFixed(0) + "-" + Math.abs(end).toFixed(0) + " BCE";
  }
  return Math.abs(start).toFixed(0) + " BCE - " + end.toFixed(0) + " CE";
}

const masses = shuffle([...document.querySelectorAll('.region')]);
const times  = shuffle([...makeTimes()]);
const topics = shuffle([
  "Poetry",
  "Clothing",
  "Water",
  "Cuisine",
  "Hobbies",
  "Fashion",
  "Trade",
  "Mining",
  "Research",
  "Invetion",
  "Marriage",
  "Cutting Corners",
  "Lesiure",
  "Beach",
  "Hot",
  "Cold",
]);

const title = document.getElementById('title');
const time  = document.getElementById('time');
const topic = document.getElementById('topic');
let active = null;
let i = -1;
let lastLocked = 0;
let locked = 0;

const interval = setInterval(() => requestAnimationFrame(() => {
  if (locked == 3) {
    clearInterval(interval);
    return;
  }

  ++i;
  ++lastLocked;

  if (lastLocked > 5 && Math.random() < lastLocked / 50 ) {
    ++locked;
    lastLocked = 0;
  }

  if (locked < 3) {
    topic.textContent = topics[i % topics.length];
  }

  if (locked < 2) {
    time.textContent = times[i % times.length];
  }

  if (locked < 1) {
    if (active) {
      active.classList.remove('active');
    }
    active = masses[i % masses.length];
    active.classList.add('active');
    title.textContent = active.getAttribute('title') || active.id || '[Unknown]';
  }
}), 80);

