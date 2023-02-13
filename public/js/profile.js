csm-profile-partials

document.querySelector("#edit-profile").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username : document.querySelector("#editUsername").value
    }
    fetch(`/api/users/editprofile`,{
        method:"PUT",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("error")
        }
    })
})

document.querySelector("#show-edit-form").addEventListener("click",e=>{
    document.querySelector("#edit-profile").classList.remove("hide");
    document.querySelector(".profile-data").classList.add("hide");
})
 dev
