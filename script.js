const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];


class GoodsItem {
    constructor({ title, price }) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
       <img class="goods__photo" src="img/error.png" alt="photo">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="goods__button" type="button">Добавить</button>
    </div>`;
    }

}
class GoodsList {
    constructor() {
        this.goods = goods;
    }
    //Стоимость таваров 
    goodsSum() {
        return this.goods.reduce((prev, { price }) => prev + price, 0);
    }
    render() {
        const _goods = [... this.goods];

        const _goodsItem = _goods.map((item) => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render();
        })
        document.querySelector('.goods-list').innerHTML = _goodsItem.join('');
    }
}
//Карзина
class Basket {
    setVision() { }
    render() { }
}
class BasketItem {
    setCont() { }
    deleteItem() { }
    render() { }
}



onload = () => {
    const goodsList = new GoodsList();
    goodsList.render();
}