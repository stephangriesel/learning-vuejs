<template>
    <!-- Emitting custom event: start & Event Modifier -->
    <div class="backdrop" @click.self="closeModal">
    <!-- Emitting custom event: stop -->
        <div class="modal" :class="{ sale: theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
})
</script>


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

.modal.sale {
    background:blue;
    color:#fff;
}

.modal.sale h1 {
    color:#fff;
}
</style>