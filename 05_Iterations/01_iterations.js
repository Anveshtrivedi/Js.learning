for(let i=1; i<=10; i++) {
   //console.log(`Outer loop value: ${i}`);
   for(let j=1;j<=10;j++){
   // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i+ '*' + j + '=' + i*j);
   }
}
let myArray = ["flash", "superman", "batman", "wonderwoman"];
for(let i=0; i<myArray.length; i++){
   // console.log(myArray[i]);
}


// break and continue

for(let i=1; i<=20; i++){
    if(i===5){
       // console.log(`Detected 5, exiting the loop`);
        // break
        continue
    }
 console.log(`Value of i is: ${i}`);
}