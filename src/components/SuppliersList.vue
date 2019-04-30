<template>
    <div class="suppliers">
        <h1>Liste des fournisseurs</h1>
        <button type="button" class="btn btn-success mr-1" @click="onSuppliersListClick">
            Click here!
        </button>
        <Supplier :name="name" :status="status" :checkedAt="checkedAt.toLocaleString()"></Supplier>

    </div>
</template>

<script>
    import Supplier from "./Supplier";
    export default {
        name: 'SuppliersList',
        components: {Supplier},
        methods: {
            onSuppliersListClick(){
                window.alert("alert ça marche!")
            }
        },
        data: function () {
            return {
                name: 'Mon fournisseur',
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date() // date de la dernière mise à jour du stock
            }
        },
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
