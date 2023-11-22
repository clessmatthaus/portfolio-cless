<template>
  <div class="detail-container" @click="close">
    <div class="a-propos">
      <router-link to="./PortfolioView">
        <i class="ri-close-circle-fill" id="close-btn1" @click="close"></i>
      </router-link>
    </div>
    <div class="modal-container">
      <div class="modale-img">
        <img v-bind:src="image" alt="" />
      </div>
      <div class="modale-desc">
        <div class="title-desc">
          <h1>{{ title }}</h1>
          <p>{{ desc }}</p>
        </div>
        <div class="infos-project">
          <p class="date-c">
            Date de creation: <span>{{ date }}</span>
          </p>
          <p class="tech-c">
            Technologies/langages:
            <span
              >{{ technologie }}
              <a class="android-kotlin"><i class="ri-coreos-fill"></i></a
            ></span>
          </p>
          <a
            href="https://github.com/clessmatthaus/Christmas-countdown-Timer/tree/main/CHRISTMAS%20COUNTDOWN%20TIMER"
            target="_blank"
            ><i class="ri-github-fill" id="git"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="med">
      <div class="photo">
        <router-link to="./CarouSlider1">
          <button class="photos">Photos <i class="ri-gallery-fill"></i></button>
        </router-link>
      </div>
      <div class="video">
        <router-link to="./VideoProject1">
          <button class="videos">Video <i class="ri-movie-fill"></i></button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Application de nettoyage PC avec C# DOTNET",
      desc: "Dans ce projet personnel de creation d'une application de bureau pour nettoyage PC. Projet réalisé avec le langage de programmation C#/DotNet Core. j'ai pu réaliser une interface utilisateur web  statique, adaptable et dynamique. ",
      date: " 10/05/2023",
      technologie: " C-SHARP/DOTNET CORE",
      image: require("../assets/pc-cleaner.png"),
    };
  },
};
</script>

<style scoped>
body {
  color: black;
}
.detail-container {
  background: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-top: 0px;
  width: 100%;
  height: 100vh;
  color: black;
  position: fixed;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  justify-content: center;
  align-items: center;
  z-index: 50001;
}
.a-propos h1 {
  margin-bottom: 20px;
}
.a-propos #close-btn1 {
  color: var(--text-color);
  font-size: 35px;
  margin-left: 50%;
  margin-bottom: 0px;
}
.modal-container {
  width: 90vw;
  height: 80vh;
  display: flex;
  background: white;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgb(200, 199, 199);
  flex-direction: row;
}
.modale-img {
  width: 50vw;
  height: 100%;
  background: white;
  border: 1px solid white;
}
.modale-img img {
  width: 49vw;
  height: 100%;
  cursor: pointer;
}
.modale-desc {
  width: 70vw;
  height: 72vh;
  margin: 10px;
  background: white;
  display: flex;
  flex-direction: column;
}
.title-desc {
  height: 65vh;
}
.title-desc h1 {
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 22px;
}
.title-desc p {
  font-size: 19px;
  font-weight: 500;
  margin-top: 20px;
}
.infos-project {
  font-weight: bold;
  text-align: center;
}
.date-c {
  margin-bottom: 10px;
}
.tech-c {
  margin-bottom: 10px;
}
.date-c span {
  color: blue;
  font-size: 17px;
}
.tech-c span {
  color: blue;
  font-size: 15px;
}
.tech-c i {
  color: rgb(246, 166, 18);
  font-size: 28px;
}
#git {
  margin-top: 40px;
  font-size: 45px;
  color: rgb(50, 50, 50);
}

.med {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.photos {
  border: 1px solid black;
  color: white;
  margin-top: 20px;
  background: blue;
  border-radius: 5px;
  padding: 10px 40px;
  cursor: pointer;
}
.photos:hover {
  background: rgb(159, 104, 1);
  color: white;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 10px var(--text-color);
}
.videos {
  border: 1px solid black;
  padding: 10px 40px;
  color: white;
  background: blue;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 20px;
  cursor: pointer;
}
.videos:hover {
  background: rgb(159, 104, 1);
  color: white;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 10px var(--text-color);
}
@media (max-width: 980px) {
  .title-desc h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 18px;
  }
  .title-desc p {
    font-size: 13px;
    font-weight: bold;
    margin-top: 20px;
  }
  .tech-c i {
    color: rgb(246, 166, 18);
    font-size: 22px;
  }
  #git {
    margin-top: 30px;
    font-size: 40px;
    color: rgb(50, 50, 50);
  }
}
@media (max-width: 880px) {
  .modal-container {
    height: 80vh;
    display: flex;
    background: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 2px 2px 2px 2px var(--secondary-color);
    border: 1px solid rgb(200, 199, 199);
    flex-direction: column;
  }
  .modale-img {
    width: 100%;
    height: 40vh;
    background: white;
    border: 1px solid white;
  }
  .modale-img img {
    width: 100%;
    height: 100%;
  }
  .modale-desc {
    width: 87vw;
    height: 38vh;
    margin: 10px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .title-desc {
    height: 14vh;
  }
  .title-desc h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  .title-desc p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
  .infos-project {
    font-weight: bold;
    text-align: center;
    margin-top: 70px;
  }
  .infos-project span {
    font-size: 11px;
  }
  .infos-project p {
    font-size: 11px;
  }
  .tech-c i {
    color: rgb(246, 166, 18);
    font-size: 20px;
  }
  #git {
    margin-top: 30px;
    font-size: 35px;
    color: rgb(50, 50, 50);
  }
}
@media (max-width: 780px) {
  .modal-container {
    height: 80vh;
    display: flex;
    background: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 2px 2px 2px 2px var(--secondary-color);
    border: 1px solid rgb(200, 199, 199);
    flex-direction: column;
  }
  .modale-img {
    width: 100%;
    height: 40vh;
    background: white;
    border: 1px solid white;
  }
  .modale-img img {
    width: 100%;
    height: 100%;
  }
  .modale-desc {
    width: 85vw;
    height: 38vh;
    margin: 10px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .title-desc {
    height: 14vh;
  }
  .title-desc h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  .title-desc p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
  .infos-project {
    font-weight: bold;
    text-align: center;
    margin-top: 70px;
  }
  .infos-project span {
    font-size: 11px;
  }
  .infos-project p {
    font-size: 11px;
  }
  .tech-c i {
    color: rgb(246, 166, 18);
    font-size: 20px;
  }
  #git {
    margin-top: 30px;
    font-size: 35px;
    color: rgb(50, 50, 50);
  }
}
@media (max-width: 680px) {
  .modal-container {
    height: 80vh;
    display: flex;
    background: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 2px 2px 2px 2px var(--secondary-color);
    border: 1px solid rgb(200, 199, 199);
    flex-direction: column;
  }
  .modale-img {
    width: 100%;
    height: 40vh;
    background: white;
    border: 1px solid white;
  }
  .modale-img img {
    width: 100%;
    height: 100%;
  }
  .modale-desc {
    width: 85vw;
    height: 38vh;
    margin: 10px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .title-desc {
    height: 14vh;
  }
  .title-desc h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  .title-desc p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
  .infos-project {
    font-weight: bold;
    text-align: center;
    margin-top: 70px;
  }
  .infos-project span {
    font-size: 11px;
  }
  .infos-project p {
    font-size: 11px;
  }
  .tech-c i {
    color: rgb(246, 166, 18);
    font-size: 20px;
  }
  #git {
    margin-top: 30px;
    font-size: 35px;
    color: rgb(50, 50, 50);
  }
}

@media (max-width: 780px) {
  .modal-container {
    height: 80vh;
    display: flex;
    background: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 2px 2px 2px 2px var(--secondary-color);
    border: 1px solid rgb(200, 199, 199);
    flex-direction: column;
  }
  .modale-img {
    width: 100%;
    height: 40vh;
    background: white;
    border: 1px solid white;
  }
  .modale-img img {
    width: 100%;
    height: 100%;
  }
  .modale-desc {
    width: 85vw;
    height: 38vh;
    margin: 10px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .title-desc {
    height: 14vh;
  }
  .title-desc h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  .title-desc p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
  .infos-project {
    font-weight: bold;
    text-align: center;
    margin-top: 70px;
  }
  .infos-project span {
    font-size: 11px;
  }
  .infos-project p {
    font-size: 11px;
  }
  .tech-c i {
    color: rgb(246, 166, 18);
    font-size: 20px;
  }
  #git {
    margin-top: 30px;
    font-size: 35px;
    color: rgb(50, 50, 50);
  }
}
@media (max-width: 680px) {
  .modal-container {
    height: 80vh;
    display: flex;
    background: white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 2px 2px 2px 2px var(--secondary-color);
    border: 1px solid rgb(200, 199, 199);
    flex-direction: column;
  }
  .modale-img {
    width: 100%;
    height: 40vh;
    background: white;
    border: 1px solid white;
  }
  .modale-img img {
    width: 100%;
    height: 100%;
  }
  .modale-desc {
    width: 85vw;
    height: 38vh;
    margin: 10px;
    background: white;
    display: flex;
    flex-direction: column;
  }
  .title-desc {
    height: 14vh;
  }
  .title-desc h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 13px;
  }
  .title-desc p {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
  .infos-project {
    font-weight: bold;
    text-align: center;
    margin-top: 70px;
  }
  .infos-project span {
    font-size: 11px;
  }
  .infos-project p {
    font-size: 11px;
  }
  .tech-c i {
    color: rgb(246, 166, 18);
    font-size: 20px;
  }
  #git {
    margin-top: 30px;
    font-size: 35px;
    color: rgb(50, 50, 50);
  }
  
.med {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.photos {
  border: 1px solid black;
  color: white;
  margin-top: 20px;
  background: blue;
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer;
}
.photos:hover {
  background: rgb(159, 104, 1);
  color: white;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 10px var(--text-color);
}
.videos {
  border: 1px solid black;
  padding: 5px 20px;
  color: white;
  background: blue;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 20px;
  cursor: pointer;
}
.videos:hover {
  background: rgb(159, 104, 1);
  color: white;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 10px var(--text-color);
}
}
@media (max-width: 200px){
  
.photos {
  border: 1px solid black;
  color: white;
  margin-top: 20px;
  background: blue;
  border-radius: 5px;
  padding: 3px 12px;
  cursor: pointer;
}
.photos:hover {
  background: rgb(159, 104, 1);
  color: white;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 10px var(--text-color);
}
.videos {
  border: 1px solid black;
  padding: 3px 12px;
  color: white;
  background: blue;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 20px;
  cursor: pointer;
}
.videos:hover {
  background: rgb(159, 104, 1);
  color: white;
  border: 1px solid var(--text-color);
  box-shadow: 0 0 10px var(--text-color);
}
}
</style>
