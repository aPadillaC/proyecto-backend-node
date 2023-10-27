const db = {
    'user': [
        { id: '1', name: 'Antonio' },
    ],
};




// Listado de usuarios
async function list(table){
    return db[table] || [];
}




// Ver un usuario
async function get (table, id)  {
    let col = await list(table);
    return col.filter( item => item.id === id)[0] || null;
}




// Añadir un usuario
async function upsert(table, data) {
    if(!db[table]) {
        db[table] = [];
    }
    db[table].push(data);

    console.log(db);
}



// Eliminar un usuario
async function remove (table, id) {
    return true;
}



async function query (table, q) {

    let col = await list(table);
    
    // guardamos en keys el valor de la propiedad que buscamos
    let keys = Object.keys(q);
    let key = keys[0]

    return col.filter( item => item[key] === q[key])[0] || null;
}


module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}