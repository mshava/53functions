QUnit.test("testing shortest word function", function (assert){

	var str = "Six variable sized words I contain";
	
	assert.equal(shortest_word(str),"I : 1");
});