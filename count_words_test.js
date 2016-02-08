QUnit.test("testing count words function", function (assert){

	var words = "sakhi is a codeX coder";

	assert.equal(count_words(words), 5, "we expecting 5 words");
});