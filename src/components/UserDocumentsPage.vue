<template>
    <div class="user-page">
    <DocumentComponent v-for="d in documentList" :documentId ="d.id" :title ="d.title" :description="d.description"/>
</div>
</template>

<script>
import DocumentComponent from "./DocumentComponent.vue"
import axios from "../services/axios.js";

export default{
    components:{
        DocumentComponent
    },
    data(){
        return{
            documentList : [{
                    id: 1,
                    title: "How to get away with murder",
                    description: "Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor."
                },
                {
                    id: 1,
                    title: "How to get away with murder",
                    description: "Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor."
                }],
        }
    },
    beforeMount(){
        axios.get("/user/1/documents").then(d =>{
                this.documentList = d.data
            }
                ).catch(error => console.log(error))
    },
}
</script>

<style scoped>
.user-page{
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    align-items: center;
    color: #FFFFFF;
    margin-top: 10vh;
    width: 100%;

}
</style>