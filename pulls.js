const pName = document.querySelector("#pName")
const pDate = document.querySelector("#pDate")
const rarity = document.querySelector("#rarity")
const pullBtn = document.querySelector("#pullBtn")

let pulls = [];


pullBtn.addEventListener("click", function(e){
    e.preventDefault();
    pulls.push(
        {pName : pName.value,
        pDate : pDate.value,
        rarity: rarity.value,

    })
    console.log(pulls)
})
