function searchHospitalByCity(){
	var hospitalCityString = document.getElementById('hospitalCityString').value;
	window.location = "/hospital/search/" + encodeURI(hospitalCityString);
}