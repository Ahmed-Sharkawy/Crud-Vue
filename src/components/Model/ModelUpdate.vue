<template>
    <div>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#' + idModel">
            {{ nameButton }}
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="idModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button @click.prevent="update" type="submit" data-bs-dismiss="modal" aria-label="Close"
                            class="btn btn-primary">update</button>
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
    name: "ModelUpdate",
    props: [
        'allData',
        'url',
        'idForm',
        'idModel',
        'nameButton',
        'data'
    ],
    methods: {

        update() {

            const NewForm = document.getElementById(this.idForm);
            let Form = new FormData(NewForm);

            axios.put(this.url, {
                name: Form.get('name'),
                email: Form.get('email'),
                password: Form.get('password'),
            })
                .then((response) => {
                    console.log(response.data.data);
                    this.allData();
                    Vue.swal({ icon: 'success', title: 'تم التعديل بنجاح', showConfirmButton: true, timer: 1500 });
                })
                .catch((error) => {
                    Vue.swal({ icon: 'info', title: 'لقد حدث خطاء', showConfirmButton: true, timer: 1500 });
                    console.log(error);
                });

        },
    },

};
</script>
