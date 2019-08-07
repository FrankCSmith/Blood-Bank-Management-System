function deleteAntibody(id){
	$.ajax({
		url: '/antibody/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(true);
		}
	})
};