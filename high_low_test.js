QUnit.test("testing high and low function",function (assert){

	assert.deepEqual(high_low([13,49,3,18,4,5,99,6,107,8,11,15]), [107,3]);

});