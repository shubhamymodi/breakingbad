// async function fetchCharacters(query){
//     let res;
//     if(query){
//         res = await fetch(`https://breakingbadapi.com/api/characters/${query}`);        
//     }else{
//         res = await fetch(`https://breakingbadapi.com/api/characters`);
//     }
//     let results = await res.json(); 
//     results.map(result => {
//         return `<div class="col-md-3 col-xs-6 col-sm-4 columns">${result.name}</div>
//         <div class="col-md-3 col-xs-6 col-sm-4 columns">${result.name}</div>
//         <div class="col-md-3 col-xs-6 col-sm-4 columns">${result.name}</div>
//         <div class="col-md-3 col-xs-6 col-sm-4 columns">${result.name}</div>`;       
//     }).join('');
//     document.querySelector('#table').insertAdjacentHTML("afterbegin",results);
// }
let x;






  fetch('https://breakingbadapi.com/api/characters')
.then(response => response.json())
.then(data=>{
  x=data;
  console.log(x);
  let table = '';
        x.forEach(function(post) {
          
          table +=`
          <div class="col-md-3 col-xs-6 col-sm-4 columns"><img class="img" src=${post.img}/>${post.name} ${post.nickname}</div>
          `
        });
       
        document.getElementById('table').innerHTML = table;

  

 

})

