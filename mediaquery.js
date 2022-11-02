// 음료 리스트
const listItem = document.querySelector('.list-item');
const btnItem = listItem.querySelectorAll('.btn-item');
const itemImg = listItem.querySelectorAll('.item-img');
const itemName = listItem.querySelectorAll('.item-name');
const itemPrice = listItem.querySelectorAll('.item-price');
const item = {};
const itemArray = [];

// 선택한 음료 리스트
const listChoiceItem = document.querySelector('.list-choice-item');


// 음료 선택시 객체 저장
function choiceItem(itemName, itemPrice, itemImg) {
    item['name'] = itemName;
    item['price'] = itemPrice;
    item['img'] = itemImg;
    itemArray.push({...item});
    console.log(itemArray);

    showItem(item.img, item.name);
}

// 선택한 음료 리스트 보여주는 함수
function showItem(itemImg, itemName) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const name = document.createElement('p');
    const amount = document.createElement('p');

    name.classList.add('item-name');
    amount.classList.add('item-amount');
    
    img.src = itemImg;
    name.innerHTML = itemName;
    
    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(amount);
    listChoiceItem.appendChild(li);


}

// 음료 버튼 클릭시 순회
btnItem.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('.item-name').innerHTML;
        const itemPrice = item.querySelector('.item-price').innerHTML;
        const itemImg = item.querySelector('.item-img').src;
        choiceItem(itemName, itemPrice, itemImg);
    })
})









