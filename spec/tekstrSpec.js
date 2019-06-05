describe('Words', function() {
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
