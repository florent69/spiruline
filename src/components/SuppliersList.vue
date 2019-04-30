<template>
    <div class="suppliers">
        <h1>Liste des fournisseurs</h1>
        <br>
        <Supplier v-for="supplier in suppliers" :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt">
        </Supplier>

    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import { format } from 'timeago.js';
    export default {
        name: 'SuppliersList',
        components: {Supplier},

        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Jojo la pillule",
                        status: true,
                        checkedAt: format( Date())
                    },
                    {
                        id: 2,
                        name: "JC le sniffeur",
                        status: false,
                        checkedAt: format('2018-12-12')
                    }
                ]
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
