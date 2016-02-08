QUnit.test("testing the longest word lenght function",function (assert){

	var str = "I contain six variable sized words";

	assert.equal(longest_word(str),"variable : 8", "we expecting variable with 8 letters");

});