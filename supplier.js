module.exports = function(){
	var express = require('express');
	var router = express.Router();

	function getSuppliers(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Supplier", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.suppliers = results;
			complete();
		});
	}


	function getSupplier(res, mysql, context, id, complete){
        var sql = "SELECT * FROM Supplier WHERE supplierID = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.supplier = results[0];
            complete();
        });
    }





	router.post('/', function(req, res){
		console.log(req.body)
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO Supplier (`supplierName`,`street`,`city`,`state`,`zipcode`,`country`) VALUES (?, ?, ?, ?, ?, ?)";
		var inserts = [req.body.supplierNameInput, req.body.supplierStreetInput, req.body.supplierCityInput, req.body.supplierStateInput, req.body.supplierZipcodeInput, req.body.supplierCountryInput];
		sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	            if(error){
	                console.log(JSON.stringify(error))
	                res.write(JSON.stringify(error));
	                res.end();
	            }else{
	                res.redirect('/supplier');
	            }
	     });

	});

	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteSupplier.js"];
		var mysql = req.app.get('mysql');
		getSuppliers(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('supplier', context);
			}
		}
	});


	router.get('/:id', function(req, res){
	    callbackCount = 0;
	    var context = {};
	    context.jsscripts = ["updateSupplier.js"];
	    var mysql = req.app.get('mysql');
	    getSupplier(res, mysql, context, req.params.id, complete);
	    function complete(){
	        callbackCount++;
	        if(callbackCount >= 1){
	            res.render('update-supplier', context);
	        }

	    }
	});


	router.put('/:id', function(req, res){
	    var mysql = req.app.get('mysql');
	    console.log(req.body)
	    console.log(req.params.id)
	    var sql = "UPDATE Supplier SET supplierName=?, street=?, city=?, state=?, zipcode=?, country=? WHERE supplierID=?";
	    var inserts = [req.body.supplierNameInput, req.body.supplierStreetInput, req.body.supplierCityInput, req.body.supplierStateInput, req.body.supplierZipcodeInput, req.body.supplierCountryInput, req.params.id];
	    sql = mysql.pool.query(sql,inserts,function(error, results, fields){
	        if(error){
	            console.log(error)
	            res.write(JSON.stringify(error));
	            res.end();
	        }else{
	            res.status(200);
	            res.end();
	        }
	    });
	});
	router.delete('/:id', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "DELETE FROM Supplier WHERE supplierID = ?";
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