const {JSON}= require("sequelize");

document.querySelector("#projectForm").addEventListener("submit",e=>{
    e.preventDefault();
    const projectData = {
        name:document.querySelector("#pname").value,
        deadline:document.querySelector("#pdeadline"),
        description:document.querySelector("#pdescription").value,
        
    }
    console.log(projectData)

    fetch("/api/projects",{
        method:"POST",
        body:JSON.stringify(projectData),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(projectId=>{return projectId.json()
    //  store the ID in local storage
    // could need stringify project id after ""
    // JSON.stringify(projectId)
    }).then(localStorage.setItem("projectId", projectId))
    .catch(err=>console.log(err))
})

document.querySelector('#addContract').addEventListener('click', e=>{
    e.preventDefault();
    const contractData = {
        name:document.querySelector('#cname').value.trim(),
        description:document.querySelector("#cdescription").value.trim(),
        cost:document.querySelector("#ccost").value.trim(),
        projectId:localStorage.getItem("projectId")
        // JSON.parse(^)
    }
    console.log(contractData)
    // add the project ID in fetch"" or in body
    // local storage .get
    fetch("/api/contracts",{
        method:"POST",
        body:JSON.stringify(contractData),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("not working")
        }
    })
})
