**Tekstr.js - simple JS plugin to handle text**


Getting started with the Tekstr Plugin
------

### 1. Including Tekstr on your site

You have the following options to include the Tekstr Plugin on your site:


**CDN**
You can also use the jsDelivr CDN.

Right now there is only one version live. But I still urge you to use a specific version in your project. This is in order to prevent my future updates from breaking your site. It is still so early that naming conventions aren't fully established.

```HTML
<script src="https://cdn.jsdelivr.net/gh/MarkBuskbjerg/tekstr@0.0.1/dist/js/tekstr.min.js"></script>
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
There is currently no initialization needed. You can just hit the API with whatever you want to use. Count words, sentences or something else in your text. Each method can be called as described here in the docs

Functions
------

### tekstr.words(text)
This function takes clean text as an input and splits the input into an array of words.

*Examples*
```javascript
// Easy way to count the number of words in a string of text
var string = "This is just a string to use as an example. Nothing much to see here.";
console.log(tekstr.words(string).length); // return 15

// Filtering out all words with 6 characters or more
var string = "This is just a string to use as an example. Nothing much to see here.";
var wordsArray = tekstr.words(string);
var countLongWords = wordsArray
        .filter(function (a) { return a.length > 6; })
        .length;
console.log(countLongWords); // return 2
```