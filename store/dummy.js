const db = {
    'user': [
        { id: '1', name: 'Antonio' },
    ],
};




// Listado de usuarios
list = async (table) => {
    return db[table]
}




// Ver un usuario
get = async (table, id) => {
    let col = await list(table);
    return col.filter( item => item.id === id)[0] || null;
}




// Añadir un usuario
upsert = async (table, data) => {
    db[collection].push(data)
    return await list(table);
}



// Eliminar un usuario
remove = async (table, id) => {
    return true;
}


module.exports = {
    list,
    get,
    upsert,
    remove
}