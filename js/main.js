

let xhr = new XMLHttpRequest();
let data

let addProjects = function(data){
   let projects = document.querySelector("div#projects");
   Object.entries(data).forEach((pair)=>{
      let el = document.createElement("div")
      el.innerText = `${pair[0]} : ${pair[1]}`
      projects.appendChild(el)
   })
}

xhr.onload = function(){
   if(xhr.status >= 200 && xhr.status < 300){
      try {
         data = JSON.parse(xhr.response)
      } catch(e) {
         console.log(e)
      }
      addProjects(data)
   } else {
      console.log(xhr.status)
   }
}

xhr.open("GET","data/projects.json");
xhr.send();
