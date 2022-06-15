const menuBtn = document.getElementById("menu");
const dropBtn = document.getElementById("drop-down");

menuBtn.addEventListener("click", ()=>{
    dropDown();
});

// menuBtn.forEach(function(item){
//     item.addEventListener("click", function(){
//         dropBtn.forEach(function(item){
//             item.classList.toggle("active");
//         })
//     })
// })

function dropDown(){
    dropBtn.classList.toggle("active");
}