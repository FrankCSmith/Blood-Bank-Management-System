module.exports = function(){
	var express = require('express');
	var router = express.Router();



	function getAntibodies(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Antibodies", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.antibodies = results;
			complete();
		});
	}





	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Antibodies (`antibodyName`,`immunoglobulinClass`,`serology`,`optimumTemperature`,`antigenKey`) VALUES (?, ?, ?, ?, ?)";
		var inserts = [req.body.antibodyNameInput, req.body.immunoglobulinClassInput, req.body.serologyInput, req.body.optimumTemperatureInput, req.body.antigenKeyInput];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	            if(error){
	                console.log(JSON.stringify(error))
	                res.write(JSON.stringify(error));
	                res.end();
	            }else{
	                res.redirect('/antibody');
	            }
	     });

	});




	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteAntibody.js"];
		var mysql = req.app.get('mysql');
		getAntibodies(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('antibody', context);
			}
		}
	});


	router.delete('/:id', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "DELETE FROM Antibodies WHERE antibodyID = ?";
		var inserts = [req.params.id];
		sql = mysql.pool.query(sql, inserts, function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.status(400);
				res.end();
			}else{
				res.status(202).end();
			}
		})
	})







	return router;
}();