function placeOrder (num,time,callback)
{
    console.log("OrderReceived:",num);
    delivary(num,time,callback);
}

function delivary(num,time,callback){
    setTimeout(()=>{
        console.log("delivared:",num)
    },time)
    if(typeof callback == "function")
    callback();
}

placeOrder(1,5000,()=>{
    placeOrder(2,4000,()=>{
        placeOrder(3,1000,()=>{
            placeOrder(4,2000);
        });
    });
});