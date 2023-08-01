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

let createNewUser = async (req, res) => {
    // console.log('check req:', req.body);
    let { firstName, lastName, email, address } = req.body;
    // let firstName = req.body.firstName;
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
        [firstName, lastName, email, address]);

    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [id]);
    return res.render('update.ejs', { dataUser: user[0] }); // x <- y
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
    [firstName, lastName, email, address, id]);
    // console.log('check request: ', req.body);
    return res.redirect('/');
}

module.exports = {
    getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}