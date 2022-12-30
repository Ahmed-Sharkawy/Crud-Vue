<template>
    <div class="container">
        <ModelCreate :allData="allUser" id-model="createUser" name-button="Add User" id-form="FormCreateUser"
            url="http://127.0.0.1:8000/api/users">
            <form id="FormCreateUser">
                <div class="mb-3">
                    <label for="exampleInputName" class="form-label">Name</label>
                    <input type="text" name="name" class="form-control" id="exampleInputName"
                        aria-describedby="nameHelp">
                    <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
                </div>
            </form>
        </ModelCreate>

        <TableWorld :allData="allUser" :users="users" />
    </div>
</template>

<script>
import axios from "axios";
import TableWorld from '@/components/TableWorld.vue';
import ModelCreate from "@/components/Model/ModelCreate.vue";

export default {
    name: "HomeView",
    components: {
        TableWorld,
        ModelCreate,
    },
    data() {
        return {
            users: [],
        }
    },
    methods: {

        allUser() {
            axios.get("http://127.0.0.1:8000/api/users")
                .then((response) => {
                    this.users = response.data.data;
                    console.log(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

    },
    mounted() {
        this.allUser();
    }
};
</script>
