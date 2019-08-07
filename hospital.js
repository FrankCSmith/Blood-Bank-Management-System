module.exports = function(){
	var express = require('express');
	var router = express.Router();



	function getHospitals(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM Hospital", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.hospitals = results;
			complete();
		});
	}

	function getHospital(res, mysql, context, id, complete){
        var sql = "SELECT * FROM Hospital WHERE hospitalID = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.hospital = results[0];
            complete();
        });
    }

    function getHospitalCity(req, res, mysql, context, complete) {
    	var query = "SELECT hospitalID, hospitalName, street, city, state, zipcode, country FROM Hospital WHERE city LIKE " + mysql.pool.escape(req.params.s + '%');
      	console.log(query)

      	mysql.pool.query(query, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.hospitals = results;
            complete();
        });
    }


	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["deleteHospital.js", "searchHospital.js"];
		var mysql = req.app.get('mysql');
		getHospitals(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if(callbackCount >= 1){
				res.render('hospital', context);
			}
		}
	});




router.get('/search/:s', function(req, res){
    var callbackCount = 0;
    var context = {};
    context.jsscripts = ["deleteHospital.js","searchHospital.js"];
    var mysql = req.app.get('mysql');
    getHospitalCity(req, res, mysql, context, complete);
    //getHospitals(res, mysql, context, complete);
    function complete(){
        callbackCount++;
        if(callbackCount >= 1){
            res.render('hospital', context);
        }
    }
});

router.get('/:id', function(req, res){
    callbackCount = 0;
    var context = {};
    context.jsscripts = ["updatehospital.js"];
    var mysql = req.app.get('mysql');
    getHospital(res, mysql, context, req.params.id, complete);
    function complete(){
        callbackCount++;
        if(callbackCount >= 1){
            res.render('update-hospital', context);
        }

    }
});


router.post('/', function(req, res){
    console.log(req.body)
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Hospital (`hospitalName`,`street`,`city`,`state`,`zipcode`,`country`) VALUES (?, ?, ?, ?, ?, ?)";
    var inserts = [req.body.hospitalNameInput, req.body.hospitalStreetInput, req.body.hospitalCityInput, req.body.hospitalStateInput, req.body.hospitalZipcodeInput, req.body.hospitalCountryInput];
    sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/hospital');
            }
     });

});




router.put('/:id', function(req, res){
    var mysql = req.app.get('mysql');
    console.log(req.body)
    console.log(req.params.id)
    var sql = "UPDATE Hospital SET hospitalName=?, street=?, city=?, state=?, zipcode=?, country=? WHERE hospitalID=?";
    var inserts = [req.body.hospitalNameInput, req.body.hospitalStreetInput, req.body.hospitalCityInput, req.body.hospitalStateInput, req.body.hospitalZipcodeInput, req.body.hospitalCountryInput, req.params.id];
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
	var sql = "DELETE FROM Hospital WHERE hospitalID = ?";
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