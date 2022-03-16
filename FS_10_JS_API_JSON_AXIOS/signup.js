const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const sbmtButton = document.querySelector("#submit");

window.addEventListener("load", ()=>{
    mail.value = "eve.holt@reqres.in";
    password.value = "pistol";
});

sbmtButton.addEventListener("click", e =>{
    postCustumerRegister();
})
// console.log(postCustomerRegister);// aşağıda tanımlanacak

const postCustumerRegister = async() =>{
    // alert("customer data sended");
    const bodyData = {
        email:mail.value,
        password:password.value
    };
    // console.log(JSON.stringify(bodyData)); //axios da gerek yok buna!!
    // fetch yapsa idik bu şekilde yazacaktık stringfy yapmak zorundayız!
    console.log(bodyData);

    try {
        showLoading();
        const response = await axios({
            url:"https://reqres.in/api/register",
            method:"post",
            data:bodyData
        });
        console.log(response);
        const {data:userData} = response;
        console.log(userData);
        if(userData.token == undefined){
            alert("undefined");
            removeLoading();
        }
        else{
            localStorage.setItem("baseUrl", EncryptStringAES("https://reqres.in"));
            localStorage.setItem("apiKey", EncryptStringAES(userData.token));
            removeLoading();
            window.location.href = "userList.html";
        }
    }   
    catch (error) {
        alert(error);
        removeLoading();
    }
    
}    