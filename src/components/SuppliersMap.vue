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
                class="mx-auto mb-5"
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
    import { mapActions } from "vuex";
    import { mapState } from 'vuex'

    export default {
        name: 'SuppliersMap',
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
