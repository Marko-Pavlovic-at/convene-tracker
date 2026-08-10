const pName = document.querySelector("#pName")
const pDate = document.querySelector("#pDate")
const rarity = document.querySelector("#rarity")
const pullBtn = document.querySelector("#pullBtn")
const log = document.querySelector("#log")
const logDisplay = document.querySelector("#logDisplay");

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
        const logName = document.createElement("p");
        logName.textContent = `Name: ${item.pName}`;
        log.append(logName);
        const logDate = document.createElement("p");
        logDate.textContent = `Date : ${item.pDate}`;
        log.append(logDate);
        const logRarity = document.createElement("p");
        logRarity.textContent = `Rarity : ${item.rarity}`
        log.append(logRarity);
        
    })
}

renderLogs();