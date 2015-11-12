$(document).ready(function(){
	$('#submit').click(function(){
		var name = $('#name').val();
		var lat = $('#latitude').val();
		var longt = $('#longitude').val();
		var tourType = []
		
		if($('#general').is(':checked'))
			tourType.push('general');
		
		if($('#concrete').is(':checked'))
			tourType.push('concrete');
		
		if($('#timber').is(':checked'))
			tourType.push('timber');
		
		if($('#connections').is(':checked'))
			tourType.push('connections');
		
		if($('#steel').is(':checked'))
			tourType.push('steel')
		
		if($('#lateral').is(':checked'))
			tourType.push('lateral');
		
		if($('#short').is(':checked'))
			tourType.push('short');
	});
});