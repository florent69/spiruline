<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <br>
        <div id="requestLoading">
            <p v-if="loading">Requête en cours</p>
            <p v-else-if="error" class="text-danger">Erreur de chargement </p>
        </div>

        <GmapMap
                :center="{lat:45.763420, lng:4.834277}"
                :zoom="2"
                map-type-id="terrain"
                style="width: 800px; height: 500px"
                class="mx-auto"
        >
            <GmapMarker
                    v-for="supplier in suppliers"
                    :position="{lat: parseFloat(supplier.latitude), lng: parseFloat(supplier.longitude)}"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat: parseFloat(supplier.latitude), lng: parseFloat(supplier.longitude)}"
            />
        </GmapMap>
    </div>
</template>



<script>
    import axios from "axios";
    export default {
        name: 'SuppliersMap',

        data: function () {
            return {
                suppliers: [], // au début la liste des fournisseurs est vide
                loading: false,
                error: null,
            }
        },
        created () {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.suppliers = response.data))
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
