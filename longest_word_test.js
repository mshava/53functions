QUnit.test("testing the longest word's lenght",function (assert){

	var results = sentence("CodeX_Academy is cool");

	assert.equal(long_word("CodeX_Academy"), 13);

});