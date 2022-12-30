<template>
    <div>
        <button type="button" @click.prevent="deleteUser" class="btn btn-danger">{{ nameButton }}
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';

export default {
    name: "ModelDelete",
    props: [
        'url',
        'data',
        'allData',
        'nameButton',
    ],
    methods: {

        deleteUser() {

            axios.delete("http://127.0.0.1:8000/api/users/" + this.data.id)
                .then((response) => {
                    console.log("edit", response);
                    this.allData();
                    Vue.swal({ icon: 'success', title: 'بنجاح' + this.data.name + 'تم حذف ', showConfirmButton: true, timer: 1500 });
                })
                .catch((error) => {
                    Vue.swal({ icon: 'info', title: 'لقد حدث خطاء', showConfirmButton: true, timer: 1500 });
                    console.log(error);
                });
        }
    },

};
</script>
