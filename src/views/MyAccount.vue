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
                        <input type="text" class="input" v-model="username">
                    </div>
                    </div>

                    <div class="field">
                        <label>Sobrenome</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="lastname">
                    </div>
                    </div>

                    <div class="field">
                        <label>Cidade</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="city">
                    </div>
                    </div>

                     <div class="field">
                        <label>Estado</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="estado">
                    </div>
                    </div>

                    <div class="field">
                        <label>Pais</label>
                    <div class="control">
                        <input type="subtitle" class="input" v-model="pais">
                    </div>
                    </div>
                    
                    </form>
                    
                    <br>
                    <div class="field">
                        <div class="control">
                            <button class="button is-primary" @change="save">Salvar</button>
                            
                            <button class="button is-dark" @change="edita">Editar</button>
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
            city: '',
            estado:'',
            pais:'',
            errors: [],

            orders: []
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
            edita() {
                axios.delete(username)
                axios.delete(lastname)
                axios.delete(city)
                axios.delete(estado)
                axios.delete(pais)
            }
        }
    }
}
</script>