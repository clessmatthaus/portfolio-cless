<template>
  <div class="footer">
    <div class="copyright">
      <p>@2023 Cless Matthaüs, Tous droits réservés.</p>
    </div>
    <div class="media">
      <a href="https://github.com/" target="_blank"
        ><i class="ri-github-fill"></i
      ></a>
      <a href="https://www.linkedin.com/home" target="_blank"
        ><i class="ri-linkedin-fill"></i
      ></a>
      <a href="https://twitter.com/" target="_blank"
        ><i class="ri-twitter-fill"></i
      ></a>
      <a href="https://facebook.com/" target="_blank"
        ><i class="ri-facebook-fill"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
  components: {},
};
</script>

<style scoped>
:root {
  --primary-color: white;
  --secondary-color: white;
  --thirt-color: black;
  --foor-color: rgb(21, 21, 170);
  --five-color: rgba(17, 110, 204, 0.544);
  --six-color: white;
  --sev-color: rgba(3, 16, 91, 0.544);
  --hei-color: white;
  --fiv-color: rgba(3, 16, 91, 0.544);
  --nine-color: rgb(243, 200, 8);
  --ten-color: linear-gradient(
    rgb(85, 165, 239),
    rgb(131, 192, 249),
    rgb(26, 128, 223)
  );
  --text-color: black;
  --bor-color: rgb(3, 3, 104);
  --back-color: rgb(3, 3, 104);
}
.dark-theme {
  --primary-color: rgb(8, 1, 57);
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
  --text-color: white;
  --bor-color: white;
  --back-color: transparent;
}

.footer {
  padding: 23px 150px;
  background: var(--about-back);
  border-top: 2px solid var(--about-back);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.copyright p {
  font-size: 20px;
  font-weight: 400;
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

@media screen and (max-width: 850px) {
  .copyright p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 200;
    color: var(--text-color);
  }
  
}

@media (max-width: 450px) {
  .footer {
    padding: 23px 0px;
    background: var(--about-back);
    border-top: 2px solid var(--about-back);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .copyright p {
    font-size: 12px;
    line-height: 1.2;
    font-weight: 200;
    margin: 5px;
    color: var(--text-color);
  }

}

@media (max-width: 380px) {
  .footer {
    padding: 23px 0px;
    background: var(--about-back);
    border-top: 2px solid var(--about-back);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .copyright p {
    font-size: 17px;
    line-height: 1.2;
    font-weight: 200;
    margin: 5px;
    color: var(--text-color);
  }
  .media i {
  justify-content: center;
  align-items:center;
  width: 45px;
  height: 45px;
  font-size: 20px;
  }
}
@media (max-width: 360px) {
  .footer {
    padding: 23px 0px;
    background: var(--about-back);
    border-top: 2px solid var(--about-back);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .copyright p {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 200;
    margin: 5px;
    color: var(--text-color);
  }
  .media i {
  width: 45px;
  height: 45px;
  font-size: 20px;
  }
}

@media (max-width: 320px) {
  .footer {
    padding: 23px 0px;
    background: var(--about-back);
    border-top: 2px solid var(--about-back);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .copyright p {
    font-size: 12px;
    line-height: 1.2;
    font-weight: 200;
    margin: 5px;
    color: var(--text-color);
  }
  .media {
    margin-bottom: 20px;
    padding-left: 30px;
  }
  .media i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: transparent;
    color: var(--thirt-color);
    border-radius: 50px;
    font-size: 18px;
    box-shadow: 0 0 10px var(--text-color);
    backdrop-filter: brightness(88%);
    cursor: pointer;
    margin-right: 20px;
    margin-top: 40px;
    transition: 0.3s;
    border: 2px solid var(--text-color);
    transition: all 0.5s ease;
  }
  .media i:hover {
    background: var(--hei-color);
    color: var(--foor-color);
    box-shadow: 0 0 20px var(--text-color);
  }
}

@media (max-width: 230px) {
  .footer {
    padding: 23px 5px;
    background: var(--about-back);
    border-top: 2px solid var(--about-back);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .copyright p {
    font-size: 12px;
    line-height: 1.2;
    font-weight: 200;
    margin-left: 15px;
    color: var(--text-color);
  }
  .media {
    margin-bottom: 20px;
    padding-left: 40px;
  }
  .media i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: transparent;
    color: var(--thirt-color);
    border-radius: 50px;
    font-size: 18px;
    box-shadow: 0 0 10px var(--text-color);
    backdrop-filter: brightness(88%);
    cursor: pointer;
    margin-right: 0px;
    margin-top: 40px;
    transition: 0.3s;
    border: 2px solid var(--text-color);
    transition: all 0.5s ease;
  }
  .media i:hover {
    background: var(--hei-color);
    color: var(--foor-color);
    box-shadow: 0 0 20px var(--text-color);
  }
} 

@media  (max-width: 200px) {
  .footer {
    padding: 13px 5px;
    background: var(--about-back);
    border-top: 2px solid var(--about-back);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .copyright p {
    font-size: 12px;
    line-height: 1.2;
    font-weight: 200;
    margin-left: 15px;
    color: var(--text-color);
  }
  .media {
    margin-bottom: 20px;
    padding-left: 40px;
  }
  .media i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    background: transparent;
    color: var(--thirt-color);
    border-radius: 50px;
    font-size: 14px;
    box-shadow: 0 0 10px var(--text-color);
    backdrop-filter: brightness(88%);
    cursor: pointer;
    margin-right: 0px;
    margin-top: 40px;
    transition: 0.3s;
    border: 2px solid var(--text-color);
    transition: all 0.5s ease;
  }
  .media i:hover {
    background: var(--hei-color);
    color: var(--foor-color);
    box-shadow: 0 0 20px var(--text-color);
  }
}
</style>
