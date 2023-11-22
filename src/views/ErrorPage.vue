<template>
  <div class="errorPage">
    <div class="notFind">
      <img src="../assets/error404.gif" alt="" />
      
      <router-link to="/"
        ><div class="exit-p">Aller à la Page d'acceuil</div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  components: {},
};
</script>

<style scoped>
/****************************** ERRORPAGE CSS *************************/
.errorPage {
  width: 100%;
  height: 100%;
  padding: 0px 50px;
  background: var(--primary-color);
  display: block;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  z-index: 50001;
  position: fixed;
 
}
.notFind {
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  align-items: center;
  justify-content: center;
  
}
.notFind img{
  
}
.exit-p {
  padding: 10px;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  color: var(--text-color);
  font-family: "Teko", sans-serif;
  cursor: pointer;
}

@media (max-width: 680px) {
  .notFind img {
   width: 670px;
  
}
}
@media (max-width: 600px) {
  .notFind img {
   width: 590px;
  
}
}
@media (max-width: 380px) {
  .notFind img {
    width: 370px;
  
}
}
@media (max-width: 360px) {
  .notFind img {
    width: 350px;

}
}
</style>