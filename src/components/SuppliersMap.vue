<template>
    <div class="map">
        <h1>Carte des fournisseurs</h1>
        <GmapMap
                :center="{lat:45.763420, lng:4.834277}"
                :zoom="12"
                map-type-id="terrain"
                style="width:500px; height:300px"
                class="mx-auto"
        ></GmapMap>
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
