<template >
    <div class="search-page">
        <DocumentComponent v-for="d in documentList" :documentId ="d.id" :title ="d.title" :description="d.description"/>
        <div class="search-box">
            <input v-model="searchKeywords" placeholder="Introduce your keywords"/>
            <button @click="search">Search</button>
        </div>

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
            documentList : [
                {
                    id: 1,
                    title: "How to get away with murder",
                    description: "Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor."
                },
                {
                    id: 1,
                    title: "How to get away with murder",
                    description: "Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor."
                }
            ],
            searchKeywords: ""
        }
    },
    beforeMount(){
         
    },
    methods:{
        search(){
            let modifiedKeywords = this.searchKeywords.replace(" ", "_")
            axios.get("/search?keywords=" + modifiedKeywords).then(d =>{ 
                console.log(d)
                this.documentList = d.data.data
            }
                ).catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
.search-page{
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    align-items: center;
    color: #FFFFFF;
    margin-top: 10vh;
    width: 100%;
}
.search-box{
    position: absolute;
    bottom: 20px;
}

input{
    width:40vw;
    padding: 10px;
    border-radius: 15px;
    height: 5vh;
    background-color: #9CB3D5;
    font-size: 20px;
    color: white;
    font-family: 'Hina Mincho', serif;

}

input::placeholder{
    color: white
}


button{
    min-width: 8vw;
    padding: 8px 15px;
    margin-left: 1vw;
    border-radius: .85rem;
    background-color: #9CB3D5;
    border: 2px solid black;
    color: #FFFFFF;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    height: 8.1vh;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Hina Mincho', serif;

}

button:hover{
    background-color: #EB5050;
}

button:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>


<!-- HTML !
<button class="button-40" role="button">Button 40</button>

/* CSS */
.button-40 {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

.button-40:hover {
  background-color: #374151;
}

.button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  .button-40 {
    padding: .75rem 1.5rem;
  }
} -->