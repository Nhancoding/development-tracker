const addedContracts = [];

document.querySelector("#projectForm").addEventListener("submit",e=>{
    e.preventDefault();
    const projectData = {
        name:document.querySelector("#pname").value,
        description:document.querySelector("#pdescription").value,
        contractIds:addedContracts
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
    }).then()
    .catch(err=>console.log(err))
})

document.querySelector('#addContract').addEventListener('click', e=>{
    e.preventDefault();
    const contractData = {
        name:document.querySelector('#cname').value.trim(),
        description:document.querySelector("#cdescription").value.trim(),
        cost:document.querySelector("#ccost").value.trim(),
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
document.querySelector("#submit").addEventListener("click",e=>{
    const contractId = document.querySelector("#submitContract").value;
    if(!addedContracts.includes(contractId)){
        addedContracts.push(contractId)
        // createAnElement that shows the title of contract in contract-box
        // const newContract=document.createElement('<p>');
        // newContract.setAttribute("class","contract-peek");
        // document.querySelector("#contractBox").append(newContract)
    }
})