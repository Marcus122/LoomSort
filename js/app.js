//Just config and loads the main.js file as the main entry point.

require.config({
    /*urlArgs: "bust=" + (new Date()).getTime(),*/
    baseUrl : '/js',
	paths: {
        "loomTable" : './loomTable',
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min"
	}
});
requirejs(["main"]);