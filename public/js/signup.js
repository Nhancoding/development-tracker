document.querySelector("#signupForm").addEventListener("submit",e=>{
    e.preventDefault();
    const signupObj = {

        name:document.querySelector("#signupName").value.trim(),
        email:document.querySelector("#signupEmail").value.trim(),
        password:document.querySelector("#signupPassword").value.trim()
    }
    console.log(signupObj)
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        console.log(res)
        if(res.ok){
           location.href="/profile"
        } else {
            alert("There was an error signing up")
        }
    }).catch(err=>{
        console.log(err)
         }

    )
})
