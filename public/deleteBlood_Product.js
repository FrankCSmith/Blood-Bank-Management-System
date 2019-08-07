function deleteBlood_Product(id){
	$.ajax({
		url: '/blood_product/' + id,
		type: 'DELETE',
		success: function(result){
			window.location.reload(true);
		}
	})
};