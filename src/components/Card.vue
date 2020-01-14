<template>
    <div id="card">
        <div class="card-image">
            <div class="card-image" :style="{ background:'url( ' + require(`../assets/${image}`) + ') center center no-repeat'}">
                <div class="card-image__title">{{ cardTitle }}</div>
                <!--<img :src="require(`../assets/${image}`)" :alt="image">-->
            </div>
        </div>
        <div class="card-info">
            <div class="card-info__title">{{ title }}</div>
            <p class="card-info__description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['cardTitle', 'title', 'description', 'image']
}
</script>

<style scoped>
    #card {
        width: 100%;
        max-width: 300px;
        height: 400px;
        border-radius: 10px;
        background: linear-gradient(110deg, rgba(0,204,171,1) 0%, rgba(0,212,255,1) 100%);
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        color: #ffffff;
        overflow: hidden;
    }
    #card:hover {
        transform: scale(1.02);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .card-image {
        position: relative;
        width: 100%;
        height: 250px;
        z-index: 700;
    }
    .card-image__title {
        margin: 0;
        font-weight: 300;
        position: absolute;
        bottom: 10px;
        left: 20px;
        color: black;
        font-size: 18px;
    }
    .card-info {
        padding: 15px 20px;
    }
    .card-info__title {
        font-size: 34px;
        font-weight: 700;
        padding: 0 0 10px 0;
    }
    .card-info__description {
        font-size: 20px;
    }
    img {
        max-height: 100%;
        max-width: 100%;
    }
</style>
