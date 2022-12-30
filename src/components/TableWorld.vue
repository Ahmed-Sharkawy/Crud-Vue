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
                    <td>
                        <ModelUpdate :allData="allData" :data="user" id-model="UpdateUser" nameButton="update"
                            id-form='FormUpdateUser' :url="'http://127.0.0.1:8000/api/users/' + user.id">
                            <form id="FormUpdateUser">
                                <div class="mb-3">
                                    <label for="exampleInputName" class="form-label">Name</label>
                                    <input type="text" v-model="user.name" name="name" class="form-control"
                                        id="exampleInputName" aria-describedby="nameHelp">
                                    <div id="nameHelp" class="form-text">We'll never share your name with anyone
                                        else.</div>
                                    else.
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name="email" v-model="user.email" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control"
                                        id="exampleInputPassword1">
                                </div>
                            </form>
                        </ModelUpdate>
                    </td>
                    <td>
                        <ModelDelete :allData="allData" :data="user"  nameButton="Delete"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ModelUpdate from '@/components/Model/ModelUpdate.vue'
import ModelDelete from '@/components/Model/ModelDelete.vue'

export default {
    name: "TableWorld",
    components: {
        ModelUpdate,
        ModelDelete,
    },
    props: [
        'allData',
        'users',
    ],
};
</script>