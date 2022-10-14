let button = document.getElementById("submitButton");
let formSubmitted = document.getElementById("formSubmitted");
let namee = document.getElementById("nameEntry");
let email = document.getElementById("phoneEntry");
let phone = document.getElementById("emailEntry");
let message = document.getElementById("message");
let orderButton = document.getElementById("orderButton");
let wishlistButton = document.getElementsByClassName("fa-heart-o");
    button.addEventListener("click",(e)=>
    {   
        // e.preventDefault();
        // const newElement = document.createElement("span");
        if(namee.value == "" || email.value == "" || phone.value == "" || message.value == "")
        {
            formSubmitted.innerHTML = "Incomplete Form";
        }
        else
        {
            formSubmitted.innerHTML = "Form Submitted";
        }
        // button.after("Form Submitted!");
    })
    orderButton.addEventListener("click",(e)=>
    {   
        document.getElementById("Item-section").style.display = "grid";
        document.getElementById("products").style.display = "inline";
        window.scroll(750,750);
    })
    for(let i=0;i<wishlistButton.length;i++)
        wishlistButton[i].addEventListener("click",(e)=>
        {   if(wishlistButton[i].style.color != "red")
                wishlistButton[i].style.color = "red";
            else
                wishlistButton[i].style.color = "black";
        })