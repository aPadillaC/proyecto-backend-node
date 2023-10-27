const bcrypt = require('bcrypt');
const auth = require('../../../auth');
const TABLA = 'auth'

module.exports = (injectecStore) => {

    let store = injectecStore;

    if(!store) {
        store = require('../../../store/dummy');
    }



    // Funcion para logearse
    async function login (username, password) {
        
        const data = await store.query(TABLA, { username: username})

        return bcrypt.compare(password, data.password)
            .then( sonIguales => {
                if(sonIguales === true){
                    // Generar el token
                    return auth.sign(data);
                }
                else{
                    throw new Error('Informacion inválida')
                }
            })
    }




    // Funcion para añadir info de usuario a la tabla Auth
    async function upsert (data) {
        const authData = {
            id: data.id,
        }

        if(data.username){
            authData.username = data.username;
        }


        if(data.password){
            authData.password = await bcrypt.hash(data.password, 5);
        }


        return store.upsert(TABLA, authData)
    }

    return {
        upsert,
        login
    }

};