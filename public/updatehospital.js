function updateHospital(id){
	$.ajax({
		url: '/hospital/' + id,
		type: 'PUT',
		data: $('#update-hospital').serialize(),
		success: function(result){
			window.location.replace("./");
		}
	})
};