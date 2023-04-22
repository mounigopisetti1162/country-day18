let  row=document.querySelector(".row")
function creat(element){
let data=document.createElement("element")
return data
}

let url="https://restcountries.com/v3.1/all/"
fetch(url).then((res)=>res.json()).then((data)=>{
data.forEach((ele)=>
{
let div=creat("div")
div.className=".col-sm-6.col-md-6.col-lg-4.col-xl-4 cols"
let filename=temp(ele)
div.innerHTML=filename
row.appendChild(div)
})
})
let temp=(country)=>{
    let tem=`<div class="card h-70  card">
    <div class="card-header">${country.name.common}</div>
    <div class="card-body">
    <div class="image">
    <img class="flag" src="${country.flags.png}" width="300px" height="300px"
    </div>
    </div>
    <div class=align>
    <p class="text"> <b> Capital:</b>${country.capital}</p>
    <p class="text"> <b> Region:</b>${country.region}</p>
    <p class="text"> <b> Population:</b>${country.population}</p>
   </div>
   <div class="btns">
   <button class="btn btn-primary btn" onclick="weather([${country.latlng[0]},${country.latlng[1]}],'${country.name.common}')">weather</button>
    </div>
   </div>
   
    </div>
   
    `;
    return tem
}
let weather=(lan,name)=>{
    let [lat,lon]=lan
    let l=document.getElementById(`load${name}`)
    l.innerHTML="loading..."
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9bf59c67c0d408cc5e1c4877f3e4d9d5`
    fetch(url).then((res)=>res.json()).then((data)=>{
        
        
        //weather msg template
        let weatherMsg=`
        Countrty : ${data.name}
        latiture :  ${lat}   longiture :${lon}
        Weather  :  ${data.weather[0].description}
        Wind speed : ${data.wind.speed}
        temperature : ${data.main.temp} 
        `;
        
        //we are going to show weather report via alert.
        alert(weatherMsg);
        l.innerHTML="";
})
}