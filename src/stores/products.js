import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => ({
        additional: [
            { "id": crypto.randomUUID(), "name": "papas", "price": 3000 },
            { "id": crypto.randomUUID(), "name": "yuca", "price": 5000 },
            { "id": crypto.randomUUID(), "name": "nachos", "price": 1500 }
        ],
        burgers: [
            {
                "id": crypto.randomUUID(),
                "name": "Básica",
                "price": 15000,
                "qty": 1,
                "description": "Hamburguesa con carne de 50gr y queso derretido.",
                "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118196/carrito-market-mix/Sencilla_c4zql2.jpg",
                "additional": []
            },
            {
                "id": crypto.randomUUID(),
                "name": "Bacon",
                "price": 25000,
                "qty": 1,
                "description": "Hamburguesa con dos carnes de res de 50gr,  125 gr de tocineta, queso cheddar, cebolla, salsa de tomate y mostaza.",
                "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Bacon_h8vzrt.jpg",
                "additional": []
            }, {
                "id": crypto.randomUUID(),
                "name": "Magna",
                "price": 60000,
                "qty": 1,
                "description": "Prueba la deliciosa Magna. Cinco carnes de res de 50gr con salsa especial de la casa y queso derretido.",
                "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118200/carrito-market-mix/Magna_hoka4e.jpg",
                "additional": []
            }, {
                "id": crypto.randomUUID(),
                "name": "Triple Carne",
                "price": 35000,
                "qty": 1,
                "description": "Hamburguesa con tres carnes de 50gr, dos queso cheddar, cebolla, pepinillos, salsa de tomate y mostaza.",
                "image": "https://st3.depositphotos.com/3957801/12810/i/600/depositphotos_128102518-stock-photo-big-beef-burger.jpg",
                "additional": []
            }],
        hot_dogs: [{
            "id": crypto.randomUUID(),
            "name": "Básico",
            "price": 9000,
            "qty": 1,
            "description": "Hot dog básico con mostaza y pan recién horneado.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665118573/carrito-market-mix/Hot-sencillo_pzc1oe.jpg",
            "additional": []
        }, {
            "id": crypto.randomUUID(),
            "name": "Texano",
            "price": 20000,
            "qty": 1,
            "description": "Hot dog con salchicha texana, lechuga, tomate, cebolla, chips de patata y un toque de queso.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117307/carrito-market-mix/Texano_uccuwd.jpg",
            "additional": []
        }, {
            "id": crypto.randomUUID(),
            "name": "Viena",
            "price": 15000,
            "qty": 1,
            "description": "Hot dog con salchicha tipo viena,lechuga, tomate, cebolla y un toque de queso.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117299/carrito-market-mix/Viena_i7rbd7.jpg",
            "additional": []
        }, {
            "id": crypto.randomUUID(),
            "name": "Quesudo",
            "price": 17000,
            "qty": 1,
            "description": "Hot dog con salchicha especial de la casa,lechuga, tomate, cebolla y abundante queso derretido.",
            "image": "https://res.cloudinary.com/jorge-tarifa/image/upload/v1665117323/carrito-market-mix/Cheeser_uwf5us.jpg",
            "additional": []
        }]
    }),

    actions: {
        loadProducts(products) {
            this.products = products;
        },
        clearState() {
            this.products = {};
        }
    }
})