QUnit.test("testing start string function",function (assert){

	var str ="super sised words I start string with";
	var str2 = "metting for municipal managers with marketing";

	assert.equal(start_str(str),"S");
	assert.equal(start_str(str2),"M");
});