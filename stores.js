module.exports = function(){
	var express = require('express');
	var router = express.Router();

	function getStores(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Stores", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.stores = results;
			complete();
		});
	}



	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Stores (`hospitalKey`,`productKey`) VALUES (?, ?)";
		var inserts = [req.body.hospitalKeyInput, req.body.productKeyInput];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	            if(error){
	                console.log(JSON.stringify(error))
	                res.write(JSON.stringify(error));
	                res.end();
	            }else{
	                res.redirect('/stores');
	            }
	     });

	});



	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteStores.js"];
		var mysql = req.app.get('mysql');
		getStores(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('stores', context);
			}
		}
	});

	router.delete('/:id', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "DELETE FROM Stores WHERE id = ?";
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