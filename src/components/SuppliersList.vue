<template>
    <div class="suppliers">
        <h1>Liste des fournisseurs</h1>
        <br>
        <div id="requestLoading">
        <p v-if="loading">Requête en cours</p>
        <p v-else-if="error" class="text-danger">Erreur de chargement </p>
        </div>

        <Supplier v-for="supplier in suppliers"
                  :name="supplier.name"
                  :status="supplier.status"
                  :checkedAt="supplier.checkedAt">
        </Supplier>

    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import axios from "axios";
    export default {
        name: 'SuppliersList',
        components: {Supplier},

        data: function () {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                error: false,
            }
        },
        mounted () {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.suppliers = response.data,
            console.log(response.data)))
                .catch(error => {
                    this.error = true
                })
                .finally(() => this.loading = false)
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#requestLoading {
    font-size:xx-large;
}
</style>
