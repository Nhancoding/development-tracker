// const {JSON}= require("sequelize");

// const router = require("../../controllers/frontEndController");
let url;
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dfejwyntg',
    uploadPreset: 'ml_default'
},
    (error, result) => {
        if (!error && result && result.event === "success") {
            console.log(result.info.url);
            url = result.info.url
        } else {
            console.log(error)
        }
    }
)

document.getElementById("upload_widget").addEventListener("click", function (e) {
    e.preventDefault()
    myWidget.open();
}, false);


document.querySelector("#project-submit").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#submitProject").classList.add("hide");
    document.querySelector("#newProjName").classList.remove("hide");
    document.querySelector("#contractForm").classList.remove("hide");


    const projectData = {
        name: document.querySelector("#pname").value,
        deadline: document.querySelector("#pdeadline").value,
        description: document.querySelector("#pdescription").value,
        image: url

    }
    console.log("new project data", projectData)
    if (projectData) {

        document.querySelector("#cloudinary-img").setAttribute("src", projectData.image)
    }
    document.querySelector("#newProjName").append(projectData.name)
    fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(projectId => {
        return projectId.json()
    }).then(projectId => {
        const projectID = JSON.stringify(projectId);
        const projectIDstring = projectId.id;



        return localStorage.setItem("projectId", projectIDstring)
    })
        .catch(err => console.log(err))
})

document.querySelector('#submitContract').addEventListener('click', e => {
    e.preventDefault();

    const contractData = {
        name: document.querySelector('#cname').value.trim(),
        description: document.querySelector("#cdescription").value.trim(),
        cost: document.querySelector("#ccost").value.trim(),
        projectId: JSON.parse(localStorage.getItem("projectId"))
    }
    console.log(contractData)
  

    fetch("/api/contracts", {
        method: "POST",
        body: JSON.stringify(contractData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    //     document.querySelector('#contract-submit').addEventListener('click', (e) => {
    //         function createContractList(list) {
    //             let li = document.createElement('li');
    //             li.textContent = list;
    //             return li;
    //         }
    //             const newProjName = document.querySelector("#contractList");
    //             newProjName.appendChild(createContractList(contractData.name));



    //     })


    
})
    // var list = document.getElementById("contractList")

    // //Add to do's
    // document.getElementById("contract-submit").addEventListener('click', function (e) {
    //     e.preventDefault()
    //     var inputValue = document.getElementById("cname");
    //     var li = document.createElement('ul')
    //     li.textContent = inputValue.value
    //     list.appendChild(li)
        
    // })