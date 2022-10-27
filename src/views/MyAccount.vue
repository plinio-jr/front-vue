<template>
    <div class="page-my-account">
        <div class="columns is-multiline">
            <div class="column is-5 is-offset-5">
                <h1 class="title">Perfil</h1>
            </div>

            <div class="column is-12">
                <button @click="logout()" class="button is-danger">Sair</button>
            <div class="column is-12">
                <h2 class="subtitle">Meus Dados</h2>

                <form @submit.prevent="submitDados">
                <div class="field">
                        <label>nome</label>
                    <div class="control">
                        <input type="text" class="input" v-model="firstname">
                    </div>
                    </div>

                    <div class="field">
                        <label>Sobrenome</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="lastname">
                    </div>
                    </div>

                    <div class="field">
                        <label>Email</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="email">
                    </div>
                    </div>
                    
                    </form>
                    
                    <br>
                    <div class="field">
                        <div class="control">
                            <button class="button is-success" @change="updateInfo">Salvar</button>
                            
                            <button class="button is-warning" @change="edita">Editar</button>

                            <button class="button is-danger" @click="deleta">Excluir</button>
                        </div>
                    </div>
                    
                            
                        </div>
                    </div>

            
            </div>

            

                </div>
        
</template>

<script>
import axios from 'axios'
import OrderSummary from '@/components/OrderSummary.vue'
export default {
    name: 'MyAccount',
    components: {
        OrderSummary
    },
    data() {
        return {
            username: '',
            lastname: '',
            email:'',
            errors: [],
            orders: [],
            newUser: {},
        }
    },
    mounted() {
        document.title = 'Meus dados | Perfil'
        this.getMyOrders()
    },
    methods: {
        logout() {
            axios.defaults.headers.common["Authorization"] = ""
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("userid")
            this.$store.commit('removeToken')
            this.$router.push('/')
        
    
        },
        methods: {
    SubmitDados() {
      this.get()
      console.log("No peril: ", this.user.first_name)
      this.newUser.first_name = this.user.first_name
      this.newUser.last_name = this.user.last_name
      this.newUser.email = this.user.email
    },
    compareInfo() {
      return this.newUser.email!= this.user.email|| this.newUser.first_name != this.user.first_name || this.newUser.last_name != this.user.last_name
    },
    async updateInfo() {
      if (this.compareInfo()) {
        try {
          if (this.newUser.email== this.user.email) delete this.newUser.email
          await this.update(this.newUser);
          await this.setInfoUser();
          this.salvar = true;
        } catch (e) {
          this.errorUpdate = true;
          console.log(e);
        }
      } else {
        this.notChanged = true;
      }
    }
        }
    }
}
</script>
