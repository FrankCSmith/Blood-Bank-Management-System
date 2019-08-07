module.exports = function(){
	var express = require('express');
	var router = express.Router();


	function getBlood_Products(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Blood_Product", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.blood_products = results;
			complete();
		});
	}



	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Blood_Product (`typeProduct`,`productABORh`,`donorUnitIDBarCode`,`donorUnitProductCode`,`unitArrival`,`unitExpiration`,`unitHistory`,`hospitalSource`,`supplierSource`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
		var inserts = [req.body.typeProductInput, req.body.productABORhInput, req.body.donorUnitIDBarCodeInput, req.body.donorUnitProductCodeInput, req.body.unitArrivalInput, req.body.unitExpirationInput, req.body.unitHistoryInput, req.body.hospitalSourceInput, req.body.supplierSourceInput];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	            if(error){
	                console.log(JSON.stringify(error))
	                res.write(JSON.stringify(error));
	                res.end();
	            }else{
	                res.redirect('/blood_product');
	            }
	     });

	});




	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteBlood_Product.js"];
		var mysql = req.app.get('mysql');
		getBlood_Products(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('blood_product', context);
			}
		}
	});

	router.delete('/:id', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "DELETE FROM Blood_Product WHERE productID = ?";
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