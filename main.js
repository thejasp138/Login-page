

login=()=>{
    let username=uname.value
    let password=pswd.value


    if(!username || !password){
        alert("Invalid Credentials!! Login Failed")
    }
    else{
        localStorage.setItem("username",username)
     

        console.log(`Username:${username},Password:${password}`)
        window.location="dashbord.html"
    }
}