
const TABLA = 'auth'

module.exports = (injectecStore) => {

    let store = injectecStore;

    if(!store) {
        store = require('../../../store/dummy');
    }



    upsert = (data) => {
        const authData = {
            id: data.id,
        }

        if(data.username){
            authData.username = data.username;
        }


        if(data.password){
            authData.password = data.password;
        }


        return store.upsert(TABLA, authData)
    }

    return {
        upsert,
    }

};