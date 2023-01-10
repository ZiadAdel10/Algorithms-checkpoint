"use strict";

const counters = function (sentence) {
  const counterLength = sentence.length;
  const counterWords = sentence.split(" ").length;
  const counterVowels = sentence.toLowerCase().match(/[aeiouy]/g).length;

  const allCounters = [counterLength, counterWords, counterVowels];

  return allCounters;
};

console.log(counters("I love coding."));
