const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })

.command('actualizar', 'Actualiza el estado de un elemento por hacer', {
    descripcion,
    completado,
})

.command('borrar', 'Borra una tarea', {
        descripcion,
    })
    .help()
    .argv;







module.exports = {
    argv
}