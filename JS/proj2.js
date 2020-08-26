let message = '';
let status = '';
 
const main = document.querySelector('.project-container');
const finishedproject = document.querySelectorAll('a.check-link2');
// finishedproject.addEventListener('click', () => {
    // });
for ( let i = 0; i < arr1.length; i++) {
    if (arr1[i].status ==='finished'){
    message += `
        <div class = "project-number">
            <img class = "project-img" src = "../${arr1[i].photo}" alt = "${arr1[i].name}">
            <h2 class = "project-names col">${arr1[i].name}</h2> 
            <p class = "type-project">${arr1[i].language}</p>
            <p class = "des">${arr1[i].description}</p>
        </div>
    `
 
    }
}
 

 
const main2 = document.querySelector(`.check-link1`);
let message2 = `All projects (${arr1.length})`;
 
 
main2.insertAdjacentHTML('beforeend',message2);
main.insertAdjacentHTML('beforeend',message);