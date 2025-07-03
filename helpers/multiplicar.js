const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';

        for (let i=1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if (listar) {
            console.clear();
            console.log('================================='.green)
            console.log('         Tabla del:'.green, colors.blue(base))
            console.log('================================='.green)

            console.log(consola);
        }


        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;

            console.log(`tabla-${base}.txt creado`)
        }) */

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
    
    /* return new Promise( (resolve, reject) => {

        let salida = '';

            console.clear();
        console.log('=================================')
        console.log(`         Tabla del ${base}`)
        console.log('=================================')

        for (let i=1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        console.log(salida);

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //    if (err) throw err;
        //
        //    console.log(`tabla-${base}.txt creado`)
        //}) 

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt creado`)
    }) */
    
}

module.exports = {
    crearArchivo
}