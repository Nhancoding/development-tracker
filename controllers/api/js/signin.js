document.querySelector("#signinForm").addEventListener("submit",e=>{
    e.preventDefault();
    const signinObj = {
        email:document.querySelector("#signinEmail").value,
        password:document.querySelector("#signinPassword").value,
    }
    console.log(signinObj)
})

fetch("/api/users/signin",{
    method:"POST",
    body:JSON.stringify(signinObj),
    headers:{
        "Content-Type":"application/json"
    }
}).then(res=>{
    if(res.ok){
        location.reload()
    } else {
        alert("trumpet sound")
    }
})