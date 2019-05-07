<template>
    <div class="suppliers">
        <h1>Liste des fournisseurs</h1>
        <br>
        <div id="requestLoading">
        <p v-if="loading">Requête en cours</p>
        <p v-else-if="error" class="text-danger">Erreur de chargement </p>
        </div>
        <supplier v-for="supplier in suppliers"
                  :name="supplier.name"
                  :status="supplier.status"
                  :checkedAt="supplier.checkedAt">
        </supplier>

    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import { mapActions } from "vuex";
    import { mapState } from 'vuex'


    export default {
        name: 'SuppliersList',
        components: {Supplier},
        computed: {
            ...mapState([
                'suppliers',
                'loading',
                'error'
            ])
        },
        methods: {
            ...mapActions(['suppliersLoading'])
        },
        mounted() {
            this.$store.dispatch('suppliersLoading')
        }
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#requestLoading {
    font-size:xx-large;
}
</style>
