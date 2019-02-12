**Tekstr.js - simple JS plugin to analyze text**

Hi. This is my plugin for counting words, sentences and lots more with JavaScript.

## What can this plugin be used for?

The easy answer would be to leave this up to your imagination. Sky is the limit, right?

But basically this is just a simple plugin with an API containing methods to count words, sentences, sections and more in a text. You'll also be able to find stuff like average sentence length and average number of characters per word.

Well. I actually use this in one of my own live project. So go and watch here at <https://tekstr.dk/app/>. Here the plugin is used to calculate the readability of texts in the live editor. And also enabling the user to mark long words and sentences (the highlight stuff is currently not in this plugin - maybe in the future).

## Getting started with the Tekstr.js Plugin

### 1. Including Tekstr on your site

You have the following options to include the Tekstr Plugin on your site:

**CDN**
You can also use the jsDelivr CDN - [there's a nice landingpage with all live versions here](https://www.jsdelivr.com/package/gh/MarkBuskbjerg/tekstr).

Include the latest stable version with the link below:

```HTML
<script src="https://cdn.jsdelivr.net/gh/MarkBuskbjerg/tekstr@1.0.2/dist/js/tekstr.min.js"></script>
```

**Direct download**
You can download the file containing the entire JavaScript API here:

```HTML
Minified
https://github.com/MarkBuskbjerg/tekstr/blob/master/dist/js/tekstr.min.js

Full
https://github.com/MarkBuskbjerg/tekstr/blob/master/dist/js/tekstr.js
```

### 2. Start using the API to make fun stuff inside your project

No initialization is needed. Just include the script and hit the tekstr.js API with whatever you want to use. Count words, sentences or something else in your text. Each method can be called as described here in the docs.

## Functions in the API

### tekstr.words(text)

This function takes clean text as an input and splits the input into an array of words.

_Examples_

```javascript
// Easy way to count the number of words in a string of text
var string =
  'This is just a string to use as an example. Nothing much to see here.';
console.log(tekstr.words(string).length); // returns: 15

// Filtering out all words with 6 characters or more
var string =
  'This is just a string to use as an example. Nothing much to see here.';
var longWords = tekstr.words(string).filter(function(a) {
  return a.length > 6;
});
console.log(longWords); // returns: (2) ["example", "Nothing"]
console.log(longWords.length); // returns 2
```

### tekstr.splitParagraphs(text)

This function takes in text as the input and splits the input into an array of paragraphs / sections of textr.

A simple use case would be to return the number of parapgraphs in a text by returning the length of the text. Or you could filter out an array of sentences greater than certain numbers. This could be used to flag long sentences in a text.
_Examples_

```javascript
// Easy way to count number of paragraphs in a text
var testString =
  '<p>This is the first paragraph.</p><p>This is the second paragraph.</p>';
console.log(tekstr.splitParagraphs(testString).length); // return 2
```

### tekstr.countSections(text)

This function will be swooped out in future versions
