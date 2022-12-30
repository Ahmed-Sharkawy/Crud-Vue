<template>
    <div class="my-4">

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <NewForm />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button @click.prevent="sendUser" type="submit" data-bs-dismiss="modal" aria-label="Close"
                            class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <HelloWorld :users="users" />

    </div>
</template>

<script>
import axios from 'axios';
import NewForm from '@/components/test/NewForm2.vue';
import HelloWorld from '@/components/test/HelloWorld2.vue';

export default {
    name: "ModelCreate",
    components: {
        NewForm,
        HelloWorld
    },
    data() {
        return {
            users: [],
        };
    },
    methods: {
        allUser() {
            axios.get("http://127.0.0.1:8000/api/users")
                .then((response) => {
                    this.users = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        sendUser() {
            const NewForm = document.getElementById('NewForm');
            let Form = new FormData(NewForm);

            axios.post('http://127.0.0.1:8000/api/users', Form)
                .then((response) => {
                    this.users.push(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.allUser()
    },
};
</script>
