const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener("submit", async (e)=>{
    e.preventDefault();
   
    try{

        let object = {
        email:email.value,
        password:password.value
    }

    console.log(object);
    const response = await axios.post("http://localhost:8000/user/login",object)
  alert("You are Login now")
     window.location.href = "../Expense.html";

    }catch(error){
        console.log(error);
        console.log(error.response.data.message);
    }

})
