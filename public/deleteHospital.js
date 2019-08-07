function deleteHospital(id){
	$.ajax({
		url: '/hospital/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(true);
		}
	})
};