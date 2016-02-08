QUnit.test("testing the end string function", function (assert){

	var str = "this starts with maths and tests";
	var str2 = "they say a way to highway is away";

	assert.equal(ends_str(str), "S", "we expecting S as the common letter words start with");
	assert.equal(ends_str(str2), "Y", "we expecting Y as the common letter words ends with");
});
