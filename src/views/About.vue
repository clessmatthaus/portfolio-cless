<template>
  <section class="modal-backdrop">
    <div class="a-propos">
      <h1>{{ title }}</h1>
    </div>
    <div class="modal">
      <div class="modal-desc">
        <h1>{{ name }}</h1>
        <p>{{ descProfil }}</p>
        <div class="desc-div">
          <a
            href="https://www.google.fr/maps/@48.7375126,2.2609628,3a,75y,148.49h,90t/data=!3m6!1e1!3m4!1sslaJbDhf5j6mbFzXxNtYrA!2e0!7i16384!8i8192?entry=ttu"
            target="_blank"
            ><i class="ri-home-3-line"></i> {{ adress }}</a
          >
          <a href="tel:+33 6 X2 01 6X 8X"
            ><i class="ri-phone-line"></i> {{ phone }}</a
          >
          <a href="mailto:devs88@gmail.com"
            ><i class="ri-mail-line"></i> {{ email }}
          </a>
          <a href="https://github.com/clessmatthaus" target="_blank"
            ><i class="ri-github-fill"></i> {{ github }}</a
          >
        </div>
      </div>

      <div class="modal-img">
        <img v-bind:src="image" alt="" />
      </div>

      <div class="modal-skills">
        <h1>{{ skills }}</h1>
        <p>{{ descSkills }}</p>
        <div class="skills">
          <p class="skill-web">
            {{ web }}<span>{{ Pweb }}</span>
          </p>
          <div class="web"><div id="p-web"></div></div>
          <p class="skill-design">
            {{ design }} <span>{{ Pdesign }}</span>
          </p>
          <div class="design"><div id="p-des"></div></div>
          <p class="skill-mobile">
            {{ mobile }} <span>{{ Pmobile }}</span>
          </p>
          <div class="mobile"><div id="p-mob"></div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      title: "*** À Propos de moi ***",
      name: "Cless Matthaüs",
      descProfil:
        " Je m'appelle Cless Matthaüs. J’ai donc suivi plusieurs formations Développeur web et mobile en autodidacte sur des plateformes de formation e-learning  notamment Udemy et Tuto.com avec des certificats de fin de formation obtenus(dévoloppeur Web et développeur Android Kotlin). Actuellement je suis une formation Titre pro Développeur web et mobile niveau Bac+2 en e-learning, formation délivrée par le centre européen de formation(cenef). Je continue donc à me former chaque jour avec envie, motivation et des idées plein la tête.",
      descSkills:
        "Mes compétences dans le devéloppement web front end et mobile: j'ai une bonne connaissance du langage Javascript avec le framework React js, le langage de balise html et le langage de style css/sass. j'ai une connaissance assez solide du langage de programmation Kotlin pour le développement des applications mobile Android. quelques notions de bases du logiciel Figma pour la conception des maquettes pour applications web et mobile.",
      skills: "Mes compétences professionnelles",
      adress: "Nantes, FRANCE",
      phone: "+33 7 58 80 71 64",
      email: "cless91@live.fr",
      github: "https://github.com/clessmatthaus",
      web: "Développement Web",
      Pweb: "75%",
      design: "UI/UX Design",
      Pdesign: "55%",
      mobile: "Développement Mobile",
      Pmobile: "45%",
      image: require("@/assets/About.png"),
    };
  },
};
</script>

<style>
/****************************** ABOUT CSS *************************/
.modal-backdrop {
  width: 100%;
  height: 100%;
  padding: 50px 0px;
}

.a-propos {
  width: 100%;
}
.a-propos h1 {
  text-align: center;
  color: rgb(231, 156, 15);
  font-size: 22px;
  margin-top: 60px;
  
}

.modal {
  width: 100%;
  height: 510px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  justify-content: space-between;
  background: var(--about-back);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.modal-desc {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0px 10px;
  border: 1px solid transparent;
  width: 42vw;
}
.modal-desc h1 {
  margin-top: 10px;
  font-size: 22px;
  color: rgb(231, 156, 15);
}
.modal-skills h1 {
  margin-top: 10px;
  font-size: 20px;
  color: rgb(231, 156, 15);
}
.modal-desc p,
.modal-skills p {
  margin-top: 20px;
  font-size: 17px;
  line-break: auto;
  color: var(--text-color);
  font-weight: 200;
}
.desc-div {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  list-style: none;
  text-decoration: none;
}
.desc-div a {
  padding: 3px 0px;
  list-style: none;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  color: rgb(116, 115, 115);
}
.desc-div i {
  font-size: 30px;
  margin-right: 10px;
  color: var(--icon-back);
}
.modal-img {
  width: 230px;
  height: 230px;
  margin-right: 20px;
  margin-top: 150px;
  border-radius: 100%;
  background: transparent;
  background-size: 230px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 230px;
  height: 230px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
.modal-skills {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px 10px;
  margin-left: 20px;
  border: 1px solid transparent;
  width: 50vw;
}
.skills {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.skills span {
  color: var(--text-color);
}
.web,
.mobile,
.design {
  height: 10px;
  width: 430px;
  border: 1px solid rgb(213, 212, 212);
  border-radius: 20px;
  margin: 10px 0px;
  background-color: white;
}
.skill-web span {
  margin-left: 305px;
}
.skill-mobile span {
  margin-left: 288px;
}
.skill-design span {
  margin-left: 338px;
}
#p-web {
  width: 310px;
  height: 10px;
  border-left: 1px solid transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: green;
}
#p-mob {
  width: 170px;
  height: 10px;
  border-left: 1px solid transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: rgb(214, 101, 14);
}
#p-des {
  width: 230px;
  height: 10px;
  border-left: 1px solid transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: rgb(241, 213, 51);
}
@media screen and(max-width: 1160px){
  .modal-img {
  width: 170px;
  height: 170px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 150px;
  border-radius: 100%;
  background: transparent;
  background-size: 170px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 170px;
  height: 170px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
}
@media (max-width: 1050px){
  .modal {
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  background: var(--about-back);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.modal-desc {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0px 10px;
  border: 1px solid transparent;
  width: 100%;
}
.modal-skills {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px 10px;
  margin-left: 20px;
  border: 1px solid transparent;
  width: 100%;
}
.modal-img {
  width: 170px;
  height: 170px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 60px;
  border-radius: 100%;
  background: transparent;
  background-size: 170px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 170px;
  height: 170px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
}
@media (max-width: 555px){
  
.web,
.mobile,
.design {
  height: 5px;
  width: 230px;
  border: 1px solid rgb(213, 212, 212);
  border-radius: 20px;
  margin: 10px 0px;
  background-color: white;
}
.skill-web span {
  margin-left: 105px;
}
.skill-mobile span {
  margin-left: 90px;
}
.skill-design span {
  margin-left: 138px;
}
#p-web {
  width: 170px;
  height: 5px;
  border-left: 1px solid transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: green;
}
#p-mob {
  width: 90px;
  height: 5px;
  border-left: 1px solid transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: rgb(214, 101, 14);
}
#p-des {
  width: 130px;
  height: 5px;
  border-left: 1px solid transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: rgb(241, 213, 51);
}

.modal-desc h1 {
  margin-top: 10px;
  font-size: 18px;
  color: rgb(231, 156, 15);
}
.modal-skills h1 {
  margin-top: 10px;
  font-size: 16px;
  color: rgb(231, 156, 15);
}
.modal-desc p,
.modal-skills p {
  margin-top: 20px;
  font-size: 12px;
  line-break: auto;
  color: var(--text-color);
  font-weight: 200;
}
.desc-div a {
  padding: 3px 0px;
  list-style: none;
  font-weight: 400;
  font-size: 12px;
  text-decoration: none;
  color: rgb(116, 115, 115);
}
}

@media screen and (max-width: 455px){
  
  .web,
  .mobile,
  .design {
    height: 5px;
    width: 150px;
    border: 1px solid rgb(213, 212, 212);
    border-radius: 20px;
    margin: 10px 0px;
    background-color: white;
  }
  .skill-web span {
    margin-left: 85px;
  }
  .skill-mobile span {
    margin-left: 70px;
  }
  .skill-design span {
    margin-left: 108px;
  }
  #p-web {
    width: 120px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: green;
  }
  #p-mob {
    width: 60px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(214, 101, 14);
  }
  #p-des {
    width: 80px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(241, 213, 51);
  }
  
  .modal-desc h1 {
    margin-top: 10px;
    font-size: 18px;
    color: rgb(231, 156, 15);
  }
  .modal-skills h1 {
    margin-top: 10px;
    font-size: 16px;
    color: rgb(231, 156, 15);
  }
  .modal-desc p,
  .modal-skills p {
    margin-top: 20px;
    font-size: 12px;
    line-break: auto;
    color: var(--text-color);
    font-weight: 200;
  }
  .desc-div a {
    padding: 3px 0px;
    list-style: none;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    color: rgb(116, 115, 115);
  }
  .modal-img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 60px;
  border-radius: 100%;
  background: transparent;
  background-size: 100px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
  }

  @media screen and(max-width: 400px){
  .a-propos{
  text-align: center;
  color: rgb(231, 156, 15);
  font-size: 15px;
  margin-top: 60px; 
} 
  .web,
  .mobile,
  .design {
    height: 5px;
    width: 150px;
    border: 1px solid rgb(213, 212, 212);
    border-radius: 20px;
    margin: 10px 0px;
    background-color: white;
  }
  .skill-web span {
    margin-left: 85px;
  }
  .skill-mobile span {
    margin-left: 70px;
  }
  .skill-design span {
    margin-left: 108px;
  }
  #p-web {
    width: 120px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: green;
  }
  #p-mob {
    width: 60px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(214, 101, 14);
  }
  #p-des {
    width: 80px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(241, 213, 51);
  }
  
  .modal-desc h1 {
    margin-top: 10px;
    font-size: 18px;
    color: rgb(231, 156, 15);
  }
  .modal-skills h1 {
    margin-top: 10px;
    font-size: 16px;
    color: rgb(231, 156, 15);
  }
  .modal-desc p,
  .modal-skills p {
    margin-top: 20px;
    font-size: 12px;
    line-break: auto;
    color: var(--text-color);
    font-weight: 200;
  }
  .desc-div a {
    padding: 3px 0px;
    list-style: none;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    color: rgb(116, 115, 115);
  }
  .modal-img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 60px;
  border-radius: 100%;
  background: transparent;
  background-size: 100px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 100px;
  height: 100px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
.desc-div i {
  font-size: 14px;
  margin-right: 10px;
  color: rgb(190, 172, 7);
}
}


@media screen and(max-width: 380px){

  .a-propos h1{
  text-align: center;
  color: rgb(231, 156, 15);
  font-size: 15px;
  font-family: "Roboto Condensed", sans-serif;
  margin-top: 60px; 
} 
  .web,
  .mobile,
  .design {
    height: 5px;
    width: 150px;
    border: 1px solid rgb(213, 212, 212);
    border-radius: 20px;
    margin: 10px 0px;
    background-color: white;
  }
  .skill-web span {
    margin-left: 85px;
  }
  .skill-mobile span {
    margin-left: 70px;
  }
  .skill-design span {
    margin-left: 108px;
  }
  #p-web {
    width: 120px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: green;
  }
  #p-mob {
    width: 60px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(214, 101, 14);
  }
  #p-des {
    width: 80px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(241, 213, 51);
  }
  
  .modal-desc h1 {
    margin-top: 10px;
    font-size: 18px;
    color: rgb(231, 156, 15);
  }
  .modal-skills h1 {
    margin-top: 10px;
    font-size: 16px;
    color: rgb(231, 156, 15);
  }
  .modal-desc p,
  .modal-skills p {
    margin-top: 20px;
    font-size: 12px;
    line-break: auto;
    color: var(--text-color);
    font-weight: 200;
  }
  .desc-div a {
    padding: 3px 0px;
    list-style: none;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    color: rgb(116, 115, 115);
  }
  .modal-img {
  width: 130px;
  height: 130px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 60px;
  border-radius: 100%;
  background: transparent;
  background-size: 130px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 130px;
  height: 130px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
.desc-div i {
  font-size: 14px;
  margin-right: 10px;
  color: rgb(190, 172, 7);
}
  }


@media screen and(max-width: 360px){
  .a-propos h1{
  text-align: center;
  color: rgb(231, 156, 15);
  font-family: "Roboto Condensed", sans-serif;
  font-size: 15px;
  font-weight: 200;
  margin-top: 60px; 
} 
  .web,
  .mobile,
  .design {
    height: 5px;
    width: 150px;
    border: 1px solid rgb(213, 212, 212);
    border-radius: 20px;
    margin: 10px 0px;
    background-color: white;
  }
  .skill-web span {
    margin-left: 85px;
  }
  .skill-mobile span {
    margin-left: 70px;
  }
  .skill-design span {
    margin-left: 108px;
  }
  #p-web {
    width: 120px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: green;
  }
  #p-mob {
    width: 60px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(214, 101, 14);
  }
  #p-des {
    width: 80px;
    height: 5px;
    border-left: 1px solid transparent;
    border-radius: 20px 0px 0px 20px;
    background-color: rgb(241, 213, 51);
  }
  
  .modal-desc h1 {
    margin-top: 10px;
    font-size: 18px;
    color: rgb(231, 156, 15);
  }
  .modal-skills h1 {
    margin-top: 10px;
    font-size: 16px;
    color: rgb(231, 156, 15);
  }
  .modal-desc p,
  .modal-skills p {
    margin-top: 20px;
    font-size: 12px;
    line-break: auto;
    color: var(--text-color);
    font-weight: 200;
  }
  .desc-div a {
    padding: 3px 0px;
    list-style: none;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    color: rgb(116, 115, 115);
  }
  .modal-img {
  width: 130px;
  height: 130px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 60px;
  border-radius: 100%;
  background: transparent;
  background-size: 130px;
  margin-bottom: 12px;
}
.modal-img img {
  content: " ";
  position: absolute;
  width: 130px;
  height: 130px;
  cursor: pointer;
  margin-left: 0px;
  background-image: url("../assets/3.gif");
  background-color: var(--nine-color);
  border: 1px solid var(--nine-color);
  border-radius: 100%;
}
.desc-div i {
  font-size: 14px;
  margin-right: 10px;
  color: rgb(190, 172, 7);
}
  }

</style>
