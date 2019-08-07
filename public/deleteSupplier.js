function deleteSupplier(id){
	$.ajax({
		url: '/supplier/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(true);
		}
	})
};