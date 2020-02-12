function placeOrder (num,callback)
{
    console.log("OrderReceived:",num);
    delivary(num,callback);
}

function delivary(num,callback){
    setTimeout(()=>{
        console.log("delivared:",num)
    })
    if(typeof callback == "function")
    callback();
}

placeOrder(1,()=>{
    setTimeout(()=>{
        placeOrder(2);
    },2000)
    setTimeout(()=>{
        placeOrder(3,()=>{
            setTimeout(()=>{
                placeOrder(4);
            },4000)
    
        });
    },3000)
    
});