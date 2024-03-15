//OS Module
const os= require('os');
const userInfo= os.userInfo();
console.log(userInfo);
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOSInfo={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
};
console.log(currentOSInfo);
//Path Module
const path= require('path');
const subfolderfilepath=path.join(__dirname,'subfolder','test.txt');
console.log(subfolderfilepath);
const basename= path.basename(subfolderfilepath);
console.log(basename);
//fs module
const {readFileSync, writeFileSync}=require('fs');
const first= readFileSync('./subfolder/test.txt','utf8');

console.log(first.charAt(5));
writeFileSync(
    './subfolder/newfile.txt',
    `\nHere is the result: ${first}`,
    {flag:'a'}
)
//fs readfile, writefile
const {readFile,writeFile}= require('fs');
readFile('./subfolder/first.txt','utf8',(err, res)=>{
    if(err){
        return ;
    }
    const first= res;
    readFile('./subfolder/second.txt','utf8',(err, res)=>{
        if(err){
            return ;
        }
        const second= res;
    writeFile(
        './subfolder/newfile.txt',
        `Here is the result: ${first}, ${second}`,
        (err, res)=>{
            if(err){
                return
            } 

        }
    )
    }
)
    }
)