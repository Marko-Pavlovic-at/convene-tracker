const pName = document.querySelector("#pName")
const pDate = document.querySelector("#pDate")
const rarity = document.querySelector("#rarity")
const pullBtn = document.querySelector("#pullBtn")
const log = document.querySelector("#log")
let pulls = [];
const data = localStorage.getItem("pull");
if(data){
    pulls = JSON.parse(data);
}



pullBtn.addEventListener("click", function(e){
    e.preventDefault();
    pulls.push(
        {pName : pName.value,
        pDate : pDate.value,
        rarity: rarity.value,

    })
    renderLogs();
    localStorage.setItem("pull", JSON.stringify(pulls));
    pName.value = "";
    pDate.value = "";
    rarity.value = "";
})

function renderLogs(){
    log.innerHTML = ""
    pulls.forEach((item, index) =>{
        const logDisplay = document.createElement("div");
        logDisplay.className = "logDisplay"
        log.append(logDisplay);
        const logName = document.createElement("p");
        logName.textContent = `Name: ${item.pName}`;
        logDisplay.append(logName);
        const logDate = document.createElement("p");
        logDate.textContent = `Date : ${item.pDate}`;
        logDisplay.append(logDate);
        const logRarity = document.createElement("p");
        logRarity.textContent = `Rarity : ${item.rarity}`
        logDisplay.append(logRarity);
        const delBtn = document.createElement("button");
        delBtn.className = "delBtn";
        delBtn.textContent = "Delete";
        logDisplay.append(delBtn);

        delBtn.addEventListener("click", function(){
            console.log("clicked");
            pulls = pulls.filter((pull, i) => i !== index);
            localStorage.setItem("pull", JSON.stringify(pulls));
            renderLogs();
        })
       
    })

    

}

renderLogs();