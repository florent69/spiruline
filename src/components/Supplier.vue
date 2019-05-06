<template>
    <div class="border border-dark mb-3">
        <h1>Fournisseur : {{name}}</h1>
        <h3 v-if="status" class="text-success">A du stock ? oui</h3>
        <h3 v-else style="color:red">A du stock ? non</h3>
        <br><br>
        <h5>Date de dernière relevé des stocks : {{checkedAt}}</h5>
    </div>
</template>

<script>
    export default {
        name: 'Supplier',
        props: {
            name: String,
            status: Boolean,
            checkedAt: String
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

</style>
