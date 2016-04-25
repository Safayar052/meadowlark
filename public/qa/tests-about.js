suite('"About" Page Tests', function(){
	test('page should contain link of contact page', function() {
		assert($('a[href="/contact"]').length);
	});
});