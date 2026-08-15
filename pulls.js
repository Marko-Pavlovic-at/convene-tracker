const pName = document.querySelector("#pName")
const pDate = document.querySelector("#pDate")
const rarity = document.querySelector("#rarity")
const pullBtn = document.querySelector("#pullBtn")
const log = document.querySelector("#log")
const nameFilterBtn = document.querySelector("#nameFilterBtn");
const dateFilterBtn = document.querySelector("#dateFilterBtn")
const rarityFilterBtn = document.querySelector("#rarityFilterBtn");



let pulls = [];
const data = localStorage.getItem("pull");
if(data){
    pulls = JSON.parse(data);
}

nameFilterBtn.addEventListener("click", function(){
    pulls.sort((a,b) => a.pName.localeCompare(b.pName));
    renderLogs();
})




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
        const editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "edit";
        logDisplay.append(editBtn);

        delBtn.addEventListener("click", function(){
            console.log("clicked");
            pulls = pulls.filter((pull, i) => i !== index);
            localStorage.setItem("pull", JSON.stringify(pulls));
            renderLogs();
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
                pulls = pulls.map((pull, i)=>{
                    if(i === index){
                        return {
                            pName : modalName.value,
                            pDate : modalDate.value,
                            rarity : modalSelect.value
                        };
                    }
                    return pull

                });
                localStorage.setItem("pull", JSON.stringify(pulls))
                renderLogs();
            })
        })
       
    })


    

}

renderLogs();