<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal Title</h1>
            <p>Modal Content</p>
        </div>
    </div>
</template>

<style scoped>/* scope like this <<< or just add to class like below  */
.modal {
    width:400px;
    padding:20px;
    margin:100px auto;
    background: #FFFFFF;
    border-radius: 10px;
}
.backdrop{
    top:0;
    position:fixed;
    background:rgba(0,0,0,0.5);
    width:100%;
    height:100%;
}
h1 {
    /* color:red; */
}

.modal h1 {
    color:red; /* or scope styles like this */
}

.modal p {
    color:black;
}
</style>