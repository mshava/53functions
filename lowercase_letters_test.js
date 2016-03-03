QUnit.test("testing lowercase_letters function", function (assert){
  var str = "sOUD StONE CoLD";
  var hi = ['s', 't', 'o'];
  assert.deepEqual(lowercase_letters(str), hi);
})
