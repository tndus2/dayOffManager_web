<template>

  <div id="app">
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    {{ platformName }}
                  </h3>
                  <v-flex>
                    <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="https://www.mobygames.com/images/i/12/25/1435075.png"></v-img>
                  </v-flex>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Sign in with your username and password:</p>
                <v-form>
                  <v-text-field
                      outline
                      label="Username"
                      type="text"
                      v-model="username"></v-text-field>
                  <v-text-field
                      outline
                      hide-details
                      label="Password"
                      type="password"
                      v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-btn color="info" text>
                  Forgot password?
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="info" :large="$vuetify.breakpoint.smAndUp">
                  <v-icon left>lock</v-icon>
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm12 md6 offset-md3>
            <v-layout align-center justify-space-between>
              <p class="caption my-3">
                <a href="#">Privacy Policy</a>
                |
                <a href="#">Terms of Service</a>
              </p>
              <p class="caption my-3">Powered by <a href="#">StaffCircle</a></p>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>

<!--    <div id="app">-->
<!--      <p>연차관리프로그램 - 로그인 페이지</p>-->
<!--      <button @click="login()">로그인</button>-->
<!--      <v-btn-->
<!--          color="primary"-->
<!--          elevation="2"-->
<!--          rounded-->
<!--          x-large-->
<!--          @click="login()"-->
<!--      >로그인</v-btn>-->
<!--    </div>-->
</template>

<script>

export default {
  name: "Login",
  methods: {
    /* 로그인 버튼 클릭시 대시보드로 이동하는 메서드 */
    login() {
      this.$router.push('/DashBoard');
    }
  },
  data () {
    return {
      darkTheme: true,
      platformName: 'Dayoff',
      password: null,
      username: null,
    }
  }
}



</script>
  
<style>
.v-btn,
.v-card {
  border-radius: 4px;
}
.v-card__title {
  text-transform: uppercase;
}
</style>
  