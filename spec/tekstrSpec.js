describe('words', function() {
  var stringOne = 'This is a string of ten words. You get it?';
  var stringTwo = 'This is a string of nine words. You get?';
  var stringThree =
    'This is a longer string with random words and 10.000,75 characters. Maybe. I dont know. I should try and find some crazy edgecases in order to mess this up';
  it('should throw an error if text parameter is not a string', function() {
    expect(tekstr.words(12)).toBeNull();
  });
  it('should convert a string to an array', function() {
    expect(tekstr.words(stringOne)).toEqual(jasmine.any(Array));
    expect(tekstr.words(stringTwo)).toEqual(jasmine.any(Array));
  });
  it('length of words array matches number of words in a string', function() {
    expect(tekstr.words(stringOne).length).toEqual(10);
    expect(tekstr.words(stringTwo).length).toEqual(9);
    expect(tekstr.words(stringThree).length).toEqual(29);
  });
});

describe('countCharacters', function() {
  var stringOne = 'This is a string of ten words. You get it?';
  var stringTwo =
    'This is a string of nine words. You? I wanna feel you. I would very much like to just ramble on forever and ever and ever and ever and ever.';
  var stringThree =
    'This is a longer string with random words and 10.000,75 characters. Maybe. I dont know. I should try and find some crazy edgecases in order to mess this up';
  it('should return the number of characters including the spaces', function() {
    expect(tekstr.countCharacters(stringOne, true)).toEqual(42);
    expect(tekstr.countCharacters(stringTwo, true)).toEqual(140);
    expect(tekstr.countCharacters(stringThree, true)).toEqual(155);
  });
  it('should return the number of characters excluding the spaces', function() {
    expect(tekstr.countCharacters(stringOne, false)).toEqual(33);
    expect(tekstr.countCharacters(stringTwo, false)).toEqual(111);
    expect(tekstr.countCharacters(stringThree, false)).toEqual(127);
  });
});

describe('averageCharactersPerWord', function() {
  var stringOne = 'This is a string of ten words. You get it?';
  var stringTwo =
    'This is a string of nine words. You? I wanna feel you. I would very much like to just ramble on forever and ever and ever and ever and ever.';
  var stringThree =
    'This is a longer string with random words and 10.000,75 characters. Maybe. I dont know. I should try and find some crazy edgecases in order to mess this up';
  //TODO: Test if it returns a number (integer or float)
  it('should return the average number of characters per word', function() {
    expect(tekstr.averageCharactersPerWord(stringOne)).toEqual(3.3);
    expect(tekstr.averageCharactersPerWord(stringTwo)).toEqual(3.7);
    expect(tekstr.averageCharactersPerWord(stringThree)).toEqual(4.38);
  });
});

describe('sentences', function() {
  var stringOne = 'This is a string of ten words. You get it?';
  var stringTwo =
    'This is a string of nine words. You? I wanna feel you. I would very much like to just ramble on forever and ever and ever and ever and ever.';
  var stringThree =
    'This is a longer string with random words and 10.000,75 characters. Maybe. I dont know. I should try and find some crazy edgecases in order to mess this up';
  // TODO: Write a test with the exaxt match of returned array... just to catch eventual changes in filters
  it('should return an array', function() {
    expect(tekstr.sentences(stringOne)).toEqual(jasmine.any(Array));
    expect(tekstr.sentences(stringTwo)).toEqual(jasmine.any(Array));
  });

  it('should split string into a countable array of strings', function() {
    expect(tekstr.sentences(stringOne).length).toEqual(2);
    expect(tekstr.sentences(stringTwo).length).toEqual(4);
    expect(tekstr.sentences(stringThree).length).toEqual(5);
  });
});

describe('averageSentenceLength', function() {
  var stringOne = 'This is a string of ten words. You get it?';
  var stringTwo =
    'This is a string of nine words. You? I wanna feel you. I would very much like to just ramble on forever and ever and ever and ever and ever.';
  var stringThree =
    'This is a longer string with random words and 10.000,75 characters. Maybe. I dont know. I should try and find some crazy edgecases in order to mess this up';
  it('should calculate the average sentences length of input string', function() {
    expect(tekstr.averageSentenceLength(stringOne)).toEqual(5);
    expect(tekstr.averageSentenceLength(stringTwo)).toEqual(8);
    expect(tekstr.averageSentenceLength(stringThree)).toEqual(6);
  });
});

describe('lixCalculator', function() {
  var isIntegerRegEx = /^\d{1,}$/;
  it('should return correct lix value', function() {
    expect(tekstr.calculateLix(297, 40, 35)).toEqual(22);
    expect(tekstr.calculateLix(1000, 120, 105)).toEqual(22);
    expect(tekstr.calculateLix(2000, 165, 105)).toEqual(27);
    expect(tekstr.calculateLix(1500, 170, 150)).toEqual(21);
  });
  // TODO: Maybe write an assertion for integer more specifically instead of just testing for the return number
  fit('should return an integer and not a float', function() {
    expect(tekstr.calculateLix(1400, 120.4, 150)).toMatch(isIntegerRegEx);
    expect(tekstr.calculateLix(900, 112.6, 145)).toMatch(isIntegerRegEx);
  });
  it('should return an integer and not a float in all cases', function() {
    expect(tekstr.calculateLix(1400, 120.4, 150)).toEqual(18);
    expect(tekstr.calculateLix(900, 112.6, 145)).toEqual(19);
  });
});

describe('measureSpeed', function() {
  it('should return correct reading time based on wordCount input', function() {
    expect(tekstr.measureSpeed(600, 220)).toEqual(3);
  });
});
