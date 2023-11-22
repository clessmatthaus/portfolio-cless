<template>
  <section class="portfolio" id="portfolio">
    <div class="services-folio">
      <h1>*** Portfolio projets ***</h1>
    </div>
    <div class="portfolio-content">
      <router-link to="./PortfolioProjects">
        <div class="row">
          <img src="@/assets/pc-cleaner.png" alt="" />
          <div class="main-row">
            <div class="row-text">
              <h4>Application de Bureau</h4>
            </div>
            <div class="row-icon">
              <a href="#"><i class="ri-github-fill"></i></a>
            </div>
          </div>
          <h5>Application pour nettoyage PC avec C# dotnet</h5>
        </div>
      </router-link>
      <router-link to="./PortfolioProjects2">
        <div class="row">
          <img src="@/assets/Projet22.jpg" alt="" />
          <div class="main-row">
            <div class="row-text">
              <h4>Site/Applications Web</h4>
            </div>
            <div class="row-icon">
              <a href="#"><i class="ri-github-fill"></i></a>
            </div>
          </div>
          <h5>Quiz Application avec Javscript</h5>
        </div>
      </router-link>
      <router-link to="./PortfolioProjects3">
        <div class="row">
          <img src="@/assets/ZodiaKalApp.jpg" alt="" />
          <div class="main-row">
            <div class="row-text">
              <h4>Application Mobile</h4>
            </div>
            <div class="row-icon">
              <a href="#"><i class="ri-github-fill"></i></a>
            </div>
          </div>
          <h5>Application d'astrologie avec Android/kotlin</h5>
        </div>
      </router-link>
      <router-link to="./PortfolioProjects4">
        <div class="row">
          <img src="@/assets/Projet41.jpg" alt="" />
          <div class="main-row">
            <div class="row-text">
              <h4>Site/Application Web</h4>
            </div>
            <div class="row-icon">
              <a href="#"><i class="ri-github-fill"></i></a>
            </div>
          </div>
          <h5>Site web avec du html/css & javascript</h5>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioView",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
/****************************** PORTFOLIO CSS *************************/
.portfolio {
  background: transparent;
}
.portfolio-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, auto));
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
}
.row {
  width: 510px;
  background: var(--about-back);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 0px 20px;
  border: 1px solid var(--about-back);
  box-shadow: 0 0 9px var(--text-color);
  padding-bottom: 20px;
  transition: all 0.5s ease;
}
.row:hover {
  border: 1px solid var(--text-color);
  transform: translate(-5px) scale(1.1);
  box-shadow: 0 0 15px var(--text-color);
  cursor: pointer;
}
.row img {
  width: 100%;
  height: 350px;
  border-radius: 15px 15px 0px 0px;
}
.main-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
}
.row h4 {
  font-size: 22px;
  font-weight: 600;
  color: rgb(231, 156, 15);
}
.row i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 63px;
  font-size: 38px;
  color: var(--text-color);
}
.row h5 {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  color: var(--text-color);
  line-height: 1.2;
  margin: 0px 20px;
}
.services-folio h1 {
  color: rgb(231, 156, 15);
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 40px;
  font-weight: bold;
  text-align: center;
}
@media (max-width: 680px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(388px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    margin-right: 30px;
    width: 408px;
    transition: all 0.5s ease;
  }
}

@media (max-width: 580px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(388px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    margin-right: 30px;
    width: 380px;
    transition: all 0.5s ease;
  }
}

@media (max-width: 480px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(388px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    margin-right: 30px;
    width: 360px;
    transition: all 0.5s ease;
  }
}

@media (max-width: 400px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    margin-right: 30px;
    width: 340px;
    transition: all 0.5s ease;
  }
}
@media (max-width: 380px) {
  .services-folio h1 {
  color: rgb(231, 156, 15);
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 40px;
  font-size:13px;
  font-weight: bold;
  text-align: center;
}
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    margin-right: 30px;
    width: 330px;
    transition: all 0.5s ease;
  }
  .row h4 {
  font-size: 18px;
  font-weight: 600;
  color: rgb(231, 156, 15);
}
.row i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  font-size: 30px;
  color: var(--text-color);
}
.row h5 {
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: var(--text-color);
  line-height: 1.2;
  margin: 0px 20px;
}
}

@media (max-width: 360px) {
  .services-folio h1 {
  color: rgb(231, 156, 15);
  margin-top: 30px;
  margin-bottom: 0px;
  padding-bottom: 40px;
  font-size:17px;
  font-weight: bold;
  text-align: center;
}
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    margin-right: 30px;
    width: 310px;
    transition: all 0.5s ease;
  }
    .row h4 {
  font-size: 18px;
  font-weight: 600;
  color: rgb(231, 156, 15);
}
.row i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  font-size: 30px;
  color: var(--text-color);
}
.row h5 {
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  color: var(--text-color);
  line-height: 1.2;
  margin: 0px 20px;
}
}

@media (max-width: 320px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, auto));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    padding-left: 5px;
    padding-right: 10px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
  
    width: 290px;
    transition: all 0.5s ease;
  }
}

@media (max-width: 230px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    width: 210px;
    margin-left:5px;
    transition: all 0.5s ease;
  }
  .row h5 {
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    color: var(--text-color);
    line-height: 1.2;
    margin: 0px 20px;
  }
  .services-folio h1 {
    color: rgb(231, 156, 15);
    font-size:13px;
    margin-top: 30px;
    margin-bottom: 0px;
    padding-bottom: 40px;
    font-weight: bold;
    text-align: center;
  }
  .row h4 {
    font-size: 12px;
    font-weight: 600;
    color: rgb(231, 156, 15);
  }
  .row i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 33px;
    font-size: 28px;
    color: var(--text-color);
  }
  .row img {
    width: 100%;
    height: 250px;
    border-radius: 15px 15px 0px 0px;
  }
}


@media (max-width: 200px) {
  .portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, auto));
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-bottom: 60px;
    
  }
  .row {
    background: var(--about-back);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0 0 10px var(--text-color);
    padding-bottom: 20px;
    width: 185px;
    margin-left:5px;
    transition: all 0.5s ease;
  }
  .row h5 {
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    color: var(--text-color);
    line-height: 1.2;
    margin: 0px 20px;
  }
  .services-folio h1 {
    color: rgb(231, 156, 15);
    font-size:13px;
    margin-top: 30px;
    margin-bottom: 0px;
    padding-bottom: 40px;
    font-weight: bold;
    text-align: center;
  }
  .row h4 {
    font-size: 12px;
    font-weight: 600;
    color: rgb(231, 156, 15);
  }
  .row i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 33px;
    font-size: 28px;
    color: var(--text-color);
  }
  .row img {
    width: 100%;
    height: 250px;
    border-radius: 15px 15px 0px 0px;
  }
}

</style>
