<template>
  <div class="video-container">
    <div class="video-board">
      <router-link to="./PortfolioProjects4">
        <a><i class="ri-close-circle-fill" id="close-btns"></i></a>
      </router-link>
      <video controls preload="auto" class="video">
        <source src="../assets/wilds.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoProject4",
};
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  padding: 50px;
  position: absolute;
  overflow: hidden;
  z-index: 50001;
  margin-top: 0px;
}
#close-btns {
  margin-top: 20px;
  font-size: 25px;
  border: none;
  color: var(--text-color);
  margin-bottom: 7px;
  background-color: transparent;
}
.video-board {
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-top: 10px;
  padding-bottom: 30px;
}
.video {
  width: 90vw;
  height: 80vh;
  background: black;
}
@media (max-width: 680px) {
  .video {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 580px) {
  .video {
    width: 100%;
  }
  
}
</style>
