<template>
    <div class="suppliersList">
        <h1>Liste des fournisseurs</h1>
        <p @click="onSuppliersListClick">
            Click here!
        </p>
    </div>
</template>

<script>
    export default {
        name: 'SuppliersList',
        props: {
            msg: String
        },
        methods: {
            onSuppliersListClick(){
                window.alert("alert ça marche!")
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
