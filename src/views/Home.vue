<template>
  <section class="main-section" id="accueil">
    <div class="main-content">
      <h1>{{ title }}</h1>
      <h2>{{ subTitle }}</h2>
      <p>{{ desc }}</p>
      <div class="media">
        <a href="https://github.com/" target="_blank"><i class="ri-github-fill"></i></a>
        <a href="https://www.linkedin.com/home" target="_blank"><i class="ri-linkedin-fill"></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a>
        <a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a>
      </div>
      <div class="docs-btn">
        <a href="#" class="cv" @click="downloadPDF">{{ cv }}<i class="ri-download-2-fill"></i></a>
        <a href="mailto:cless91@live.fr" class="cv contract">{{ hire }}<i class="ri-briefcase-4-line"></i></a>
      </div>
    </div>
  </section>
  <About />
  <ServicesContent />
  <PortfolioView />
  <ContactView />
</template>
<script>
import jsPDF from "jspdf";
import About from "./About.vue";
import ServicesContent from "./ServicesContent.vue";
import PortfolioView from "./PortfolioView.vue";
import ContactView from "./ContactView.vue";
export default {
  name: "HomeView",
  components: {
    About,
    ServicesContent,
    PortfolioView,
    ContactView,
  },
  data() {
    return {
      title: "Hello, Je suis Cless Matthaüs",
      subTitle: "Développeur Web Junior",
      desc: "J’ai donc suivi plusieurs formations Développeur web et mobile en autodidacte sur des plateformes de formation e-learning  notamment Udemy et Tuto.com avec des certificats de fin de formation obtenus(dévoloppeur Web et développeur Android Kotlin). Actuellement je suis une formation Titre pro Développeur web et mobile niveau Bac+2 en e-learning, formation délivrée par le centre européen de formation(cenef). Je continue donc à me former chaque jour avec envie, motivation et des idées plein la tête.",
      cv: "Télécharger CV",
      hire: "Me Contacter",
    };
  },
  methods: {
    downloadPDF() {
      const cv = require("@/assets/ceve.png");
      const cvPdf = new jsPDF();
      var cvImage = new Image();
      cvImage.src = cv;

      cvPdf.addImage(cvImage, "PNG", -28, 20, 265, 250);
      cvPdf.save("CV.pdf");
    },
  },
};
</script>

<style>

/****************************** HOME CSS *************************/
:root {
  /*--primary-color: linear-gradient(
    rgb(226, 245, 251),
    white,
    rgb(226, 245, 251)
  );*/
  --primary-color:white;
  /****************************** HOME CSS *************************/
  --secondary-color: white;
  --thirt-color: black;
  --foor-color: rgb(21, 21, 170);
  --five-color: rgba(17, 110, 204, 0.544);
  --six-color: white;
  --sev-color: rgba(3, 16, 91, 0.544);
  --hei-color: white;
  --fiv-color: rgba(3, 16, 91, 0.544);
  --nine-color: rgb(243, 200, 8);
  --icon-back:rgb(231, 156, 15);
  --ten-color: linear-gradient(
    rgb(85, 165, 239),
    rgb(131, 192, 249),
    rgb(26, 128, 223)
  );
  --text-color: black;
  --bor-color: rgb(3, 3, 104);
  --back-color: rgb(3, 3, 104);
  --text-hcolor: linear-gradient(rgb(21, 21, 170), rgb(202, 181, 17));
  --black-white: white;
  --about-back: rgb(192, 218, 248);
}
.dark-theme {
  --primary-color: black;
  --secondary-color: white;
  --thirt-color: wheat;
  --foor-color: rgb(21, 21, 170);
  --five-color: rgb(1, 10, 48);
  --six-color: white;
  --sev-color: white;
  --hei-color: wheat;
  --fiv-color: wheat;
  --nine-color: white;
  --ten-color: rgb(11, 2, 70);
  --icon-back:white;
  --text-color: white;
  --bor-color: white;
  --back-color: transparent;
  --text-hcolor: linear-gradient(rgb(248, 247, 251), rgb(249, 233, 109));
  --black-white: black;
  --about-back: rgba(1, 1, 32, 0.87);
}
body {
  background: var(--primary-color);
  color: var(--text-color);
}
section{
  padding:100px 80px;
}
.main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 750px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
}
.main-content {
  padding-left: 0px;
}
.main-content h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 3.3rem;
  margin: 130px 0px 20px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 1.6rem;
  width: 750px;
  margin-top: 35px;
  font-weight: 400;
  line-height: 30px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 30px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 63px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 20px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 40px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
.media i:hover {
  background: var(--nine-color);
  border: 3px solid var(--nine-color);
  color: blue;
  box-shadow: 0 0 20px var(--nine-color);
}
.cv {
  display: inline-block;
  padding: 12px 25px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
.cv:hover {
  background: rgb(202, 181, 17);
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
}

.cv a {
  color: var(--secondary-color);
}

.cv i {
  margin-left: 7px;
}
.contract {
  margin-left: 40px;
  background: var(--hei-color);
  color: rgb(63, 53, 5);
}
.contract:hover {
  color: var(--nine-color);
  background: var(--back-color);
  border: 1px solid var(--nine-color);
}
@keyframes backcolor {
  100% {
    background-position: 0 0;
  }
}
@media screen and (max-width: 850px){
  .main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 750px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
}
}
@media screen and (max-width: 800px){
  .main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 650px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
}

.main-content h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 2.8rem;
  margin: 120px 0px 20px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 1.2rem;
  width: 600px;
  margin-top: 30px;
  font-weight: 400;
  line-height: 25px;
  color: var(--text-color);
}

.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 20px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 40px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
}

@media screen and (max-width: 675px){
  .main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 550px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
}

.main-content h2 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.5rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 1.1rem;
  width: 500px;
  margin-top: 30px;
  font-weight: 400;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 15px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 33px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
}

@media screen and (max-width: 580px){
  .main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 450px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
}

.main-content h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.3rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 1.1rem;
  width: 400px;
  margin-top: 30px;
  font-weight: 400;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 15px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 30px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
.cv {
  display: inline-block;
  padding: 8px 15px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
}

@media screen and (max-width: 480px){
  .main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 370px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
}

.main-content h2 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.3rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 1rem;
  width: 300px;
  margin-top: 30px;
  font-weight: 300;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 12px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 30px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
.cv {
  display: inline-block;
  padding: 6px 11px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
.contract {
  margin-left: 20px;
  background: var(--hei-color);
  color: rgb(63, 53, 5);
}
}

@media screen and (max-width: 450px){
  .main-section {
  height: 100%;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 350px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
  
}

.main-content h2 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.2rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 0.9rem;
  width: 100%;
  margin-top: 30px;
  font-weight: 300;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 12px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 30px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
.cv {
  display: inline-block;
  padding: 6px 11px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
.contract {
  margin-left: 20px;
  background: var(--hei-color);
  color: rgb(63, 53, 5);
}
}

@media screen and (max-width: 400px){
  section{
  padding:100px 40px;
  overflow: hidden;
}
  .main-section {
  height: 80vh;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 320px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
  
}

.main-content h2 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.2rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 0.9rem;
  width: 100%;
  margin-top: 30px;
  font-weight: 300;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 12px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 30px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}

.cv {
  display: inline-block;
  padding: 3px 6px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
.contract {
  margin-left: 15px;
  background: var(--hei-color);
  color: rgb(63, 53, 5);
}

}

@media screen and (max-width: 380px){
  section{
  padding:100px 30px;
  overflow: hidden;
}
  .main-section {
  height: 75vh;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size: 310px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
  
}

.main-content h2 {
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.2rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 0.8rem;
  width: 100%;
  margin-top: 30px;
  font-weight: 300;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 12px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 30px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}

.cv {
  display: inline-block;
  padding: 3px 6px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
.contract {
  margin-left: 15px;
  background: var(--hei-color);
  color: rgb(63, 53, 5);
}

}

@media screen and (max-width: 360px){
  section{
  padding:100px 30px;
}
  .main-section {
  height: 80vh;
  width: 100%;
  background-image: url(../assets/grandes.png);
  background-repeat: no-repeat;
  background-size:  290px;
  background-position: right bottom -3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--about-back);
  border-bottom: 2px solid var(--about-back);
  
}

.main-content h2 {
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--bor-color);
}
.main-content h1 {
  font-size: 1.2rem;
  margin: 100px 0px 10px;
  font-weight: bold;
  color: transparent;
  background-image: var(--text-hcolor);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -650px 0;
  animation: backcolor 5s linear infinite alternate;
}

.main-content p {
  font-size: 0.8rem;
  width: 100%;
  margin-top: 30px;
  font-weight: 300;
  line-height: 25px;
  color: var(--text-color);
}
.media {
  margin-top: 10px;
  margin-bottom: 20px;
}
.media i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--back-color);
  border-radius: 50px;
  font-size: 12px;
  box-shadow: 0 0 10px var(--secondary-color);
  backdrop-filter: brightness(88%);
  cursor: pointer;
  margin-right: 20px;
  margin-top: 30px;
  transition: 0.3s;
  border: 3px solid var(--bor-color);
  color: rgb(202, 181, 17);
  transition: all 0.5s ease;
}
.cv {
  display: inline-block;
  padding: 3px 6px;
  background: transparent;
  color: var(--text-color);
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  border: 2px solid var(--bor-color);
}
.contract {
  margin-left: 15px;
  background: var(--hei-color);
  color: rgb(63, 53, 5);
}

}
</style>