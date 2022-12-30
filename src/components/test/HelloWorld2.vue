<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Email_verified_at</th>
                    <th scope="col">Updated_at</th>
                    <th scope="col">Created_at</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <th>{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ user.email_verified_at }}</td>
                    <td>{{ user.updated_at }}</td>
                    <td>{{ user.created_at }}</td>
                    <td> <button @click="update(user)" type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            Update
                        </button></td>
                    <td><button @click="deleteUser(user)" type="button" class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>

        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <form id="TestForm" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label">Email address</label>
                                <input type="text" name="name" :value="updateUser.name" class="form-control"
                                    id="exampleInputName" aria-describedby="nameHelp">
                                <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>

                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name="email" :value="updateUser.email" class="form-control"
                                    id="exampleInputEmail1" aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click.prevent="save" type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "HelloWorld2",
    props: [
        "users"
    ],
    data() {
        return {
            updateUser: {}
        }
    },
    methods: {

        update(user) {
            this.updateUser = user;
        },

        save() {
            const TestForm = document.getElementById('TestForm');
            let formData = new FormData(TestForm);

            axios.patch("http://127.0.0.1:8000/api/users/" + this.updateUser.id, formData, { headers: { "Content-Type": "multipart/form-data" } })
                .then((response) => {
                    // this.users = response.data.data;
                    console.log("edit", response);
                    console.log("update", this.updateUser);

                })
                .catch((error) => {
                    console.log(error);
                });
        },

        deleteUser(user) {
            console.log(user.id);
            axios.delete("http://127.0.0.1:8000/api/users/" + user.id)
                .then((response) => {
                    console.log("edit", response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
};
</script>

<style scoped lang="stylus"></style>
