document.querySelector("#signout").addEventListener("click",()=>{
    fetch("/api/users/signout",{
        method:"DELETE"
    }).then(res=>{
        if(res.ok){
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})