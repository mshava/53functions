QUnit.test("testing count words function", function (assert){

	var str = "sakhi is a codeX coder";

	assert.equals(count_word(str),"5");
});