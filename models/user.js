let db = require('../util/db');

exports.createUser = (data) => {
    let sql = `Insert into user (firstname, lastname, email, password) values (
        '${data.firstname}',
        '${data.lastname}', 
        '${data.email}', 
        '${data.password}'
    )`;
    return db.execute(sql);
}

exports.registerUser = (data) => {
    let sql = `UPDATE user SET 
        imageUrl = '${data.imagerrl}', 
        about = '${data.about}', 
        dob = '${data.dob}', 
        country = '${data.country}'
        WHERE
            id = ${data.id}
        ;
    `;
    return db.execute(sql);
}

exports.addLike = id => {
    let sql = `UPDATE user SET 
        likes = likes + 1
        WHERE
            id = ${id}
        ;
    `;
    return db.execute(sql);
}

exports.getUserByEmail = email => {
   let sql = ` SELECT * FROM user
    WHERE email = '${email}'
   `
   return db.execute(sql);
}

exports.getUserById = id => {
    let sql = ` SELECT id, firstname, lastname, email, imageurl, about, country, postcount, likes FROM user
     WHERE id = '${id}'
    `
    return db.execute(sql);
 }

 exports.getUserForMessage = id => {
    let sql = ` SELECT imageurl, firstname, lastname FROM user
    WHERE id = '${id}'
   `
   return db.execute(sql);
 }