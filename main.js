Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

                <div class="product-image">
                    <img :src="image">
                </div>

                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>

                    <p>User is premium: {{ premium }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>

                    <div v-for="(variant, index) in variants" 
                        :key="variant.variantId"
                        class="color-box"
                        :style="{ backgroundColor: variant.variantColor }"
                        @mouseover="updateProduct(index)">
                    </div>

                <div>
                    <button @click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock}">Add to cart</button>
                </div>
                <div>
                    <p><b>Cart ({{cart}})</b></p>
                </div>

                </div>
            </div>
    `,
      data() {
          return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
                    details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./assets/green.jpg",
                    variantQuantity: 10
                },
                {    
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./assets/blue.jpg",
                    variantQuantity: 0
                }
            ],
            cart: 0
        }
      },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
}) 

