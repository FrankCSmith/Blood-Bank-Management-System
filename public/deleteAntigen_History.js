function deleteAntigen_History(id){
	$.ajax({
		url: '/antigen_history/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(true);
		}
	})
};