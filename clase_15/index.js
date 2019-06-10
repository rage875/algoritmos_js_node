// Crea una carpeta llamada clase-15, inicia un repositorio y un proyecto de node JS
// Crea un archivo llamado index.js
// Revisa la documentación de process
// Escribe un script donde obtengas información del proceso actual:
// 1.- memoria, 
// 2.- directorio de ejecución
// 3.- variables de entorno
// 4.- cpu utilizado e imprimas el resultado en pantalla
const processInfo = {
    memoryUsage : process.memoryUsage(),
    executionPath : process.execPath,
    enviromentVar : process.env,
    cpuUsage : function(elapsedTime){
        const startUsage = process.cpuUsage()
        // spin CPU for <elapsed time> in milliseconds>
        const now = Date.now()
        while(Date.now() - now < elapsedTime)
        return process.cpuUsage(startUsage)
    }
}

console.log(processInfo)
console.log(processInfo.cpuUsage(500))

