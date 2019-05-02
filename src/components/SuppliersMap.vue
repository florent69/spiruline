<template>
    <div class="map">
        <h1>Carte des fournisseurs</h1>
        <GmapMap
                :center="{lat:45.763420, lng:4.834277}"
                :zoom="7"
                map-type-id="terrain"
                style="width: 800px; height: 500px"
                class="mx-auto"
        >
            <GmapMarker
                    :key="id"
                    v-for="(supplier, id) in suppliers"
                    :position="{lat: supplier.latitude, lng: supplier.longitude}"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat: supplier.latitude, lng: supplier.longitude}"
            />
        </GmapMap>
    </div>
</template>



<script>

    export default {
        name: 'SuppliersMap',
        props: {
            msg: String
        },
        methods: {
            onMapClick(){
                window.alert("alert click on it!")
            }
        },
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        latitude: 45.763420,
                        longitude: 5

                    },
                    {
                        id: 2,
                        latitude: 45.763420,
                        longitude: 4.6

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
