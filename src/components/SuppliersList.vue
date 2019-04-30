<template>
    <div class="suppliers">
        <h1>Liste des fournisseurs</h1>
        <button type="button" class="btn btn-success mr-1" @click="onSuppliersListClick">
            Click here!
        </button>
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
