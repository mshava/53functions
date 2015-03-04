QUnit.test( "hello for joe", function( assert ) {
	assert.equal( hello_joe("joe"), "Hello!" );
});

QUnit.test( "hello for bob", function( assert ) {
	assert.equal( hello_joe("bob"), "Hello!" );
});

QUnit.test( "hello for Sakhi", function( assert ) {
	assert.equal( hello_joe("sakhi"), "Hello!, sakhi" );
});
