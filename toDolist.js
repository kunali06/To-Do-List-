 let input=document.getElementById("inputbx");
    let add=document.getElementById("btn");
    let list=document.getElementById("list")

add.addEventListener("click",()=>{
    if(input.value.trim()==="")return;

    let li=document.createElement("li");
    li.textContent=input.value;

    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
    });
    li.addEventListener("dblclick",()=>{
        li.remove();
    });
    list.appendChild(li);
    input.value="";
})
