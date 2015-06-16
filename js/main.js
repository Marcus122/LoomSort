
//Main entry point for the website code.

define(["jquery","loomTable/Table","loomTable/Container"], function($,loomTable,loomContainer) {
    
    var LoomTable = new loomTable($('#table'),{
		fields:{
			link:{
				getValue:function($td){
					return $td.find('a').text();
				}
			},
			employee:{
				getValue:function($td){
					return $td.find('input').is(":checked");
				},
				filter:function($td,value){
					return value == $td.find('input').is(":checked");
				}
			}
		}
	});
	
	var $filter = $('#filter');
	$filter.on("change keyup",function(){
		LoomTable.filter("name",$filter.val());
	});
	
	var $employee = $('#employee');
	$employee.on("change",function(){
		if($employee.is(":checked")){
			LoomTable.filter("employee",true);
		}else{
			LoomTable.reset();
		}
	});
	
	var LoomContainer = new loomContainer($('#products'),{
		childSelector:'*',
		fields:{
			price:{
				type:"number",
				getValue:function($td){
					return $td.text().replace('£','');
				}
			}
		}
	});
	
	var $sort = $('#sort');
	$sort.on("change",function(){
		var val = $sort.val().split("-");
		LoomContainer.sort(val[0],val[1]);
	});
	
	var $filterProducts = $('#filter-products');
	$filterProducts.on("change keyup",function(){
		LoomContainer.filter("name",$filterProducts.val());
	});
});

