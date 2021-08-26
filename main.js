function Adduser() {

    User = document.getElementById("UserName").value;

    localStorage.setItem("User",User);

    window.location = "AfterLoginRoom.html";
    
}