<template>
  <div class="app">
    <Navigation />
    <router-view></router-view>
    <button class="btn-chatbot">
      <span class="material-symbols-outlined"> comment</span>
      <span class="material-symbols-outlined"> close</span>
    </button>
    <div class="chatbot">
      <div class="bot-title">
        <h2>ChatBot</h2>
        <span class="material-symbols-outlined"> close</span>
      </div>
      <ul class="chatbox">
        <li class="chat in">
          <span class="material-symbols-outlined"> smart_toy</span>
          <p>
            hey salut !!<br />
            en quoi puis-je vous aider ?
          </p>
        </li>
      </ul>
      <div class="chat-input">
        <textarea placeholder="Votre Message..." required></textarea>
        <span id="send-btn" class="material-symbols-outlined">send</span>
      </div>
    </div>
    <div class="scroll-top">
      <img src="./assets/up-arrow.gif" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./views/Navigation.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}
/*linear-gradient(rgb(138, 207, 253),rgb(131, 192, 249), rgb(26, 128, 223));*/
:root {
  /*--primary-color: linear-gradient(
    rgb(226, 245, 251),
    white,
    #e2f5fb
  );*/
  --primary-color:white;
  --secondary-color: white;
  --text-color: black;
  --foor-color: rgb(21, 21, 170);
  --five-color: transparent;
  --six-color: rgb(216, 214, 214);
  --sev-color: rgba(3, 16, 91, 0.544);
  --hei-color: white;
  --fiv-color: rgba(3, 16, 91, 0.544);
  --nine-color: rgb(243, 200, 8);
  --ten-color: linear-gradient(
    rgb(85, 165, 239),
    rgb(131, 192, 249),
    rgb(26, 128, 223)
  );
  --text-sec: rgb(243, 200, 8);
  --bcgr-color: rgb(137, 137, 138);
  --border-color: rgb(137, 137, 138);
  --bot-border: rgb(61, 61, 236);
  
}
.dark-theme {
  --primary-color: black;
  --secondary-color: white;
  --text-color: wheat;
  --foor-color: rgb(21, 21, 170);
  --five-color: rgb(1, 10, 48);
  --six-color: white;
  --sev-color: white;
  --hei-color: wheat;
  --fiv-color: wheat;
  --nine-color: white;
  --ten-color: rgb(11, 2, 70);
  --text-sec: rgb(11, 2, 70);
  --bcgr-color: transparent;
  --border-color: white;
  --bot-border: white;
}
body {
  background: var(--primary-color);
  color: var(--text-color);
}
.app {
  background-color: var(--primary-color);
 
  color: var(--text-color);
}

.scroll-top {
  display: flex;
  align-items: end;
  width: 100%;
  position: fixed;
  margin-top: 20px;
  bottom: 150px;
  padding-right: 20px;
  justify-content: end;
  cursor: pointer;
}
.scroll-top img {
  color: wheat;
  background: var(--nine-color);
  border-radius: 50%;
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 15px var(--secondary-color);
  width: 53px;
  height: 53px;
  right: 20px;
}
/************************** chatbot*********************************/

.btn-chatbot {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--back-color);
  border: 2px solid var(--secondary-color);
  box-shadow: 0 0 20px var(--secondary-color);
  color: var(--secondary-color);
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.1s ease;
  bottom: 62px;
  height: 53px;
  width: 53px;
  right: 20px;
}
.btn-chatbot:hover {
  background: rgb(235, 167, 22);
  color: var(--secondary-color);
  box-shadow: 0 0 20px var(--secondary-color);
  border: 2px solid var(--secondary-color);
  transform: scale(1.1);
}
.btn-chatbot span {
  position: absolute;
}
.show-chatbot .btn-chatbot span:first-child,
.btn-chatbot span:last-child {
  opacity: 0;
}
.show-chatbot .btn-chatbot span:last-child {
  opacity: 1;
}

.chatbot {
  width: 420px;
  height: 550px;
  position: fixed;
  right: 50px;
  bottom: 115px;
  box-shadow: 0 0 7px var(--secondary-color);
  border: 0.5px solid var(--bot-border);
  transform: scale(0.5);
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
  border-radius: 15px;
  color: white;
  transform-origin: bottom right;
  box-shadow: à à 108px 0 black, 0 32px 64px -48px black;
  transition: all 0.1s ease;
  background: transparent;
  background-image: url(./assets/3.gif);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  z-index: 50001;
}
.show-chatbot .chatbot {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}
.chatbot .bot-title span {
  position: absolute;
  right: 20px;
  top: 50%;
  cursor: pointer;
  display: none;
  transform: translateY(-50%);
}
.chatbot .bot-title {
  background: rgb(4, 4, 161);
  text-align: center;
  position: relative;
  width: 420px;
  padding: 16px 0;
}
.chatbot .chatbox {
  height: 410px;
  overflow-y: auto;
  padding: 25px 20px 100px;
}
.chatbot .chat {
  display: flex;
}
.chatbot .chat p {
  font-size: 15px;
  max-width: 75%;
  color: white;
  font-weight: bold;
  white-space: pre-wrap;
  padding: 10px 14px;
  background: rgb(4, 4, 161);
  border-radius: 12px 12px 0 12px;
}
.chatbot .chat p.error {
  color: red;
  background: white;
}
.chatbot .out {
  justify-content: flex-end;
}
.chatbot .in span {
  width: 32px;
  height: 32px;
  color: white;
  background: rgb(4, 4, 161);
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  border-radius: 4px;
  margin: 0 12px 7px 0;
}
.chatbot .in p {
  color: black;
  font-weight: bold;
  background: rgb(220, 231, 248);
  border-radius: 12px 12px 12px 0;
}
.chatbot .chat-input {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 5px;
  padding: 5px 20px;
  border-top: 1px solid #ccc;
}
.chat-input {
  background: rgb(225, 237, 253);
}
.chat-input textarea {
  border: none;
  outline: none;
  height: 55px;
  max-height: 160px;
  font-size: 12px;
  background: rgb(225, 237, 250);
  resize: none;
  padding: 16px 15px 16px 0;
}
.chat-input span {
  color: rgb(4, 4, 161);
  font-size: 1.35rem;
  cursor: pointer;
  height: 55px;
  line-height: 55px;
  align-self: flex-end;
  visibility: hidden;
}
.chat-input textarea:valid ~ span {
  visibility: visible;
}
@media (max-width: 650px) {
  .chatbot {
    margin: 20px;
    margin-right: 25px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .btn-chatbot {
    right: 20px;
  }
}
@media (max-width: 550px) {
  .chatbot {
    margin: 20px;
    margin-right: 25px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .btn-chatbot {
    right: 20px;
  }
}
@media (max-width: 450px) {
  .chatbot {
    width: 320px;
    margin: 20px;
    margin-right: 25px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .chatbot .bot-title {
  background: rgb(4, 4, 161);
  text-align: center;
  position: relative;
  width: 320px;
  padding: 16px 0;
}
  .btn-chatbot {
    right: 20px;
    height: 43px;
    width: 43px;
  }
  .scroll-top img {
    right: 30px;
    height: 43px;
    width: 43px;
  }
}
@media (max-width: 400px) {
  .chatbot {
    width: 360px;
    margin: 20px;
    margin-right: 25px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .chatbot .bot-title {
  background: rgb(4, 4, 161);
  text-align: center;
  position: relative;
  width: 360px;
  padding: 16px 0;
}
  .btn-chatbot {
    right: 20px;
    height: 43px;
    width: 43px;
  }
  .scroll-top img {
    right: 30px;
    height: 43px;
    width: 43px;
  }
}

@media (max-width: 380px) {
  .chatbot {
    width: 320px;
    margin-left: 10px;
    margin-right: 25px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .chatbot .bot-title {
  background: rgb(4, 4, 161);
  text-align: center;
  position: relative;
  width: 320px;
  padding: 16px 0;
}
  .btn-chatbot {
    right: 20px;
    height: 43px;
    width: 43px;
  }
  .scroll-top img {
    right: 30px;
    height: 43px;
    width: 43px;
  }
}
@media (max-width: 360px) {
  .chatbot {
    width: 320px;
    margin: 20px;
    margin-right: 25px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .chatbot .bot-title {
  background: rgb(4, 4, 161);
  text-align: center;
  position: relative;
  width: 320px;
  padding: 16px 0;
}
  .btn-chatbot {
    right: 20px;
    height: 43px;
    width: 43px;
  }
  .scroll-top img {
    right: 30px;
    height: 43px;
    width: 43px;
  }
}
@media (max-width: 320px) {
  .chatbot {
    width: 240px;
    margin: 20px;
    margin-right: 5px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  .btn-chatbot {
    right: 20px;
    height: 33px;
    width: 33px;
  }
  .scroll-top img {
    right: 40px;
    height: 33px;
    width: 33px;
  }
}

@media (max-width: 230px) {
  .chatbot {
    width: 215px;
    margin: 7px;
    margin-right: 5px;
    right: 0;
    border-radius: 0;
    border-radius: 12px;
  }
  
  .btn-chatbot {
    right: 30px;
    height: 33px;
    width: 33px;
  }
  .scroll-top {
    display: flex;
    align-items: end;
    width: 100%;
    position: fixed;
    margin-top: 20px;
    bottom: 150px;
    padding-right: 5px;
    justify-content: end;
    cursor: pointer;
  }
  .scroll-top img {
    right: 30px;
    height: 33px;
    width: 33px;
  }
  
.chatbot .bot-title span {
  position: absolute;
  right: 20px;
  top: 50%;
  cursor: pointer;
  display: none;
  transform: translateY(-50%);
}
.chatbot .bot-title {
  background: rgb(4, 4, 161);
  text-align: center;
  position: relative;
  font-size:16px;
  width: 220px;
  padding: 16px 0;
}
.chatbot .chat p {
  font-size: 13px;
}
 
}
</style>
