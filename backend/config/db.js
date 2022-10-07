/*
 * Debug
 */
const debug = require('debug')('AMAZON::sql.modules');

/*
 * Modules
 */
const mysql = require('mysql');
var sql = require("mssql");


const Promise = require('promise');
/* const logFunction = require('../log/log.functions');
 */

let method = {
    query: function(sentence) {

        let promise = new Promise(function(resolve, reject) {

            let connection = mysql.createConnection({
                host: '15.0.0.4',
                user: 'user',
                password: 'password',
                port: '3306',
            });

            connection.connect();
            
            connection.query(sentence, function(error, results, fields) {
                if (error) {

                    /**
                     * Log
                     */
                    var f = new Date();
                    var ff = f.getDate() + ' ' + f.getMonth() + ' ' + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ' -> ';
                    console.log(ff + 'Error consulta mysql: ' + sentence);

                    connection.end();
                    reject(error);
                }

                connection.end();
                resolve({ results: results, fields: fields });
            });

        })

        return promise;

    },


    queryServer: function(sentence){
       
           let promise = new Promise((resolve, reject) =>{

            var config = {
                server: '10.0.0.210',  
                authentication: {
                    type: 'default',
                    options: {
                        userName: 'sa', 
                        password: 'ii#dm$sl'  
                    }
                },
                options: {
                    encrypt: false,
                    database: 'Inase'  
                }
            };

            sql.connect(config,function(err){
                if (err) {
                    console.log(err);
                }

                var request = new sql.Request();
                request.query(sentence, function (err, recordset) {
            
                    if (err) console.log(err)
        
                    // send records as a response
                    
                    resolve({ results: recordset });
                    
                });

            })

           } )

           
        return promise




    }
}



module.exports = method;




 