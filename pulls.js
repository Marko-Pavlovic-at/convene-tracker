const pName = document.querySelector("#pName")
const pDate = document.querySelector("#pDate")
const rarity = document.querySelector("#rarity")
const pullBtn = document.querySelector("#pullBtn")
const log = document.querySelector("#log")
const nameFilterBtn = document.querySelector("#nameFilterBtn");
const dateFilterBtn = document.querySelector("#dateFilterBtn")
const rarityFilterBtn = document.querySelector("#rarityFilterBtn");
const pity = document.querySelector("#pity");
const clearBtn = document.querySelector("#clearBtn");


let pulls = [];
const data = localStorage.getItem("pull");
if(data){
    pulls = JSON.parse(data);
}

clearBtn.addEventListener("click", function(){
    if(confirm("Delete all pulls?")){
        pulls = []
        localStorage.removeItem("pull");
        renderLogs(pulls);
    }
})

nameFilterBtn.addEventListener("click", function(){
    const sorted = [...pulls].sort((a,b) => a.pName.localeCompare(b.pName));
    renderLogs(sorted);
})


dateFilterBtn.addEventListener("click", function(){
    const sorted = [...pulls].sort((a,b) =>
        a.pDate.localeCompare(b.pDate))
    renderLogs(sorted);

})

rarityFilterBtn.addEventListener("click", function(){
    const sorted = [...pulls].sort((a,b) =>
    b.rarity.localeCompare(a.rarity));
    renderLogs(sorted);
})

pullBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(pName.value.trim() === "" || pDate.value === "" || rarity.value ===""){
        alert("Fill  in evvery field");
        return;
    }
    pulls.push(
        {
        id: Date.now(),
        pName : pName.value,
        pDate : pDate.value,
        rarity: rarity.value,

    })
    renderLogs(pulls);
    localStorage.setItem("pull", JSON.stringify(pulls));
    pName.value = "";
    pDate.value = "";
    rarity.value = "";
})

function renderLogs(list){
    log.innerHTML = ""
    const lastFive = pulls.findLastIndex(pull => pull.rarity === "5*")
    pity.textContent = `Pity : ${pulls.length - 1 -lastFive}`
    list.forEach((item) =>{
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
        const editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "edit";
        logDisplay.append(editBtn);

        delBtn.addEventListener("click", function(){
            console.log("clicked");
            pulls = pulls.filter(pull => pull.id != item.id);
            localStorage.setItem("pull", JSON.stringify(pulls));
            renderLogs(pulls);
        })

        editBtn.addEventListener("click", function(){
            logDisplay.innerHTML = "";
            const modalName = document.createElement("input");
            modalName.placeholder = "Name";
            logDisplay.append(modalName);
            const modalDate = document.createElement("input");
            modalDate.type = "date";
            logDisplay.append(modalDate);
            const modalSelect = document.createElement("select");
            ["3*", "4*", "5*"].forEach(text => {
                modalSelect.add(new Option(text, text))
            });
            logDisplay.append(modalSelect);
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.className = "saveBtn";
            logDisplay.append(saveBtn);

            saveBtn.addEventListener("click", function(){
                logDisplay.innerHTML = "";
                pulls = pulls.map(pull => {
                    if(pull.id === item.id){
                        return {
                            id: pull.id,
                            pName : modalName.value,
                            pDate : modalDate.value,
                            rarity : modalSelect.value
                        };
                        
                    }
                    return pull
                })
    
                localStorage.setItem("pull", JSON.stringify(pulls))
                renderLogs(pulls);
            })
        })
       
    })


    

}

renderLogs(pulls);