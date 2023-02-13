document.querySelector("#loginForm").addEventListener("submit",e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#loginEmail").value.trim(),
        password:document.querySelector("#loginPassword").value.trim()
    }
    console.log(loginObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/profile"
        } else {
            alert("There was a problem logging in")
        }
    })
})
