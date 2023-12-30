const asos=document.getElementById("asosl");
const asos2=document.getElementById("asos2");
let otkaz=1;
let mas=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let malJson=null;
async function manba(){
    const malumot=await fetch("https://countries-api-v7sn.onrender.com/countries?limit=12&skip="+12*(otkaz-1));
    malJson=await malumot.json();
    asos.innerHTML=""
    let s=0;
    const arr=Array.from(malJson.data);
    arr.forEach(element => {
        console.log(element);;
        asos.innerHTML+=`
        <div class="dt h-[370px] bg-white p-5 rounded-md" >
            <div class="w-[264px] h-40 kbd " >
                <img src="${element.flags.svg}" alt="" class="max-h-40">
            </div>

            <div class="m-6">
                <h2 class="font-extrabold text-[18px] mb-4 w-[230px] cursor-pointer" onclick="asd(${mas[s]})">${element.name.common}</h2>
                <p class="font-semibold text-[14px]">Population: <span class="font-light">${element.population}</span></p>
                <p class="font-semibold text-[14px] mt-2 mb-2">Region: <span class="font-light">${element.region}</span></p>
                <p class="font-semibold text-[14px]">Capital: <span class="font-light">${element.capital[0]}</span></p>
            </div>
        </div>
        `
        s++;
    });
    darkMot();  
}
manba();
const foot=document.getElementById("son");
let son=[1, 2, 3, 4, 5]
function sonlar(){
    foot.innerHTML=""
    son.forEach(sn=>{
        foot.innerHTML+=`
        <button class="btn  btn-outline foot5  ba" onclick="xyz(${sn})">${sn}</button>
        `
    })
}
sonlar();
let i=1;
let j=0
function xyz(a){
    otkaz=a;
    manba();
    let as=0;
    window.scrollTo(0, 0);
    foot.innerHTML="";
    son.forEach(sn=>{
        as = (a==sn || a==sn+16) ? "disabled='disabled'" : "" ;
        foot.innerHTML+=`
        <button class="btn  btn-outline foot " ${as} onclick="xyz(${sn+j})">${sn+j}</button>`
    })
    if(a>=4+i && a<21){
        foot.innerHTML=""; 
        son.forEach(sn=>{
            as = (4==sn && a!=21) ? "disabled='disabled'" : "" ;
            foot.innerHTML+=`
            <button class="btn  btn-outline foot5 ba"  ${as}  onclick="xyz(${sn+i})">${sn+i}</button> `
        })
        i++;
        j++
    }
    if(a<=j+1 && a!=1){
        foot.innerHTML="";
        i--;
        j--;
        son.forEach(sn=>{
            as = 2==sn ? "disabled='disabled'" : "" ;
            foot.innerHTML+=`
            <button class="btn btn-outline foot5  acti ba"  ${as}  onclick="xyz(${sn+j})">${sn+j}</button>
            `
        })
    }

}
let mss=0;
function asd(b){
    document.getElementById("fot").style.display="block"
     mss=Array.from(malJson.data)[b];
    document.getElementById("ass").style.display="none"
    asos2.innerHTML="";
    asos2.innerHTML=`
    <div class="p-6 md:flex">
    <div>
        <img src="${mss.flags.svg}" alt="" width="319px" class="md:w-[560px] md:h-[401px] md:mr-[120px]">
    </div>
    <div class="md:flex md:flex-col">
    <div class=" md:flex md:gap-[141px]">
    <div>
        <h2 class="font-extrabold text-[22px] mb-4 mt-5">${mss.name.common}</h2>
        <p class="font-semibold text-[14px]">Native Name <span class="font-light">${mss.name.nativeName}</span></p>
        <p class="font-semibold text-[14px] mt-3 mb-3">Papulation <span class="font-light">${mss.population}</span></p>
        <p class="font-semibold text-[14px]">Region <span class="font-light">${mss.region}</span></p>
        <p class="font-semibold text-[14px] mt-3 mb-3">Sub region <span class="font-light">${mss.subregion}</span></p>
        <p class="font-semibold text-[14px]">Capital <span class="font-light">${mss.capital}</span></p>
    </div>
    <div>
        <p class="font-semibold text-[14px] mt-8 mb-3">Top Level Domain:  <span class="font-light">be</span></p>
        <p class="font-semibold text-[14px]">Currencies: <span class="font-light">${mss.currencies}</span></p>
        <p class="font-semibold text-[14px] mt-3 mb-[34px]">Languages <span class="font-light">${mss.languages}</span></p>
    </div>
    </div>
        <p class="font-semibold text-[16px]">Border Conuntries:</p>
        <div id="bn" class="flex gap-3 mt-4 flex-wrap">
        </div>
    </div>
</div>`
const bt=document.getElementById("bn");
bn.innerHTML="";
if(mss.borders.length==0){ bn.innerHTML+=`<button class="btn btn-outline btn-info">Undefined</button>`}
for(let i=0;i<mss.borders.length;i++){
    bn.innerHTML+=`<button class="btn btn-outline btn-info" onclick="chegara(${i})">${mss.borders[i].common}</button>`
}
}

async function dav(){
    const davlat=await fetch("https://countries-api-v7sn.onrender.com/countries?search="+int.value)
    malJson=await davlat.json();
    const qdr=Array.from(malJson.data);
    let s=0;
    asos.innerHTML="";
    qdr.forEach(element => {
        asos.innerHTML+=`
        <div class="dt h-[370px] bg-white p-5 rounded-md">
            <div class="w-[264px] h-40 kbd " >
                <img src="${element.flags.svg}" alt="" class="max-h-40">
            </div>

            <div class="m-6">
                <h2 class="font-extrabold text-[18px]  mb-4 w-[230px] cursor-pointer" onclick="asd(${mas[s]})">${element.name.common}</h2>
                <p class="font-semibold text-[14px]">Population: <span class="font-light">${element.population}</span></p>
                <p class="font-semibold text-[14px] mt-2 mb-2">Region: <span class="font-light">${element.region}</span></p>
                <p class="font-semibold text-[14px]">Capital: <span class="font-light">${element.capital[0]}</span></p>
            </div>
        </div>
        `
        darkMot();
        s++;
    });  
    if(qdr.length==0){
        asos.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z" fill="rgba(238,8,8,1)"></path></svg>`;
    }
    clearInterval(setint);
    setint=0;
    int.blur();
    
}

let setint=null;
const int=document.getElementById("inp");
int.addEventListener("focus", function(){
    let m=0;
    document.addEventListener("keydown", function(){
        m=0; 
    })
    if(!(setint)){
        setint=setInterval(function(){
            if(m===5){
                asos.innerHTML=`            <span class="loading loading-dots loading-xs"></span>
                <span class="loading loading-dots loading-sm"></span>
                <span class="loading loading-dots loading-md"></span>
                <span class="loading loading-dots loading-lg"></span>`
                dav();
            }
            m++;
        }, 200)
    }
})
function birIkki(){
    document.getElementById("fot").style.display="none"
    document.getElementById("ass").style.display="block"
}

document.getElementById("bac").addEventListener("click", function(){
    birIkki();
})
let dr=1;
function darkMot(){
    if(dr%2==0){
        document.getElementById("bod").style.backgroundColor="black";
        document.getElementById("bod").style.color="#fff";
        document.getElementById("hed").style.backgroundColor="#2B3844";
        document.getElementById("hedyoz").style.color="#FFF";
        document.getElementById("dm").style.color="#FFF";
        document.getElementById("inp").style.backgroundColor="#2B3844";
        document.getElementById("inp").style.color="#FFF";
        document.getElementById("roy").style.backgroundColor="#2B3844";
        document.getElementById("roy").style.color="#FFF";
        document.getElementById("son").style.backgroundColor="#2B3844";
        document.getElementById("bac").style.backgroundColor="#2B3844";
        const soslen=document.querySelectorAll(".dt");
        for (var i = 0; i < soslen.length; i++) {
            soslen[i].style.backgroundColor = "#2B3844";
          }
          const bat=document.querySelectorAll(".ba");
          for (var i = 0; i < bat.length; i++) {
              bat[i].style.backgroundColor = "black";
              bat[i].style.color ="#fff"
            }
    }else{
        document.getElementById("bod").style.backgroundColor="#FAFAFA";
        document.getElementById("hed").style.backgroundColor="#FFF";
        document.getElementById("hedyoz").style.color="#111517";
        document.getElementById("dm").style.color="#111517";
        document.getElementById("inp").style.backgroundColor="#FFF";
        document.getElementById("roy").style.backgroundColor="#FFF";
        document.getElementById("roy").style.color="#2B3844";
        document.getElementById("inp").style.color="#2B3844";
        document.getElementById("bod").style.color="#2B3844";
        document.getElementById("son").style.backgroundColor="#FFF"
        document.getElementById("bac").style.backgroundColor="#fff";
        const soslen=document.querySelectorAll(".dt");
        for (var i = 0; i < soslen.length; i++) {
            soslen[i].style.backgroundColor = "#fff";
          }
          const bat=document.querySelectorAll(".ba");
          for (var i = 0; i < bat.length; i++) {
            bat[i].style.backgroundColor = "#fff";
            bat[i].style.color ="#000"
          }
    }
}
document.getElementById("dr").addEventListener("click", function(){
    dr++;
    darkMot();
})


async function ch(a){
    const davlat=await fetch("https://countries-api-v7sn.onrender.com/countries?search="+mss.borders[a].common)
    malJson=await davlat.json();
    const qdr=Array.from(malJson.data);
    asos.innerHTML="";
    let s=0;
    qdr.forEach(element => {
        asos.innerHTML+=`
        <div class="dt h-[370px] bg-white p-5 rounded-md">
            <div class="w-[264px] h-40 kbd " >
                <img src="${element.flags.svg}" alt="" class="max-h-40">
            </div>

            <div class="m-6">
                <h2 class="font-extrabold text-[18px]  mb-4 w-[230px] cursor-pointer" onclick="asd(${mas[s]})">${element.name.common}</h2>
                <p class="font-semibold text-[14px]">Population: <span class="font-light">${element.population}</span></p>
                <p class="font-semibold text-[14px] mt-2 mb-2">Region: <span class="font-light">${element.region}</span></p>
                <p class="font-semibold text-[14px]">Capital: <span class="font-light">${element.capital[0]}</span></p>
            </div>
        </div>
        `
        darkMot();
    });  
}

function chegara(a){
    asos.innerHTML=`            <span class="loading loading-dots loading-xs"></span>
    <span class="loading loading-dots loading-sm"></span>
    <span class="loading loading-dots loading-md"></span>
    <span class="loading loading-dots loading-lg"></span>
    <span class="loading loading-dots loading-md"></span>
    <span class="loading loading-dots loading-sm"></span>
    <span class="loading loading-dots loading-xs"></span>`
    console.log(mss.borders[a].common);
    birIkki();
    ch(a);
}