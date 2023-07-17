const os = require('os');

console.log(`${os.platform}`)
console.log(`${os.totalmem/(1024*1024*1024)}`)
console.log(`${os.freemem/(1024*1024*1024)}`)
const c = os.cpus()
for (const cpu of c) {
    console.log(cpu)   
}