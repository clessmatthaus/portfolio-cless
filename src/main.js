import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home";
import ServicesContent from "./views/ServicesContent";
import Navigation from "./views/Navigation";
import Footer from "./views/Footer";
import About from "./views/About";
import PortfolioView from "./views/PortfolioView";
import ContactView from "./views/ContactView";
import ErrorPage from "./views/ErrorPage";
import PortfolioProjects from "./components/PortfolioProjects";
import PortfolioProjects2 from "./components/PortfolioProjects2";
import PortfolioProjects3 from "./components/PortfolioProjects3";
import PortfolioProjects4 from "./components/PortfolioProjects4";
import CarouSlider1 from "./components/CarouSlider1.vue";
import CarouSlider2 from "./components/CarouSlider2.vue";
import CarouSlider3 from "./components/CarouSlider3.vue";
import CarouSlider4 from "./components/CarouSlider4.vue";
import VideoProject1 from "./components/VideoProject1.vue";
import VideoProject2 from "./components/VideoProject2.vue";
import VideoProject3 from "./components/VideoProject3.vue";
import VideoProject4 from "./components/VideoProject4.vue";

const routes = [
  { path: "/Navigation", component: Navigation },
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/ServicesContent", component: ServicesContent },
  { path: "/PortfolioView", component: PortfolioView },
  { path: "/ContactView", component: ContactView },
  { path: "/Footer", component: Footer },
  { path: "/:patchMatch(.*)*", component: ErrorPage },
  { path: "/PortfolioProjects", component: PortfolioProjects },
  { path: "/PortfolioProjects2", component: PortfolioProjects2 },
  { path: "/PortfolioProjects3", component: PortfolioProjects3 },
  { path: "/PortfolioProjects4", component: PortfolioProjects4 },
  { path: "/CarouSlider1", component: CarouSlider1 },
  { path: "/CarouSlider2", component: CarouSlider2 },
  { path: "/CarouSlider3", component: CarouSlider3 },
  { path: "/CarouSlider4", component: CarouSlider4 },
  { path: "/VideoProject1", component: VideoProject1 },
  { path: "/VideoProject2", component: VideoProject2 },
  { path: "/VideoProject3", component: VideoProject3 },
  { path: "/VideoProject4", component: VideoProject4 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  /**scrollBehavior(to, from, savedPosition){
      if(savedPosition){
        return savedPosition
      }
      else{
        return{
          x: 0, y: 0
        }
      }
    }, */
  linkActiveClass: "active",
});

const VueApp = createApp(App);

VueApp.use(router);

VueApp.mount("#app");

/*******************SCROLL UP****************************************/
const scrollTop = document.querySelector(".scroll-top");
scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

/*********************************THEME MODE*****************************/
var icon = document.getElementById("icon-theme");
var iconNav = document.getElementById("brand-icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/moon-icon.png";
    iconNav.src = "./images/Back.png";
  } else {
    icon.src = "./images/sun-icon.png";
    iconNav.src = "./images/pfss.png";
  }
};

/****************************************CHATBOT******************************/

const chatInput = document.querySelector(".chat-input textarea");
const sendChat = document.getElementById("send-btn");
const chatBox = document.querySelector(".chatbox");
const chatBotToggler = document.querySelector(".btn-chatbot");
const headerToggler = document.querySelector(".header-btn");

let userMessage;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;

const createChatDial = (message, className) => {
  const chatDial = document.createElement("li");
  chatDial.classList.add("chat", className);
  let chatContent =
    className === "out"
      ? `<p></p>`
      : `<span class="material-symbols-outlined"> smart_toy</span><p></p>`;
  chatDial.innerHTML = chatContent;
  chatDial.querySelector("p").textContent = message;
  return chatDial;
};
//Openai api pour generation de réponses
const generateResponse = (incomingChatDial) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatDial.querySelector("p");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };
  // envoie de la requette vers openai api
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content;
    })
    .catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent =
        "Une erreur est survenue veuillez réessayer ultérieurement !!";
    })
    .finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  //message au chatbox
  chatBox.appendChild(createChatDial(userMessage, "out"));
  chatBox.scrollTo(0, chatBox.scrollHeight);

  setTimeout(() => {
    //message en attente de réponse
    const incomingChatDial = createChatDial("Entrain de repondre...", "in");
    chatBox.appendChild(incomingChatDial);
    chatBox.scrollTo(0, chatBox.scrollHeight);
    generateResponse(incomingChatDial);
  }, 400);
};
chatInput.addEventListener("input", () => {
  // pour le reajustement de la hauteur de input textarea
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});
chatBotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
headerToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
sendChat.addEventListener("click", handleChat);
