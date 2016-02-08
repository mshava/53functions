QUnit.test("testing the avarage word length function",function (assert){

	var str = "Only four brothers I have so far";

	assert.equal(avg_word_length(str),"4");
});