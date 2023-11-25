<template>
<div class="document-card" @click="changeOpenState">
    <h1>{{ title }} </h1>
    <template v-if="open">
        <p>{{ description }}</p>
        <RouterLink class="document-button" :to="{ name: 'document', params: { id: documentId } }"> View More</RouterLink>
    </template>

</div>

</template>

<script>
import { RouterLink } from 'vue-router';

export default{
    components: { RouterLink },
    props:{
        documentId: Number,
        title: String,
        description: String,
    },
    data(){
        return{
            open : false
        }
    },
    beforeMount(){

    },
    methods:{
        changeOpenState(){
            this.open = !this.open
        }
    }
}
</script>

<style scoped>

.document-card{
    min-height: 7vh;
    width: 50vw;
    padding: 10px;
    background-color: #2F496E;
    /* background-image: radial-gradient(#171513, #141210, #0D0C0C); */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border: #423b37 solid 2px;
    display: flex;
    flex-direction: column;
    margin-bottom: 3vh;
    border-radius: 20px;
    cursor: pointer;

}
.document-button{
    min-width: 16vw;
    padding: 10px 15px;
    background-color: #9CB3D5;
    border: 1px solid black;
    color: #FFFFFF;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    justify-self: center;
    text-decoration: none;
    border-radius: 20px;
    font-weight: 600;

}

.document-button:hover{
    background-color: #EB5050;
}

.document-button:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}


h1{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 8px;
}

p{
    margin-bottom: 10px;
    padding: 10px 0px;
}
</style>