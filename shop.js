let catalog = [
    {
        id: 1,
        name: 'Штаны',
        description: 'Зеленые штаны',
        sizes: [38,39,40,41],
        price: 1500,
        available: true
    },
   
    {
        id: 2,
        name: 'Рубашка',
        description: 'Красная рубашка',
        sizes: [44,43,42],
        price: 1100,
        available: false
    },
    
    {
        id: 3,
        name: 'Майка',
        description: 'Белая майка',
        sizes: [45,44,38,42],
        price: 500,
        available: true
    },
    
    {
        id: 4,
        name: 'Куртка',
        description: 'Желтая куртка',
        sizes: [52,48,44,42],
        price: 3500,
        available: false
    },
    
    {
        id: 5,
        name: 'Ботинки',
        description: 'Оранжевые ботинки',
        sizes: [40,42,43,44],
        price: 2500,
        available: true
    },      
          
]


let basket = [  

]


// Функция добавления товара в корзину

basket.addGood = function(goodIndex,amount) {
    this.push({
        good: goodIndex,
        amount,
    })
}
// Функция удаления товара из корзины

basket.removeGood = function(goodIndex, amount) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].good == goodIndex) {
            if (amount >= this[i].amount) {
                this.splice(i,1);
                return;
            }

            this[i].amount -= amount;
        }
    }

}

// Функция полной очистки корзины

basket.clear = function() {
    this.splice(0, this.length);
}

//Общее количество и стоимость товаров в корзине

basket.getTotalGoods = function(catalog) {
    result = {
        totalAmount: 0,
        totalSumm: 0,
    }

    for (let el of basket) {
        result.totalAmount += el.amount;
        result.totalSumm += catalog[el.good].price * el.amount;
    }

    return result;
}


function main(basket, catalog) {
    basket.addGood(0, 3);
    basket.removeGood(0, 1);
    basket.addGood(1, 1);
    basket.addGood(2, 4);
    basket.addGood(3, 3);
    basket.removeGood(3, 1)

    console.log(basket)
    console.log(basket.getTotalGoods(catalog));
    basket.clear();
    console.log(basket.getTotalGoods(catalog));

}

main(basket,catalog);