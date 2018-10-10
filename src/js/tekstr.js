var tekstr = (function () {
  'use strict;';

  // Public APIs
  var publicAPIs = {};

  // Defaults
  var defaults = {
    // Classes
    init: 'js-accordion'
  };

  // Private function

  // Public function
  publicAPIs.words = function (text) {
    // Splits a string of text into an array of words
    return text
      .replace(/[-'.]/ig, "") // Ignores hyphens and apostrophes. Dots are here to avoid split on . in numbers.
      .split(/[^a-zA-ZæøåÆØÅ0-9]/g) // Can't use \W+ since I need to take into account danish character ÆØÅ
      .filter(Boolean);
  };

  publicAPIs.countSections = function (text) {
    return (text.match(/<p/g) || []).length;
    //TODO: Filter empty paragraphs out in some way so that only sections containing text will result in a count
  };

  publicAPIs.countCharacters = function (text, spacesBoolean) {
    if (spacesBoolean) {
      //console.log(text.split("").length);
      return text.split("").length;
    } else {
      //console.log(text.replace(/\s+/g, "").split("").length);
      return text.replace(/\s+/g, "").split("").length;
    }
  };

  publicAPIs.averageCharactersPerWord = function (text) {
    return Math.round((tekstr.countCharacters(text, false) / tekstr.words(text).length) * 100) / 100;
  };

  publicAPIs.sentences = function (text) {
    var sentenceArray = [];
    var sentences = text
      // TODO: Match know abrreviations instead of the replaces
      .replace(/\. ([a-z])/g, " $1")
      .replace(/\.([a-z])/g, "$1")
      .split(/\?|\!|\.|\n/g)
      .forEach(function (element) {
        sentenceArray.push(element.trim());
      });
    return sentenceArray.filter(Boolean);
  };

  publicAPIs.averageSentenceLength = function (text) {
    return Math.round(tekstr.words(text).length / tekstr.sentences(text).length);
  };

  publicAPIs.calculateLix = function (wordCount, longWordsCount, sentenceCount) {
    return Math.round((wordCount / sentenceCount) + ((longWordsCount * 100) / wordCount));
  };

  publicAPIs.measureSpeed = function (wordCount, speed) {
    // TODO: Should not be hardcoded to return with " minutter"
    return Math.ceil(wordCount / speed) + " minutter";
  };

  // Return our public APIs
  return publicAPIs;
})();
