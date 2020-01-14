<template>
    <div id="ui">
        <div class="card-container">
            <div class="test" v-for="project in projects" :key="project.title">
                <Card
                    @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }"
                    :cardTitle="project.cardTitle"
                    :title="project.title"
                    :description="project.description"
                    :image="project.image"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  data: function () {
    return {
      projects: [
        { cardTitle: 'UX Project 1', title: 'Fit Form', description: 'Lorem ipsum dolo sit amet', image: 'audi.jpg' },
        { cardTitle: 'UX Project 2', title: 'PB Nation', description: "I haven't bought the game", image: 'logo.png' },
        { cardTitle: 'UX Project 3', title: 'Unknown', description: "It's always about the third party", image: 'audi.jpg' }
      ],
      hover: false
    }
  },
  components: {
    'Card': Card
  }
}
</script>

<style scoped>
    #ui {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
    }
    .card-container {
        width: 100%;
        max-width: 1000px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
    .card-container div {
        flex: 1;
        margin: 0 auto;
    }
    .card-container:hover #card {
      filter: brightness(50%);
    }
    .card-container #card:hover {
      filter: brightness(100%);
    }
</style>
