module.exports = function(){
	var express = require('express');
	var router = express.Router();

	function getAntigens(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Antigen", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.antigens = results;
			complete();
		});
	}




	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Antigen (`antigenName`,`antigenSystem`,`antigenFrequency`,`dosage`) VALUES (?, ?, ?, ?)";
		var inserts = [req.body.antigenNameInput, req.body.antigenSystemInput, req.body.antigenFrequencyInput, req.body.dosageInput];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	            if(error){
	                console.log(JSON.stringify(error))
	                res.write(JSON.stringify(error));
	                res.end();
	            }else{
	                res.redirect('/antigen');
	            }
	     });

	});




	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteAntigen.js"];
		var mysql = req.app.get('mysql');
		getAntigens(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('antigen', context);
			}
		}
	});

	router.delete('/:id', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "DELETE FROM Antigen WHERE antigenID = ?";
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