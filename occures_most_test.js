QUnit.test("testing occures most function",function (assert){

	var str = "take care of certain pieces of this thic cake";
	var Str2 = "dont do deep dance";

	assert.equal(occures_most(str), "E", "we expecting E as this letter appears the most");
	assert.equal(occures_most(Str2), "D", "we expecting D as this letter appears the most");
});