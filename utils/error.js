// Personalizamos el error ( message y code )

function err(message, code) {
    let e = new Error(message);

    if (code) {
        e.status = code;
    }

    return e;
}

module.exports = err;