<template>
    <div>
        <form id="NewForm">
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Email address</label>
                <input type="email" name="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp">
                <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>

                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewForm2',
}
</script>