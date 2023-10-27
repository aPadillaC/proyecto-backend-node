// Archivo en el que exportamos al controller una funcion

const nanoid = require('nanoid');
const auth = require('../auth');

const TABLA = 'user';

module.exports = (injectecStore) => {

    let store = injectecStore;

    if(!store) {
        store = require('../../../store/dummy');
    }




    // Listado de usuarios
    list = () => {
        return store.list(TABLA)
    }




    // Ver un usuario
    get = (id) => {
        return store.get(TABLA, id)
    }




    // Añadir un usuario
    async function upsert (body) {
        const user = {
            name: body.name,
            username: body.username
        }

        if (body.id) {
            user.id = body.id
        }
        else {
            user.id = nanoid();
        }

        if(body.password || body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password
            })
        }
        return store.upsert(TABLA, user)
    }




    // Eliminar un usuario
    remove = (id) => {
        return store.remove(TABLA, id)
    }

    return {
        list,
        get,
        upsert,
        remove
    }
}
