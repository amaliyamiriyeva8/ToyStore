let body=document.querySelector('body');
let was=document.querySelector(".was");
let were=document.querySelector(".were");
let cart=document.querySelector("#cart");
let icon=document.querySelector(".icon");
let went=document.querySelector("#went");
let toy=document.querySelector(".toy");
let Elli=document.querySelectorAll("li");
let nav=document.querySelector("nav")
let list = document.querySelector("#list");
let Eli=document.querySelectorAll("#i");
let some=document.querySelector("#some")

cart.addEventListener("click",()=>{
    was.style.display="flex"
})

icon.addEventListener("click",()=>{
    was.style.display="none"
})
was.addEventListener("click",(e)=>{
    if(e.target == was){
        was.style.display="none"
    }
})
 
window.addEventListener('scroll',()=>{
   
    if(window.scrollY>40){
        some.style.padding = "1px 0"
        went.style.display="none";
        nav.style.top="0px"
        nav.style.transition = "all 1s ease";
        nav.style.backgroundColor="black";
        toy.style.color="white";
        list.style.color = "white";
        Elli.forEach((li) => {
            li.style.color="white";
        });
        Eli.forEach((i)=>{
            i.style.color="white"
        })
        cart.style.color="white"
    }
    else{
        nav.style.top="";
        nav.style.transition = "all 0.6s ease";
        some.style.padding =""
        went.style.display=""
        nav.style.backgroundColor="";
        toy.style.color="";
        list.style.color =""
        Elli.forEach((li) => {
            li.style.color="";
        });
        Eli.forEach((i)=>{
            i.style.color=""
        })
        cart.style.color=""
    }
    }
)

let section_2=document.querySelector(".section2")
let mouse=document.querySelector(".click");

mouse.addEventListener("click",()=>{
    window.scrollTo({
        top: 400,
        left: 0,
        behavior: 'smooth'
    });

})

let fall=document.querySelector('.fall')
const photo= [
    {  
         image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
        thing: "Teddy Bear",
        usd: "$ 30.000 USD"
    },

    {  
         image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
        thing: "Mega Plush Toy",
        usd: "$ 38.000 USD"
    },

    {  
         image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
        thing: "Cute Dog",
        usd: "$ 24.000 USD"
    },

    { 
       image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
        thing: "Little Friend",
        usd: "$ 27.000 USD"
    }
]

photo.forEach(item=>{
    fall.innerHTML+=`
    <div class="same">
                <img src="${item.image}" alt="">
                <h1>${item.thing}</h1>
                <button>${item.usd}</button>
            </div>
    `
})

let feel=document.querySelector('.feel')
const photo_1 = [
    {  
        image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
        thing: "Happy Flower",
        usd: "$ 38.000 USD"
    },

    {  
        image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min-p-500.png",
        thing: "Lift Machine",
        usd: "$ 24.000 USD"
    },

    {  
        image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
        thing: "Wooden Camera",
        usd: "$ 32.000 USD"
    },
    { 
        image: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
        thing: "Little Rabbit",
        usd: "$ 16.000 USD"
    }
]
photo_1.forEach(item=>{
    feel.innerHTML+=`
    <div class="same">
                <img src="${item.image}" alt="">
                <h1>${item.thing}</h1>
                <button>${item.usd}</button>
            </div>
    `
})