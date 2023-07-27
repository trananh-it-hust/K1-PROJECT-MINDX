const canh1 = document.getElementById("canh1");
const canh  = document.getElementById("canh");
const item = document.getElementById("item_dau");
canh1.addEventListener('click',()=>{
    canh1.style.opacity = '0.5';
    canh.style.opacity = '1';
    canh1.style.cursor = 'default';
    canh.style.cursor = 'pointer';
    item.style.display = 'block';
})
canh.addEventListener('click',()=>{
    canh.style.opacity = '0.5';
    canh1.style.opacity = '1';
    canh.style.cursor = 'default'
    canh1.style.cursor = 'pointer'
    item.style.display = 'none';

})