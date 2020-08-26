let count = 0;
for (let i = 0; i < arr1.length; i++)
{
    if (arr1[i].status ==='finished') {
        count++;
    }
}
let message3 = `(${arr1.length - count})`;

const main3 = document.querySelector('.numfinish');
main3.insertAdjacentHTML('beforeend',message3);