<template>
  <div id="home">
    <div ref="welcomeDiv" id="welcome-div" class="start">
      <h1 id="welcome-text">WELCOME</h1>

      <div id="welcome-profile">

        <div id="circle-img">
        </div>

        <div id="brief-welcome">
          <p>
            Fullstack Web Developer with 2+ years of expreience. Experience with JavaScript, Python, HTML, CSS, Vue.js, MongoDB, and Git
          </p>
        </div>

      </div>
    </div>

    <div ref='aboutMe' id="about-me" class="start">

      <h3>Hi</h3>

      <p>Hey! I’m Terrence Luciano, 22 years old, and currently living in New Jersey. I found my passion for programming when I took a Java Programming class in my second year of college. Even though at the time I was studying Information Technology, I knew after that class that I really enjoyed programming. Since then I’ve been expanding my skill set by teaching myself languages such as Python, JavaScript, as well as C languages like C# and C++. I explored different fields in Computer Science such as Full Stack Web Development, Data Science, Embedded Programming, and Game Development. Today I primarily work in Full Stack Web Development utilizing technologies like Vue.js, Express.js, Node.js, MongoDB, HTML5, CSS3, Figma, and Git. </p>

    </div>

    <div id="skills-div">

      <h2 ref="skillsTitle" class="start">Skills</h2>

      <div ref="backendSlide" class="start skill-div">
        <div class="skill-card">
          <img />
          <p>Backend</p>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {

    let seenDivs = [];

    const welcomeDiv = ref(null);
    const aboutMe = ref(null);
    const skillsTitle = ref(null);
    const backendSlide = ref(null);

    const divs = [welcomeDiv, aboutMe, skillsTitle, backendSlide];

    function animateDiv(div) {
      div.style.transform = 'translateY(0px)';
      div.style.opacity = 1;
    }

    function checkBound (refElement) {

      let bound = refElement.value.getBoundingClientRect();

      if (bound.y <= window.innerHeight - 40) {

        animateDiv(refElement.value)
        seenDivs.push(refElement);

      }

    }

    onMounted(() => {

      divs.forEach(div => {

        checkBound(div);

      })

    })

    window.addEventListener("scroll", function() {

      divs.forEach(div => {

        if (seenDivs.includes(div) == false) {

          checkBound(div);

        }

      })

    })

    return {
      welcomeDiv,
      aboutMe,
      skillsTitle,
      backendSlide
    }
  },
  name: 'Home'
}
</script>

<style>
.start {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.5s;
}

#home {
  margin-bottom: 40px;
}

#welcome-div {
  padding: 0;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#welcome-text {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 200px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: -4px 4px 4px rgba(207, 169, 255, 0.5);
  padding: 0;
  margin: 0;
}
#welcome-profile {
  display: flex;
  margin: 0;
  padding: 0;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
.my-face {
  height: 155px;
  padding: 0;
  margin: 0;
}
#circle-img {
  padding: 0;
  margin: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-position: center;
  background-size: 230px;
  background-image: url("~@/assets/notmeface.jpg");
}

#brief-welcome {
  padding: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #61309F;
  border-radius: 10px;
  width: 320px;
}

#brief-welcome p {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;
  margin: 0;
}

#about-me {
  margin: 150px auto 0 auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  background: #61309F;
  box-shadow: -2px 2px 4px rgba(255, 255, 255, 0.5);
  gap: 15px;
}

#about-me h3 {
  margin: 0;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  color: #FFFFFF;
}

#about-me p {
  margin: 0;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
}

#skills-div {
  margin: 150px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

#skills-div h2 {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 72px;
  color: #FFFFFF;
  text-shadow: -2px 2px 0px #CFA9FF;
  margin: 0;
}

.skill-div {
  background: rgba(16, 12, 125, 0.2);
  padding: 40px;
  width: 1240px;
}

.skill-card {
  margin: 0;
  width: 560px;
  height: 300px;
  background: #61309F;
  box-shadow: -2px 2px 4px rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.skill-card p {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 72px;
  color: #FFFFFF;
  text-shadow: -2px 2px 0px #000000;
}
</style>