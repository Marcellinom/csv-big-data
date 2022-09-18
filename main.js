import { createReadStream } from 'fs';
import readline from 'readline'

async function run(num, name) {
    return new Promise((resolve, reject) => {
        let stream = createReadStream(`./datas/tokped-${num}.csv`, {
            flags: 'r',
            encoding: 'utf-8',
            fd: null,
            bufferSize: 64 * 1024
        })
        let rl = readline.createInterface(stream)
        rl.on('line', function(line) {
            if (line.includes(name)) {
                rl.close()
                stream.destroy()
                resolve(line)
            }
        });

        stream.on('error', function(){
            resolve('Error', null);
        });
    })
}
var arr = []
for (let i = 0; i <= 91; i++) arr.push(run(i, 'Reza Maranelo'))
const invert  = p  => new Promise((res, rej) => p.then(rej, res));
const firstOf = ps => invert(Promise.all(ps.map(invert)));

console.time('run time:')
console.log(await firstOf(arr))
console.timeEnd('run time:')