const asos=document.getElementById("asosl");
let otkaz=1;
async function manba(){
    const malumot=await fetch("https://countries-api-v7sn.onrender.com/countries?limit=12&skip="+12*(otkaz-1));
    const malJson=await malumot.json();
    asos.innerHTML=""
    const arr=Array.from(malJson.data);
    arr.forEach(element => {
        asos.innerHTML+=`
        <div class=" h-[370px] bg-white p-5 rounded-md">
            <div class="w-[264px] h-40 kbd">
                <img src="${element.flags.svg}" alt="" class="max-h-40">
            </div>

            <div class="m-6">
                <h2 class="font-extrabold text-[18px] mb-4 w-[230px]">${element.name.common}</h2>
                <p class="font-semibold text-[14px]">Population: <span class="font-light">${element.population}</span></p>
                <p class="font-semibold text-[14px] mt-2 mb-2">Region: <span class="font-light">${element.region}</span></p>
                <p class="font-semibold text-[14px]">Capital: <span class="font-light">${element.capital[0]}</span></p>
            </div>
        </div>
        `
    });  
}
manba();
const foot=document.getElementById("son");
let son=[1, 2, 3, 4, 5]
function sonlar(){
    foot.innerHTML=""
    son.forEach(sn=>{
        foot.innerHTML+=`
        <button class="btn  btn-outline foot5  " onclick="xyz(${sn})">${sn}</button>
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
       as = a==sn ? "disabled='disabled'" : "" ;
        foot.innerHTML+=`
        <button class="btn  btn-outline foot " ${as} onclick="xyz(${sn})">${sn}</button>`
    })
    if(a>=4+i){
        foot.innerHTML=""; 
        son.forEach(sn=>{
            as = 4==sn ? "disabled='disabled'" : "" ;
            foot.innerHTML+=`
            <button class="btn  btn-outline foot5 "  ${as}  onclick="xyz(${sn+i})">${sn+i}</button> `
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
            <button class="btn btn-outline foot5  acti"  ${as}  onclick="xyz(${sn+j})">${sn+j}</button>
            `
        })
    }
}
