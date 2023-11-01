let coin=prompt("enter only  head or tail");
document.write(coin  +"<br>"+"<br>");
const result=new Promise ((resolve,reject)=>{

    
    if(coin=="head"){
        
        resolve()
    }
    else if (coin=="tail"){
        
        reject()
    }
    else{
        document.write("enter input correctly")
    }
})
    result.then(head).catch(tail);
    function head(){
        document.write("the tose is head , its success")
    }
    function tail(){
        document.write("the tose is tail , its fail ")
    }
    
