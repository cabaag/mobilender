<template>
  <div class="login">
    <Loader v-if="loading" />
    <div v-else class="login__container">
      <form action="" class="login__form" @submit.prevent="onSubmit">
        <h1 class="login__title">Iniciar sesión</h1>
        <div class="control-group">
          <label class="control-group__label">email</label>
          <input
            class="control-group__input"
            type="text"
            v-model="email"
            placeholder="Correo electrónico"
          />
        </div>
        <div class="control-group">
          <label class="control-group__label">Password</label>
          <input
            class="control-group__input"
            type="password"
            placeholder="Contraseña"
            v-model="password"
          />
        </div>
        <error-alert v-if="error">
          {{ error }}
        </error-alert>
        <app-button :action="() => null">
          Entrar
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import AppButton from '../components/AppButton.vue'
import ErrorAlert from '../components/ErrorAlert.vue'
import { login } from '@/services/auth'
import Loader from '../components/Loader.vue'
import { useRouter } from 'vue-router'
export default {
  components: { AppButton, ErrorAlert, Loader },
  data() {
    return {
      error: '',
      email: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    validateFields() {
      if (!this.email || !this.password) {
        this.error = 'Favor de completar todos los campos'
        return false
      }

      if (!this.validateEmail(this.email)) {
        this.error = 'Email inválido'
        return false
      }

      this.error = ''
      return true
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    async onSubmit() {
      if (!this.validateFields()) {
        return
      }
      try {
        this.loading = true
        const res = await login(this.email, this.password)
        if (res.data && res.data.token) {
          this.$store.commit('setToken', res.data.token)
          this.$router.push({ name: 'Home' })
        }
        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = err.response.data.error
      }
    },
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    if (store.state.token) {
      router.push({ name: 'Home' })
    }
  },
}
</script>

<style lang="css" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}

.login__container {
  background-color: var(--secondary-color);
  border-radius: 0.8rem;
  padding: 6rem;
  width: 40rem;
}

.login__title {
  margin-bottom: 2rem;
}

.login__form {
  display: flex;
  flex-direction: column;
}
.control-group {
  display: flex;
  flex-direction: column;
}
.control-group {
  margin-bottom: 2rem;
}

.control-group__label {
  font-size: 1.3rem;
  text-transform: uppercase;
  color: var(--white-color);
}

.control-group__input {
  background-color: none;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: inherit;
  font-size: inherit;
  color: var(--grey-color);
  background-color: var(--grey-light-color);
  margin-top: 0.5rem;
}

.control-group__input:focus {
  background: white;
}
</style>
