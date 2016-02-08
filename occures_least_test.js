QUnit.test("testing occures least function",function (assert){

	var str = "what occures least in those sentenced";
	var str2 = "here comes moms feare";

	assert.equal(occures_least(str),"W","we are expecting W as this word appeares once");
	assert.equal(occures_least(str2),"H","we are expecting H as this word appeares once");

});