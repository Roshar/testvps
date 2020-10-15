const mysql = require('mysql2/promise')


/**
 * ######################  SELECT ROWS IN SQL #################################
 * ############################################################################
 */

/** GET ALL AREA  */

exports.getAllArea = async function () {
   try{
      const dbh = await mysql.createConnection({
         host: process.env.DATABASE_HOST,
         port: process.env.DATABASE_PORT,
         user: process.env.DATABASE_USER,
         database: process.env.DATABASE,
         password: process.env.DATABASE_PASSWORD,
         socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
      })

      const [res, fields] = await dbh.execute('SELECT * FROM area')

      dbh.end()
      return res;
   }catch(e) {
      console.log(e.message)
   }
}


 