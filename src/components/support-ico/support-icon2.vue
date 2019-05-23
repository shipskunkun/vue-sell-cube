<div>
    <span> :class="classCl"</span>
</div>

<script>
    export default {
        name: 'support-icon',
        data() {
            return  {
                typemap: {decrease: 'decrease'}
            }
        },
        props: {
            size: {
                type: number
                type: Number
            },
            type: {
                type: number
            }
        },
        computed: {
            classCl() {
                return `icon-${this.size}  ${this.typemap[this.type]}`
            }
        }
    }
</script>

<style type="text/css">
    .icon-1 {
        width: 12px;
        height: 12px;
        &.decrease {
            background-image:
        }
    }
</style>