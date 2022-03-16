const tbody = document.getElementById("tbodyUserList");
// const loading = document.getElementById("loading");//Extension.js (bu sayfa html içine import edildi!) içinde hazır olan fonksiyonları kullanacağız gerek kalmadı.

window.onload = () => {
    // alert(`Your apiKey is: "${DecryptStringAES(localStorage.getItem("apiKey"))}"`);
    getApiUserList();
    setInterval(getApiUserList, 5000); //
}
const getApiUserList = async () => {
    showLoading();
    //axios (npm install ile axios indirilecek veya cdn ile <script src="https://unpkg.com/axios/dist/axios.min.js"></script> gibi html içine eklenecek!!!)//
    try {
        // const responseData = await axios("https://reqres.in/api/users?page=1");//aşağıdaki yöntem daha kullanışlı diye bu yöntemi kullanmadık.
        const responseData = await axios({
            url:"https://reqres.in/api/users?page=1",
            method:"get", // burayı "post" yaparak ve aşağıya datayı ekleyerek post yapabiliriz.
            // data:apiKey
        });

        const {data: userListArray } = responseData.data;
        console.log(userListArray);
        if (userListArray.length === 0) {
            alert("userlist not found");
            removeLoading();
        } else {
            tbody.innerHTML = "";
            userListArray.forEach(customer => {
                tbody.innerHTML += `
                    <tr>
                        <td>
                            ${customer.id}
                        </td>
                        <td>
                            <img src="${customer.avatar}">
                        </td>
                        <td>
                            ${customer.email}
                        </td>
                        <td>
                            ${customer.first_name}
                        </td>
                        <td>
                            ${customer.last_name}
                        </td>
                    </tr>`;
            });
        }

    } catch (error) {
        alert(error);
        //send errors to api and database (errorLogs table) (gerçek hayatta hataları depolamk bu şekilde yapılır. oluşan hatalar incelemek için sonra)
        // postErrorLog("userList", "getApiUserList", error);
        removeLoading();
    }
    removeLoading();





}



















// const tbody = document.getElementById("tbodyUserList");

// window.onload = () => {
//     alert("Your apiKey is: " $DecryptStringAES (localStorage.setItem("apikey")));
//     getApiUserList();
//     setInterval(getApiUserList, 5000);
// }

// const getApiUserList = async () => {
//     showLoading();
//     //////axios
//     try {
//         const responseData = await axios("https://reqres.in/api/users?page=1");
//         const { data: userListArray } = responseData.data;
//         console.log(userListArray);
//         if(userListArray.length === 0){
//             alert("userlist not found");
//             removeLoading();
//         }
//         else{
//             tbody.innerHTML = "";
//             userListArray.forEach(customer => {
//                 tbody.innerHTML += `
//             <tr>
//                 <td>
// 					${customer.id}
//                 </td>
//                 <td>
// 					<img src="${customer.avatar}">
//                 </td>
//                 <td>
//                     ${customer.email}
//                 </td>
//                 <td>
//                     ${customer.first_name}
//                 </td>
//                 <td>
//                     ${customer.last_name}
//                 </td>
//             </tr>`;
//             });
//             removeLoading();
//         }
//     }
//     catch (error) {
//         alert(error);
//         //send errors to api and database (errorLogs table)
//         // postErrorLog("userList", "getApiUserList", error);
//         removeLoading();
//     }
// }