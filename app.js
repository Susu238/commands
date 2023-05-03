const yargs = require('yargs');


const commands = require("./commands.js")

const command= yargs.argv._[0]
const id = yargs.argv.id;
const fname = yargs.argv.fname;
const lname = yargs.argv.lname;
const age = yargs.argv.age;
const city = yargs.city;

if (command==="add"){

    if(id && fname && lname && age && city){
        command.add(id,fname,lname,age,city)
    }
}else if (command==="delete"){

}else if (command ==="read"){

}else if (command==="list"){

}else{
    console.log("this is not supported")
}
yargs.command({
    command:"delete",
    describe :"to delet an item",

    
    handler:(x)=>{
        commands.deletedData (x.id )
    }
})

console.log(yargs.argv)
////////////////////////////////////////////////////
yargs.command({
    command:"read",
    describe:"read data",
    builder:{
        id:{
            describe:"this is id desc in read command",
            demandOption:true,
            type:"string"
        },
        handler:(x)=>{
            commands.readData(x.id)
        }
        
        
    }
})
console.log(yargs.argv)
/////////////////////////////////////////
yargs.command ({
    command : "list",
     describe : "list data",
      handler : ()=> {
        commands.listData()
      }
   })
 
   console.log(yargs.argv)
 