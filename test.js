const greet=require('./app');
if (greet()==="Hello from DevOps"){
    console.log("Test passed");
    Process.exit(0);
}else{
    console.log("Test Failed");
    Process.exit(1);
}
