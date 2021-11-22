const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ({ title = x, price = 0 }) =>
    `<div class="goods-item">
    <img class="goods__photo" src="img/error.png" alt="photo">
       <h3>${title}</h3>
       <p>${price}</p>
       <button class="goods__button" type="button">Добавить</button>
    </div>`

const renderGoodsList = () => {
    let goodsList = goods.map((item) => {
        return renderGoodsItem(item);
    });
    goodsList = goodsList.join("");

    document.querySelector('.goods-list').innerHTML = goodsList;
}
onload = () => { renderGoodsList() }
