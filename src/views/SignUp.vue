<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Cadastro</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Email</label>
                    <div class="control">
                        <input type="text" class="input" v-model="username">
                    </div>
                    </div>

                    <div class="field">
                        <label>Senha</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password">
                    </div>
                    </div>

                    <div class="field">
                        <label>Confirmar senha</label>
                    <div class="control">
                        <input type="password" class="input" v-model="password2">
                    </div>
                    </div>
                    
                    <div class="notidication is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>
                        <div class="field">
                                                <div class="control">
                                                    <button class="button is-dark">Cadastrar</button>
                                                </div>
                                            </div>
                    <hr>

                    <router-link to="/log-in">clique aqui</router-link> para fazer login
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
    name: 'SingUp',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: []
        }
    },
    methods: {
        submitForm(){
            this.errors = []

            if (this.username === '') {
                this.errors.push('O email esta vazio')
            }

            if (this.password == '') {
                this.errors.push('A senha esta muito curta')
            }

            if (this.password !== this.password2) {
                this.errors.push('As senhas estão diferentes')
            }

            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password,
                }

                axios
                    .post("/api/v1/users/", formData)
                    .then(response => {
                        toast({
                            message: 'Sua conta foi criada com sucesso, você ja pode fazer login',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position:'bottom-right'
                        })

                        this.$router.push('/log-in')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push('Algo deu errado. Por favor, tente novamente')

                                console.log(JSON.stringify(error))
                            }
                        }
                    })
            }
        }
    }
}
</script>

<style>

</style>