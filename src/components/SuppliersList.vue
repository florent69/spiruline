<template>
    <div class="suppliers">
        <h1>Liste des fournisseurs</h1>
        <br>
        <Supplier v-for="supplier in suppliers" :name="supplier.name" :status="supplier.status" :checkedAt="supplier.checkedAt.toLocaleString()">
        </Supplier>

    </div>
</template>

<script>
    import Supplier from "./Supplier";
    export default {
        name: 'SuppliersList',
        components: {Supplier},

        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1 ?",
                        status: true,
                        checkedAt: new Date()
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: new Date()
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
