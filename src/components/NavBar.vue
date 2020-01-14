<template>
    <nav>
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/About" tag="li" active-class="active"><a>About</a></router-link>
            <router-link to="/UX" tag="li" active-class="active"><a>UX</a></router-link>
            <router-link to="/UI" tag="li" active-class="active"><a>UI & Web</a></router-link>
            <router-link to="/Contact" tag="li" active-class="active"><a>Contact</a></router-link>
        </ul>
    </nav>
</template>
<!--
 1. The anchor tag is replaced with router-link tag (really a built-in vue
    component). The to="" attribute is added to target the path you want to
    navigate to.
-->
<style scoped>
    nav {
        box-sizing: border-box;
        transform: translate(-50%, -50%) rotateZ(90deg);
        top: 50%;
        left: 96%;
        width: 100vh;
        position: absolute;
        padding: 0 40px;
        overflow: hidden;
        text-align: center;
    }
    nav ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
    }
    nav ul li a {
        display: inline-block;
        width: 135px;
        height: 135px;
        line-height: 135px;
        border-radius: 50%;
        transition: transform .3s;
        text-decoration: none;
        color: rgba(0,204,171,1);
        color: #35495e;
        font-size: 20px;
    }
    nav ul li a:hover {
        transform: rotateZ(-90deg);
    }
    nav ul li a:visited {
        color: rgba(0,204,171,1);
        color:#35495e;
    }
</style>
