const pName = document.querySelector("#pName")
const pDate = document.querySelector("#pDate")
const rarity = document.querySelector("#rarity")
const pullBtn = document.querySelector("#pullBtn")
const log = document.querySelector("#log")
let pulls = [];


pullBtn.addEventListener("click", function(e){
    e.preventDefault();
    pulls.push(
        {pName : pName.value,
        pDate : pDate.value,
        rarity: rarity.value,

    })
    renderLogs();
    console.log(pulls)
})

function renderLogs(){
    log.innerHTML = ""
    pulls.forEach((item) =>{
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
        
    })
}

renderLogs();