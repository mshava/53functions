QUnit.test("testing uppercase_letters function", function (assert){
  var str = "Old Stone Cold";
  var hi = ['O', 'S', 'C'];
  assert.deepEqual(uppercase_letters(str), hi);
})
