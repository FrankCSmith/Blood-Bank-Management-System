document.addEventListener("DOMContentLoaded", insertHospitalTableRow);
document.addEventListener("DOMContentLoaded", insertSupplierTableRow);
document.addEventListener("DOMContentLoaded", insertBloodProductTableRow);
document.addEventListener("DOMContentLoaded", insertStoresTableRow);
document.addEventListener("DOMContentLoaded", insertAntigenTableRow);
document.addEventListener("DOMContentLoaded", insertAntigenHistoryTableRow);
document.addEventListener("DOMContentLoaded", insertAntibodiesTableRow);

//document.addEventListener("DOMContentLoaded", deleteHospitalTableRow);
//document.addEventListener("DOMContentLoaded", deleteSupplierTableRow);
//document.addEventListener("DOMContentLoaded", deleteBloodProductTableRow);
//document.addEventListener("DOMContentLoaded", deleteStoresTableRow);
//document.addEventListener("DOMContentLoaded", deleteAntigenTableRow);
//document.addEventListener("DOMContentLoaded", deleteAntigenHistoryTableRow);
//document.addEventListener("DOMContentLoaded", deleteAntibodiesTableRow);




function insertHospitalTableRow(){
	document.getElementById('addHospitalBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert1");

		var payload = "hospitalNameInput=" + insert1.elements.hospitalNameInput.value + "&hospitalStreetInput=" + insert1.elements.hospitalStreetInput.value
				 + "&hospitalCityInput=" + insert1.elements.hospitalCityInput.value + "&hospitalStateInput=" + insert1.elements.hospitalStateInput.value 
				 + "&hospitalZipcodeInput=" + insert1.elements.hospitalZipcodeInput.value + "&hospitalCountryInput=" + insert1.elements.hospitalCountryInput.value

		var req = new XMLHttpRequest();

		req.open("GET", "/insertHospital?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("hospitalTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementHospitalName = document.createElement("td");
			tdElementHospitalName.textContent = insert1.elements.hospitalNameInput.value;
			addRow.appendChild(tdElementHospitalName);
			var tdElementStreet = document.createElement("td");
			tdElementStreet.textContent = insert1.elements.hospitalStreetInput.value;
			addRow.appendChild(tdElementStreet);
			var tdElementCity = document.createElement("td");
			tdElementCity.textContent = insert1.elements.hospitalCityInput.value;
			addRow.appendChild(tdElementCity);
			var tdElementState = document.createElement("td");
			tdElementState.textContent = insert1.elements.hospitalStateInput.value;
			addRow.appendChild(tdElementState);
			var tdElementZipcode = document.createElement("td");
			tdElementZipcode.textContent = insert1.elements.hospitalZipcodeInput.value;
			addRow.appendChild(tdElementZipcode);
			var tdElementCountry = document.createElement("td");
			tdElementCountry.textContent = insert1.elements.hospitalCountryInput.value;
			addRow.appendChild(tdElementCountry);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteHospitalTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertHospital?" + payload);
		event.preventDefault();
		location.reload();
	});

}

function insertSupplierTableRow(){
	document.getElementById('addSupplierBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert2");

		var payload = "supplierNameInput=" + insert1.elements.supplierNameInput.value + "&supplierStreetInput=" + insert1.elements.supplierStreetInput.value
				 + "&supplierCityInput=" + insert1.elements.supplierCityInput.value + "&supplierStateInput=" + insert1.elements.supplierStateInput.value 
				 + "&supplierZipcodeInput=" + insert1.elements.supplierZipcodeInput.value + "&supplierCountryInput=" + insert1.elements.supplierCountryInput.value

		var req = new XMLHttpRequest();

		req.open("GET", "/insertSupplier?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("supplierTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementSupplierName = document.createElement("td");
			tdElementSupplierName.textContent = insert1.elements.supplierNameInput.value;
			addRow.appendChild(tdElementSupplierName);
			var tdElementStreet = document.createElement("td");
			tdElementStreet.textContent = insert1.elements.supplierStreetInput.value;
			addRow.appendChild(tdElementStreet);
			var tdElementCity = document.createElement("td");
			tdElementCity.textContent = insert1.elements.supplierCityInput.value;
			addRow.appendChild(tdElementCity);
			var tdElementState = document.createElement("td");
			tdElementState.textContent = insert1.elements.supplierStateInput.value;
			addRow.appendChild(tdElementState);
			var tdElementZipcode = document.createElement("td");
			tdElementZipcode.textContent = insert1.elements.supplierZipcodeInput.value;
			addRow.appendChild(tdElementZipcode);
			var tdElementCountry = document.createElement("td");
			tdElementCountry.textContent = insert1.elements.supplierCountryInput.value;
			addRow.appendChild(tdElementCountry);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteSupplierTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertSupplier?" + payload);
		event.preventDefault();
		location.reload();
	});

}

function insertBloodProductTableRow(){
	document.getElementById('addBloodProductBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert3");

		var payload = "typeProductInput=" + insert1.elements.typeProductInput.value + "&productABORhInput=" + insert1.elements.productABORhInput.value
				 + "&donorUnitIDBarCodeInput=" + insert1.elements.donorUnitIDBarCodeInput.value + "&donorUnitProductCodeInput=" + insert1.elements.donorUnitProductCodeInput.value 
				 + "&unitArrivalInput=" + insert1.elements.unitArrivalInput.value + "&unitExpirationInput=" + insert1.elements.unitExpirationInput.value
				 + "&unitHistoryInput=" + insert1.elements.unitHistoryInput.value + "&hospitalSourceInput=" + insert1.elements.hospitalSourceInput.value
				 + "&supplierSourceInput=" + insert1.elements.supplierSourceInput.value 

		var req = new XMLHttpRequest();

		req.open("GET", "/insertBlood_Product?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("bloodProductTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementType = document.createElement("td");
			tdElementType.textContent = insert1.elements.typeProductInput.value;
			addRow.appendChild(tdElementType);
			var tdElementABORh = document.createElement("td");
			tdElementABORh.textContent = insert1.elements.productABORhInput.value;
			addRow.appendChild(tdElementABORh);
			var tdElementUnitID = document.createElement("td");
			tdElementUnitID.textContent = insert1.elements.donorUnitIDBarCodeInput.value;
			addRow.appendChild(tdElementUnitID);
			var tdElementProductCode = document.createElement("td");
			tdElementProductCode.textContent = insert1.elements.donorUnitProductCodeInput.value;
			addRow.appendChild(tdElementProductCode);
			var tdElementUnitArrival = document.createElement("td");
			tdElementUnitArrival.textContent = insert1.elements.unitArrivalInput.value;
			addRow.appendChild(tdElementUnitArrival);
			var tdElementUnitExpiration = document.createElement("td");
			tdElementUnitExpiration.textContent = insert1.elements.unitExpirationInput.value;
			addRow.appendChild(tdElementUnitExpiration);
			var tdElementUnitHistory = document.createElement("td");
			tdElementUnitHistory.textContent = insert1.elements.unitHistoryInput.value;
			addRow.appendChild(tdElementUnitHistory);
			var tdElementHospitalSource = document.createElement("td");
			tdElementHospitalSource.textContent = insert1.elements.hospitalSourceInput.value;
			addRow.appendChild(tdElementHospitalSource);
			var tdElementSupplierSource = document.createElement("td");
			tdElementSupplierSource.textContent = insert1.elements.supplierSourceInput.value;
			addRow.appendChild(tdElementSupplierSource);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteBloodProductTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertBlood_Product?" + payload);
		event.preventDefault();
		location.reload();
	});

}

function insertStoresTableRow(){
	document.getElementById('addStoresBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert4");

		var payload = "hospitalKeyInput=" + insert1.elements.hospitalKeyInput.value + "&productKeyInput=" + insert1.elements.productKeyInput.value

		var req = new XMLHttpRequest();

		req.open("GET", "/insertStores?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("storesTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementHospitalKey = document.createElement("td");
			tdElementHospitalKey.textContent = insert1.elements.hospitalKeyInput.value;
			addRow.appendChild(tdElementHospitalKey);
			var tdElementProductKey = document.createElement("td");
			tdElementProductKey.textContent = insert1.elements.productKeyInput.value;
			addRow.appendChild(tdElementProductKey);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteStoresTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertStores?" + payload);
		event.preventDefault();
		location.reload();
	});

}

function insertAntigenTableRow(){
	document.getElementById('addAntigenBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert6");

		var payload = "antigenNameInput=" + insert1.elements.antigenNameInput.value + "&antigenSystemInput=" + insert1.elements.antigenSystemInput.value
				 + "&antigenFrequencyInput=" + insert1.elements.antigenFrequencyInput.value + "&dosageInput=" + insert1.elements.dosageInput.value 
		

		var req = new XMLHttpRequest();

		req.open("GET", "/insertAntigen?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("antigenTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementAntigenName = document.createElement("td");
			tdElementAntigenName.textContent = insert1.elements.antigenNameInput.value;
			addRow.appendChild(tdElementAntigenName);
			var tdElementAntigenSystem = document.createElement("td");
			tdElementAntigenSystem.textContent = insert1.elements.antigenSystemInput.value;
			addRow.appendChild(tdElementAntigenSystem);
			var tdElementAntigenFrequency = document.createElement("td");
			tdElementAntigenFrequency.textContent = insert1.elements.antigenFrequencyInput.value;
			addRow.appendChild(tdElementAntigenFrequency);
			var tdElementDosageInput = document.createElement("td");
			tdElementDosageInput.textContent = insert1.elements.dosageInput.value;
			addRow.appendChild(tdElementDosageInput);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteAntigenTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertAntigen?" + payload);
		event.preventDefault();
		location.reload();
	});

}


function insertAntigenHistoryTableRow(){
	document.getElementById('addAntigenHistoryBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert5");

		var payload = "productKeyInput=" + insert1.elements.productKeyInput.value + "&antigenKeyInput=" + insert1.elements.antigenKeyInput.value
				 + "&dateOfHistoryInput=" + insert1.elements.dateOfHistoryInput.value 

		var req = new XMLHttpRequest();

		req.open("GET", "/insertAntigen_History?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("antigenHistoryTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementProductKey = document.createElement("td");
			tdElementProductKey.textContent = insert1.elements.productKeyInput.value;
			addRow.appendChild(tdElementProductKey);
			var tdElementAntigenKey = document.createElement("td");
			tdElementAntigenKey.textContent = insert1.elements.antigenKeyInput.value;
			addRow.appendChild(tdElementAntigenKey);
			var tdElementDateOfHistory = document.createElement("td");
			tdElementDateOfHistory.textContent = insert1.elements.dateOfHistoryInput.value;
			addRow.appendChild(tdElementDateOfHistory);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteAntigenHistoryTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertAntigen_History?" + payload);
		event.preventDefault();
		location.reload();
	});

}

function insertAntibodiesTableRow(){
	document.getElementById('addAntibodiesBtn').addEventListener('click',function(event){
		var insert1 = document.getElementById("insert7");

		var payload = "antibodyNameInput=" + insert1.elements.antibodyNameInput.value + "&immunoglobulinClassInput=" + insert1.elements.immunoglobulinClassInput.value
				 + "&serologyInput=" + insert1.elements.serologyInput.value + "&optimumTemperatureInput=" + insert1.elements.optimumTemperatureInput.value 
				 + "&antigenKeyInput=" + insert1.elements.antigenKeyInput.value 

		var req = new XMLHttpRequest();

		req.open("GET", "/insertAntibodies?" + payload, true);
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.addEventListener('load', function(){
			var response = JSON.parse(req.responseText);
			var id = response.id;
			
			var revisedTable = document.getElementById("antibodyTable");
			var addRow = table.insertRow(-1);
			addRow.setAttribute("id", id);
			
			var tdElementHospitalName = document.createElement("td");
			tdElementHospitalName.textContent = insert1.elements.hospitalNameInput.value;
			addRow.appendChild(tdElementHospitalName);
			var tdElementStreet = document.createElement("td");
			tdElementStreet.textContent = insert1.elements.hospitalStreetInput.value;
			addRow.appendChild(tdElementStreet);
			var tdElementCity = document.createElement("td");
			tdElementCity.textContent = insert1.elements.hospitalCityInput.value;
			addRow.appendChild(tdElementCity);
			var tdElementState = document.createElement("td");
			tdElementState.textContent = insert1.elements.hospitalStateInput.value;
			addRow.appendChild(tdElementState);
			var tdElementZipcode = document.createElement("td");
			tdElementZipcode.textContent = insert1.elements.hospitalZipcodeInput.value;
			addRow.appendChild(tdElementZipcode);
			var tdElementCountry = document.createElement("td");
			tdElementCountry.textContent = insert1.elements.hospitalCountryInput.value;
			addRow.appendChild(tdElementCountry);
			var tdElementUpdate = document.createElement("td");
			var updateButton = document.createElement("button");
			updateButton.textContent = "Update";
			updateButton.setAttribute("onclick", "EditTableRow("+id+")");
			tdElementUpdate.append(updateButton);
			addRow.appendChild(tdElementUpdate);
			var tdElementDelete = document.createElement("td");
			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.setAttribute("onclick", "deleteAntibodiesTableRow("+id+")");
			tdElementDelete.append(deleteButton);
			addRow.appendChild(tdElementDelete);

		});
		req.send("/insertAntibodies?" + payload);
		event.preventDefault();
		location.reload();
	});

}

function deleteHospitalTableRow(id){
	var table = document.getElementById("hospitalTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteHospital?id=" + id, true);
	req.send("/deleteHospital?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}

function deleteSupplierTableRow(id){
	var table = document.getElementById("supplierTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteSupplier?id=" + id, true);
	req.send("/deleteSupplier?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}

function deleteBloodProductTableRow(id){
	var table = document.getElementById("bloodProductTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteBlood_Product?id=" + id, true);
	req.send("/deleteBlood_Product?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}

function deleteStoresTableRow(id){
	var table = document.getElementById("storesTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteStores?id=" + id, true);
	req.send("/deleteStores?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}

function deleteAntigenHistoryTableRow(id){
	var table = document.getElementById("antigenHistoryTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteAntigen_History?id=" + id, true);
	req.send("/deleteAntigen_History?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}

function deleteAntigenTableRow(id){
	var table = document.getElementById("antigenTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteAntigen?id=" + id, true);
	req.send("/deleteAntigen?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}

function deleteAntibodiesTableRow(id){
	var table = document.getElementById("antibodyTable");
	var row = document.getElementById("id");
	table.deleteRow(id);
	var req = new XMLHttpRequest();
	req.open("GET", "/deleteAntibodies?id=" + id, true);
	req.send("/deleteAntibodies?id=" + id);
	event.preventDefault();
	/*location.reload();*/
}
