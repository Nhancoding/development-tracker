// const {JSON}= require("sequelize");

// const router = require("../../controllers/frontEndController");

document.querySelector("#project-submit").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#submitProject").classList.add("hide");
    document.querySelector("#newProjName").classList.remove("hide");
    document.querySelector("#contractForm").classList.remove("hide");


    const projectData = {
        name: document.querySelector("#pname").value,
        deadline: document.querySelector("#pdeadline").value,
        description: document.querySelector("#pdescription").value,

    }
    console.log(projectData)
    document.querySelector("#newProjName").append(projectData.name)
    fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(projectId => {
        return projectId.json()
        //  store the ID in local storage
        // could need stringify project id after ""
        // JSON.stringify(projectId)
    }).then(projectId => {
        const projectID = JSON.stringify(projectId);
        const projectIDstring = projectId.id;



        return localStorage.setItem("projectId", projectIDstring)
    })
        .catch(err => console.log(err))
})

document.querySelector('#submitContract').addEventListener('submit', e => {
    e.preventDefault();
 


    const contractData = {
        name: document.querySelector('#cname').value.trim(),
        description: document.querySelector("#cdescription").value.trim(),
        cost: document.querySelector("#ccost").value.trim(),
        projectId: JSON.parse(localStorage.getItem("projectId"))

        // JSON.parse(^)
    }
    console.log(contractData)
    // add the project ID in fetch"" or in body
    // local storage .get
    fetch("/api/contracts", {
        method: "POST",
        body: JSON.stringify(contractData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    document.querySelector('#contract-submit').addEventListener('click', e => {
        function createContractList(list) {
            let li = document.createElement('li');
            li.textContent = list;
            return li;
        }
        const newProjName = document.querySelector("#contract-list");
        newProjName.appendChild(createContractList(contractData.name))

    })
})

// document.querySelector('#submit').addEventListener('click', e => {
//     if (res.ok) {
//         location.href = "/profile"
//     } else {
//         alert("not working")
//     }
// })


    // ADD: "finished" btn to re route to profile
