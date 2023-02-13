document.querySelector("#logoutBtn").addEventListener("click",()=>{
    fetch("/api/users/logout",{
        method:"DELETE"
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("something went wrong")
        }
    })
})