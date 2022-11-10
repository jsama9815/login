<template>
  <div class="main_login">
    <div class="login_container">
      <img src="../images/logo.png" alt="logo" class="logo" />
      <form name="login" class="form_user">
        <div class="email_container">
          <input
        :class="{'error': error}"
          v-model="email"
          type="email"
          name="email"
          placeholder="Email or phone number"
          id="email"
          required
        />
        <span v-if="error">Correo invalido</span>
        </div>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button type="button" @click="submit" id="button_login">Login</button>
        <p>or</p>
        <button type="button" id="button_sing_up">Sing Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    validationEmail() {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.email.match(validRegex)) return false;
       return true;
    },
    submit() {
      this.error = this.validationEmail();
      this.validationEmail();
    },
  },
};
</script>

<style>
.main_login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  height: 75px;
  width: 125px;
}
.login_container {
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 550px;
  align-items: center;
}
.form_user {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#email {
  height: 40px;
  width: 370px;
  margin: 20px;
  font-size: 18px;
  border: 1px groove darkgrey;
  border-radius: 7px;
}
#password {
  height: 40px;
  width: 370px;
  margin: 20px;
  font-size: 18px;
  border: 1px groove darkgrey;
  border-radius: 7px;
}
#button_sing_up {
  height: 40px;
  width: 370px;
  margin: 10px;
  border: none;
  background-color: rgb(224, 223, 223);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  cursor: pointer;
  color: #142c8e;
}
#button_sing_up:hover {
  border: 2px solid #142c8e;
  border-radius: 5px;
}
#button_login {
  height: 40px;
  width: 370px;
  margin: 10px;
  background: #142c8e;
  border: 1px solid #142c8e;
  border-radius: 5px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  cursor: pointer;
}
#button_login:hover {
  opacity: 0.5;
}
p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  color: grey;
}
.email_container{
   display: flex;
   flex-direction: column;
}
span{
  color: red;
  align-self: flex-start;
  margin-left: 23px;
}
.error{
  margin-bottom: 0 !important;
  border: 1px solid red !important;
  text-align:initial  !important;
}
</style>
