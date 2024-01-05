
// mobile number validation using regex learnt
function validate() {
    const mobile = 1232435468;
    let re= /^[6-9]\d{9}$/;
    if(re.test(mobile)){
        console.log( "Number is Indian" );
    }else{
        console.log("Number is false");
    }

}
validate();