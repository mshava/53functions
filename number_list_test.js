QUnit.test("testing number_list function", function (assert) {
    var results = number_list(10);
    assert.ok([1,2,3,4,5,6,7,8,9,10].toString(),"Passed!");

});