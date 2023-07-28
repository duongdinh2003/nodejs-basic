import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
    // logic
    // let data = [];
    // connection.query(
    //     'SELECT * FROM `users` ',
    //     function(err, results, fields) {
    //         // console.log('>>> check mysql');
    //         // console.log(results); // results contains rows returned by server
    //         // console.log(fields); // fields contains extra meta data about results, if available
    //         results.map((row) => { 
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 address: row.address,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName
    //             })
    //         });

    //     });

        const [rows, fields] = await pool.execute('SELECT * FROM users');

        return res.render('index.ejs', { dataUser: rows, test: 'toi la Dinh' });

}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [userId]);
    return res.send(JSON.stringify(user));
}

module.exports = {
    getHomepage, getDetailPage
}