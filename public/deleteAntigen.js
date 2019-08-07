function deleteAntigen(id){
	$.ajax({
		url: '/antigen/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(true);
		}
	})
};