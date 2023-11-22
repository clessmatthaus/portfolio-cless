<template>
  <section class="contact" id="contact">
    <div class="services-title">
      <h1 class="contact-title">***Me contacter***</h1>
    </div>
    <div class="contact-form">
      <form @submit.prevent="formSubmit" method="post" class="form">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          v-model="name" />
        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          required
          v-model="email" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Votre message..."
          v-model="message"></textarea>
        <input type="submit" value="Envoyer" class="send-btn" />
      </form>
    </div>
  </section>
</template>

<script>
import { projectFirestore } from "../firebase/config";
export default {
  name: "ContactView",
  data() {
    return {
      name: "",
      email: "",
      message: "",

      resetInput() {
        this.name = "";
        this.email = "";
        this.message = "";
      },
    };
  },
  methods: {
    formSubmit() {
      let userMessage = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      projectFirestore.collection("userMessages").add(userMessage);
      this.resetInput();
    },
  },
};
</script>

<style>
/****************************** CONTACT CSS *************************/
.contact {
  background: transparent;
  border: 1px solid transparent;
  width: 100%;
  height: 100vh;
  margin-bottom: 100px;
}
.contact-form {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  margin-top: 30px;
}
.contact-form form {
  position: relative;
  width: 840px;
}
form input,
form textarea {
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: var(--about-back);
  box-shadow: 0 0 5px var(--text-color);
  color: var(--text-color);
  margin-bottom: 30px;
}
form input::placeholder,
form textarea::placeholder {
  color: var(--border-color);
  font-size: 15px;
}
form .send-btn {
  width: 100%;
  display: block;
  padding: 19px 14px;
  color: var(--secondary-color);
  background: rgb(231, 156, 15);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
}
form .send-btn:hover {
  background: var(--five-color);
  color: var(--text-color);
  box-shadow: 0 0 10px var(--six-color);
}
.services-title h1 {
  color: rgb(231, 156, 15);
  margin-top: 30px;
  padding-bottom: 40px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 360px) {
  .services-title h1 {
    color: rgb(231, 156, 15);
    margin-top: 30px;
    padding-bottom: 40px;
    font-weight: bold;
    text-align: center;
    font-size: 17px;
  }


}
@media (max-width: 230px) {
  .contact {
    background: transparent;
    border: 1px solid transparent;
    width: 100%;
    height: 80vh;
    margin-bottom: 50px;
  }
  .services-title h1 {
    color: rgb(231, 156, 15);
    margin-top: 30px;
    padding-bottom: 40px;
    font-weight: bold;
    text-align: center;
    font-size: 13px;
  }
  .contact-form {
    position: relative;
    width: 100%;
  }

}
</style>
