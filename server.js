var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));

var handlebars = require('express-handlebars').create({defaultLayout:'index'});


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 6420));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	
	mysql.pool.query('SELECT * FROM Hospital', function(err,results,fields){
		if(err) throw err;
        console.log(results);
		
		res.render('hospital', {
        	results: results
        });
	});
});

app.get('/insertHospital',function(req,res,next){
	mysql.pool.query("INSERT INTO Hospital (`hospitalName`,`street`,`city`,`state`,`zipcode`,`country`) VALUES (?, ?, ?, ?, ?, ?)", 
		[req.query.hospitalNameInput, req.query.hospitalStreetInput, req.query.hospitalCityInput, req.query.hospitalStateInput, req.query.hospitalZipcodeInput, req.query.hospitalCountryInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Hospital', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.get('/supplier', function(req, res){
	
	mysql.pool.query('SELECT * FROM Supplier', function(err,results,fields){
		if(err)throw err;
        console.log(results);
		
		res.render('supplier', {
        	results: results
        });
	});
	
});

app.get('/insertSupplier',function(req,res,next){
	mysql.pool.query("INSERT INTO Supplier (`supplierName`,`street`,`city`,`state`,`zipcode`,`country`) VALUES (?, ?, ?, ?, ?, ?)", 
		[req.query.supplierNameInput, req.query.supplierStreetInput, req.query.supplierCityInput, req.query.supplierStateInput, req.query.supplierZipcodeInput, req.query.supplierCountryInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Supplier', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.get('/blood_product', function(req, res){

	mysql.pool.query('SELECT * FROM Blood_Product', function(err,results,fields){
		if(err)throw err;
        console.log(results);
		
		res.render('blood_product', {
        	results: results
        });
	});
	
});

app.get('/insertBlood_Product',function(req,res,next){
	mysql.pool.query("INSERT INTO Blood_Product (`typeProduct`,`productABORh`,`donorUnitIDBarCode`,`donorUnitProductCode`,`unitArrival`,`unitExpiration`,`unitHistory`,`hospitalSource`,`supplierSource`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
		[req.query.productTypeInput, req.query.productABORhInput, req.query.donorUnitIDBarCodeInput, req.query.donorUnitProductCodeInput, req.query.unitArrivalInput, req.query.unitExpirationInput, req.query.unitHistoryInput, req.query.hospitalSourceInput, req.query.supplierSourceInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Blood_Product', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.get('/antigen_history', function(req, res){

	mysql.pool.query('SELECT * FROM Antigen_History', function(err,results,fields){
		if(err)throw err;
        console.log(results);
		
		res.render('antigen_history', {
        	results: results
        });
	});
	
});

app.get('/insertAntigen_History',function(req,res,next){
	mysql.pool.query("INSERT INTO Antigen_History (`productKey`,`antigenKey`,`dateOfHistory`) VALUES (?, ?, ?)", 
		[req.query.productKeyInput, req.query.antigenKeyInput, req.query.dateOfHistoryInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Antigen_History', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.get('/stores', function(req, res){
	
	mysql.pool.query('SELECT * FROM Stores', function(err,results,fields){
		if(err)throw err;
        console.log(results);
		
		res.render('stores', {
        	results: results
        });
	});
	
});

app.get('/insertStores',function(req,res,next){
	mysql.pool.query("INSERT INTO Stores (`hospitalKey`,`productKey`) VALUES (?, ?)", 
		[req.query.hospitalKeyInput, req.query.productKeyInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Stores', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.get('/antigen', function(req, res){
	
	mysql.pool.query('SELECT * FROM Antigen', function(err,results,fields){
		if(err)throw err;
        console.log(results);
		
		res.render('antigen', {
        	results: results
        });
	});
	
});

app.get('/insertAntigen',function(req,res,next){
	mysql.pool.query("INSERT INTO Antigen (`antigenName`,`antigenSystem`,`antigenFrequency`,`dosage`) VALUES (?, ?, ?, ?)", 
		[req.query.antigenNameInput, req.query.antigenSystemInput, req.query.antigenFrequencyInput, req.query.dosageInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Antigen', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.get('/antibody', function(req, res){

	mysql.pool.query('SELECT * FROM Antibodies', function(err,results,fields){
		if(err)throw err;
        console.log(results);
		
		res.render('antibody', {
        	results: results
        });
	});
	
});

app.get('/insertAntibodies',function(req,res,next){
	mysql.pool.query("INSERT INTO Antibodies (`antibodyName`,`immunoglobulinClass`,`serology`,`optimumTemperature`,`antigenKey`) VALUES (?, ?, ?, ?, ?)", 
		[req.query.antibodyNameInput, req.query.immunoglobulinClassInput, req.query.serologyInput, req.query.optimumTemperatureInput, req.query.antigenKeyInput], function(err,result){
		if(err){
			next(err);
			return;
		}
		mysql.pool.query('SELECT * FROM Antibodies', function(err,rows,fields){
			if(err){
				next(err);
				return;
			}
			res.send(rows[rows.length - 1]);
		});

	});
});

app.use(function(req, res){
	res.status(404);
	res.render('404');
})

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
})

app.listen(app.get('port'), function(){
	console.log('Server started on port ' +app.get('port'))

});
