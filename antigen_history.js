module.exports = function(){
	var express = require('express');
	var router = express.Router();


	function getAntigen_Histories(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Antigen_History", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.antigen_histories = results;
			complete();
		});
	}





	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Antigen_History (`productKey`,`antigenKey`,`dateOfHistory`) VALUES (?, ?, ?)";
		var inserts = [req.body.productKeyInput, req.body.antigenKeyInput, req.body.dateOfHistoryInput];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	            if(error){
	                console.log(JSON.stringify(error))
	                res.write(JSON.stringify(error));
	                res.end();
	            }else{
	                res.redirect('/antigen_history');
	            }
	     });

	});





	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteAntigen_History.js"];
		var mysql = req.app.get('mysql');
		getAntigen_Histories(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('antigen_history', context);
			}
		}
	});


	router.delete('/:id', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "DELETE FROM Antigen_History WHERE antigenHistoryID = ?";
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
