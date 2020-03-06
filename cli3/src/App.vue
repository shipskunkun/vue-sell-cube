<template>
    <div id="app">
        <!-- 头部内容 -->
        <v-header :seller="seller"></v-header>
        <!-- tab内容 -->
    </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api/index'


export default {
    name: 'app',
    data() {
        return {
            seller: {}
        }
    },
    computed: {
        tabs() {
            return [{
                label: '商品',
                component: Goods,
                data: {
                    seller: this.seller
                }
            }, {
                label: '评分',
                component: Ratings,
                data: {
                    seller: this.seller
                }
            }, {
                label: '商家',
                component: Seller,
                data: {
                    seller: this.seller
                }
            }]
        }
    },
    created() {
        this._getSeller()
    },
    methods: {
         _getSeller: function()  {
            getSeller().then((data) => {
                this.seller = data;
                console.log(this.seller);
            })
        }
    },
    components: {
        VHeader
    }
}
</script>
<style lang="stylus" scoped>
#app {
    .tab-wrapper {
        position: fixed;
        top: 136px;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>
