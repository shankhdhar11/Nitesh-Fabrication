let url = "clientsnotes.json";

let clientnote = document.getElementById("clientnote");
let companyname = document.getElementById("companyname");
let next = document.getElementById("next");
let previous=document.getElementById("previous");

let index = 0; 

let getdata = async () => {
    let response = await fetch(url);
    let data = await response.json();

    // initial load
    showData(data);

    next.addEventListener("click", () => {
        index++;

        if (index >= data.length) {
            index = 0; // loop back
        }

        showData(data);
    });

    function showData(data) {
        clientnote.innerHTML = data[index].clientnote;
        companyname.innerHTML = data[index].companyname;
    }
    previous.addEventListener("click",()=>{
        index--;

        if(index<0){
            index=0;
        }
        showData(data);
    })
};

getdata();

const toggleBtn = document.getElementById("togglebutton");
const toggleMenu = document.getElementById("navtogglelist");

toggleBtn.addEventListener("click", () => {

    const isOpen = toggleMenu.classList.contains("active");

    if(!isOpen){
        toggleMenu.classList.add("active");
        toggleBtn.classList.remove("ri-menu-line");
        toggleBtn.classList.add("ri-close-line");
    }else{
        toggleMenu.classList.remove("active");
        toggleBtn.classList.remove("ri-close-line");
        toggleBtn.classList.add("ri-menu-line");
    }
});

/* nav link click pe auto close */
document.querySelectorAll("#navlist2 a").forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu.classList.remove("active");
        toggleBtn.classList.remove("ri-close-line");
        toggleBtn.classList.add("ri-menu-line");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const whatsapp = document.getElementById("wb");
    whatsapp.addEventListener("click", () => {
        window.location.href = "https://wa.me/919662477669";
    });
});
