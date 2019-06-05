describe('words', function() {
  var stringOne = 'This is a string of ten words. You get it?';
  var stringTwo = 'This is a string of nine words. You get?';
  var stringThree =
    'This is a longer string with random words and 10.000 characters. Maybe. I dont know. I should try and find some crazy edgecases in order to mess this up';
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

describe('splitParapgrahs', function() {
  var sentenceStringOne =
    'This is a sentence. And another sentence! Is this a sentence? Should this: count as two sentences?';
  it('should return an array', function() {
    expect(tekstr.sentences(sentenceStringOne)).toEqual(jasmine.any(Array));
  });
  it('should return the correct length of the sentence array when counted via length', function() {
    expect(tekstr.sentences(sentenceStringOne).length).toEqual(4);
  });
});

describe('lixCalculator', function() {
  it('should return correct lix value', function() {
    expect(tekstr.calculateLix(297, 40, 35)).toEqual(22);
    expect(tekstr.calculateLix(1000, 120, 105)).toEqual(22);
    expect(tekstr.calculateLix(2000, 165, 105)).toEqual(27);
    expect(tekstr.calculateLix(1500, 170, 150)).toEqual(21);
  });
});

describe('measureSpeed', function() {
  it('should return correct reading time based on wordCount input', function() {
    expect(tekstr.measureSpeed(600, 220)).toEqual(3);
  });
});
