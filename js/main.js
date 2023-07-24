var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var search = document.getElementById("search");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var updateindex = 0;
var sitecontainer = []
if (localStorage.getItem("site") !=null) {
    sitecontainer = JSON.parse(localStorage.getItem("site")); 
displaydata();
}

function addSite() {
    var site = {
        name : siteName.value,
        url : siteURL.value,
    }
    if (site.name == "" && site.url == "") {
        window.alert(" site name and site URL are empty")
    }
    else if (site.name == "" ) {
        window.alert(" site name is empty")
    }
    else if (site.url == ""){
        window.alert(" site URL is empty")
    }
    else {
        sitecontainer.push(site)
        localStorage.setItem("site" , JSON.stringify(sitecontainer));
        clearData(); 
        displaydata(); 
    }
  
}


function clearData() {
    siteName.value = "";
    siteURL.value = "";
}

function displaydata() {
    cartona="";
    for (var i = 0; i < sitecontainer.length; i++) {
        cartona+= `
        <tr>
                        <td>${i}</td>
                        <td>${sitecontainer[i].name}</td>
                        <td><button class="btn btn-success"><i class="fa-regular fa-eye"></i> <a href="${sitecontainer[i].url}" target="_blank" rel="noopener noreferrer"> Visit</a></button></td>
                        <td><button class="btn btn-danger"  onclick="deletSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
                        <td><button class="btn btn-warning" onclick="setDate(${i})" > Update</button></td>
                    </tr>
        `
        
    }
    document.getElementById("tabletr").innerHTML = cartona;

    
}

function deletSite(index) {
    
    sitecontainer.splice(index , 1)
    localStorage.setItem("site" , JSON.stringify(sitecontainer));
    displaydata();   
}

function searchSite() {
    var term = search.value;
    cartona="";

    for (var i = 0; i < sitecontainer.length; i++) {
        if (sitecontainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            cartona+= `
            <tr>
                            <td>${i}</td>
                            <td>${sitecontainer[i].name}</td>
                            <td><button class="btn btn-success"><i class="fa-regular fa-eye"></i> <a href="${sitecontainer[i].url}" target="_blank" rel="noopener noreferrer"> Visit</a></button></td>
                            <td><button class="btn btn-danger"  onclick="deletSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
                            <td><button class="btn btn-warning" onclick="setDate(${i})" > Update</button></td>
                        </tr>
            `
        }
       
        
    }
    document.getElementById("tabletr").innerHTML = cartona;
    
}
function setDate(index) {
    updateindex = index;
    var currentSite = sitecontainer[index]
    siteName.value = currentSite.name
    siteURL.value = currentSite.url

    updateBtn.classList.remove("d-none")
    addBtn.classList.add("d-none")
}

function updateData() {
    var site = {
        name : siteName.value,
        url : siteURL.value,
    }
    sitecontainer.splice(updateindex , 1 , site)
    localStorage.setItem("site" , JSON.stringify(sitecontainer));
    clearData(); 
    displaydata();   
    addBtn.classList.remove("d-none")
    updateBtn.classList.add("d-none")
}
(function() {
    i
  })();
