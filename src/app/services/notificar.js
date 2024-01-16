const nodemailer = require ('nodemailer');

// Exporta la función enviarMail para que esté disponible fuera de este archivo
module.exports = {
    enviarMail: async function() {

    
    const config = {
        host : 'smtp.gmail.com',
        port : 587,
        auth : {
            user :'mikeyjaime99@gmail.com',
            pass : 'blyemhetcacieosr'
        }
    }

    const mensaje= {
        from : 'mikeyjaime99@gmail.com',
        to : 'marisol280602@hotmail.com',
        subject : 'Correo prueba',
        text : 'Hola gracias por su compra en Gusteau'
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info);
    }
}
enviarMail();