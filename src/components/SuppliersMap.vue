<template>
    <div>
        <h1>Carte des fournisseurs</h1>
        <br>
        <div id="requestLoading">
            <p v-if="loading">Requête en cours</p>
            <p v-else-if="error" class="text-danger">Erreur de chargement </p>
        </div>

        <GmapMap
                :center="currentLocation"
                :zoom="16"
                map-type-id="roadmap"
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
    import { mapGetters } from 'vuex'

    export default {
        name: 'SuppliersMap',
        computed: {
            ...mapGetters([
                'suppliers',
                'loading',
                'error',
                'currentLocation'
            ])
        },
        methods: {
            ...mapActions(['suppliersLoading', 'geolocation'])
        },
        created() {
            this.$store.dispatch('suppliersLoading')
        },
        mounted : function() {
            this.geolocation();
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #requestLoading {
        font-size:xx-large;
    }
</style>
