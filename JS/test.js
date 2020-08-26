const addlist = document.querySelector('.AllP');
const addfinish = document.querySelector('.FinP');
const allitems = document.querySelector('.alltimes');
const finisheditems = document.querySelector('.finished');
let message = '';
let message2 = '';
for ( let i = 0; i < arr1.length; i++) {
    message += `
        <div class = "project-number">
            <img class = "project-img" src = "../${arr1[i].photo}" alt = "${arr1[i].name}">
            <h2 class = "project-names col">${arr1[i].name}</h2> 
            <p class = "type-project">${arr1[i].language}</p>
            <p class = "des">${arr1[i].description}</p>
        </div>
    `;
}
for ( let i = 0; i < arr1.length; i++) {
    if (arr1[i].status ==='finished'){
    message2 += `
        <div class = "project-number">
            <img class = "project-img" src = "../${arr1[i].photo}" alt = "${arr1[i].name}">
            <h2 class = "project-names col">${arr1[i].name}</h2> 
            <p class = "type-project">${arr1[i].language}</p>
            <p class = "des">${arr1[i].description}</p>
        </div>
    `
 
    }
}

allitems.insertAdjacentHTML('beforeend',message);
finisheditems.insertAdjacentHTML('beforeend',message2);
 
addlist.addEventListener('click', () => { 
   
 
    if (allitems.style.display == 'none') {
        allitems.style.display = 'flex';
        
    }

   
});
addfinish.addEventListener('click', () => {
 
    if (finisheditems.style.display == 'none') {
        finisheditems.style.display = 'flex';
        
    }
 
   
   
});
   