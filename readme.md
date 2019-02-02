**Tekstr.js - simple JS plugin to handle text**

Okay. We are still running version 0.0.x - so beware. Things might look rough around the edges.

What can this plugin be used for?
------
The easy answer would be to leave this to your imagination. The sky is the limit, right?

Well. I actually use this in one of my own live project. So go and watch here at <https://tekstr.dk/app/>. Here the plugin is used to calculate the readability of texts in the live editor. And also enabling the user to mark long words and sentences (the highlight stuff is currently not in this plugin - maybe in the future).


Getting started with the Tekstr Plugin
------

### 1. Including Tekstr on your site

You have the following options to include the Tekstr Plugin on your site:


**CDN**
You can also use the jsDelivr CDN.

Right now there is only one version live. But I still urge you to use a specific version in your project. This is in order to prevent my future updates from breaking your site. It is still so early that naming conventions aren't fully established.

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
There is currently no initialization needed. You can just hit the API with whatever you want to use. Count words, sentences or something else in your text. Each method can be called as described here in the docs

Functions in the API
------

### tekstr.words(text)
This function takes clean text as an input and splits the input into an array of words.

*Examples*
```javascript
// Easy way to count the number of words in a string of text
var string = "This is just a string to use as an example. Nothing much to see here.";
console.log(tekstr.words(string).length); // returns: 15

// Filtering out all words with 6 characters or more
var string = "This is just a string to use as an example. Nothing much to see here.";
var longWords = tekstr
                        .words(string)
                        .filter(function (a) { return a.length > 6; });
console.log(longWords); // returns: (2) ["example", "Nothing"]
console.log(longWords.length); // returns 2
```