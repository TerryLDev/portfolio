<template>
  <nav id="navbar">
    <router-link class="tab" to="/">Home</router-link>
    <p class="tab" id="project-tab">Projects</p>
    <router-link class="tab" to="/resume">Resume</router-link>
    <router-link class="tab" to="/contact">Contact</router-link>
    <a class="tab" href="https://github.com/TerryLDev">GitHub</a>
  </nav>
  <router-view />
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  props: {
    RouterLink,
    inactiveClass: String,
  },
  name: 'Nav'
}
</script>

<style>
#navbar {
  width: 100%;
  height: 50px;
  background-color: #61309F;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.tab {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  display: inline-block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.tab.router-link-active {
  color: white;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.5);
  text-underline-offset: 3px;
}

.tab:hover {

  animation-name: tab-highlight;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;

}

@keyframes tab-highlight {
  to {
    color: white;
  }
} 

</style>