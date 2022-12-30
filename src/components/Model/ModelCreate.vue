<template>
    <div>
        <button type="button" class="btn btn-primary my-4" data-bs-toggle="modal" :data-bs-target="'#' + idModel">
            {{ nameButton }}
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="idModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <slot />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button @click.prevent="add" type="submit" data-bs-dismiss="modal" aria-label="Close"
                            class="btn btn-primary">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import Vue from 'vue';

export default {
    name: "ModelCreate",
    props: [
        'allData',
        'url',
        'idForm',
        'idModel',
        'nameButton',
    ],
    methods: {

        add() {

            const NewForm = document.getElementById(this.idForm);
            let Form = new FormData(NewForm);

            axios.post(this.url, Form)
                .then((response) => {
                    console.log(response.data.data);
                    this.allData();
                    Vue.swal({ icon: 'success', title: 'تم الاضافة بنجاح', showConfirmButton: true, timer: 1500 });
                })
                .catch((error) => {
                    console.log(error);
                });


            // Vue.swal({
            //     title: 'Do you want to save the changes?',
            //     showDenyButton: true,
            //     showCancelButton: true,
            //     confirmButtonText: 'Save',
            //     denyButtonText: `Don't save`,
            // }).then((result) => {
            //     /* Read more about isConfirmed, isDenied below */
            //     if (result.isConfirmed) {
            //         Vue.swal('Saved!', '', 'success')
            //     } else if (result.isDenied) {
            //         Vue.swal('Changes are not saved', '', 'info')
            //     }
            // })

            // this.$router.push('/HomeView')
            // window.location.href = 'HomeView'
            // // this.$router.go('/HomeView')
            // this.$router.push({
            //     path: '/HomeView',
            //     params: {
            //         param1: 'value1',
            //         param2: 'value2'
            //     }
            // });
            // this.$router.reload();
            // this.$forceUpdate();
            // location.reload();
            // this.$router.push({ path: '/', replace: true })
        },
    },

};
</script>
