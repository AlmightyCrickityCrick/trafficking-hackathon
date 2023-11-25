<template>
    <div class="document-container">
<div class="content-card">
<h1>{{ this.title }}</h1>
<p>{{ this.summarize }}</p>

<div class="media-card">

<a :href="this.content">Download Content</a>
</div>
</div>

<!-- <div class="media-card">

 <a href="https://www.africau.edu/images/default/sample.pdf">Download Content</a>
<video controls id="video-view" v-if="type == 'video'"/>
<audio controls id="audio-view" v-if="type == 'audio'"/>
<object id="pdf-view" v-if="type == 'pdf'" data="https://www.africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display PDF file. <a href="https://www.africau.edu/images/default/sample.pdf">Download</a> instead.</p>
    </object>
</div> -->
<div class="rec-card">
    <DocumentComponent v-for="d in recs" :documentId ="d.id" :title ="d.title" :description="d.description"/>
</div>
</div>
</template>

<script>
import axios from "../services/axios.js";
import DocumentComponent from "./DocumentComponent.vue"
export default{
    components:{
        DocumentComponent,
    },
    data(){
        return{
            id: Number,
            title: "How to get away with murder",
            summarize :"Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor.",
            // type: "audio",
            content: "",
            recs: [{
                    id: 1,
                    title: "How to get away with murder",
                    description: "Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor."
                },
                {
                    id: 1,
                    title: "How to get away with murder",
                    description: "Here are 10 easy ways to get away with murder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium feugiat rhoncus. Nam accumsan mattis diam, quis eleifend elit suscipit at. Aliquam erat volutpat. Mauris aliquet velit varius rhoncus congue. Maecenas elementum nunc nec egestas dignissim. Fusce molestie magna ac elit porttitor lacinia. Nulla felis odio, consequat in egestas sed, aliquam sed velit. Cras vel arcu mauris. Etiam sit amet augue sagittis, posuere diam ut, vestibulum dolor."
                }]

        }
    },
    beforeMount(){
        this.id = this.$route.params.id
        this.content = `http://localhost:5000/download/${this.id}`
        axios.get(`/document/${this.id}`).then(d =>{
            console.log(d)
                this.title = d.data.title
                this.summarize =d.data.summarize
                // this.type = d.data.type
                this.content = `http://localhost:5000/download/1`
                this.recs = d.data.recs
            }
                ).catch(error => console.log(error))
                // .then(d=>{
                //     if(this.type == "video"){
                //         this.addVideo()
                //     }else if (this.type == "audio"){
                //         this.addAudio()
                //     }else if(this.type == "pdf"){
                //         this.addPDF()
                //     }
                // })
            
    },
    methods:{
        addVideo(){
            let video = document.getElementById('video-view');
			let reader = new FileReader();

				reader.readAsDataURL( this.content );
				reader.addEventListener('load', function(){
					video.src = reader.result;
				});
        },
        addAudio(){
            let audio = document.getElementById('audio-view');
			let reader = new FileReader();

				reader.readAsDataURL( this.content );
				reader.addEventListener('load', function(){
					audio.src = reader.result;
				});
        },
        addPDF(){
            let pdf = document.getElementById('pdf-view');
			let reader = new FileReader();

				reader.readAsDataURL( this.content );
				reader.addEventListener('load', function(){
					pdf.src = reader.result;
				});
        }

    }
}
</script>

<style scoped>
.document-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7vh;
    width:100%;
    border-radius: 20px;

}
.content-card{
    height: fit-content;
    width: 48vw;
    padding: 30px;
    margin-bottom: 5vh;
    background-color: #2F496E;
    color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}
a{
    text-decoration: none;
    color: white;
    font-size: 18px;
}
.media-card:hover{
    background-color: #EB5050;
}

.media-card{
    height: fit-content;
    width: 45vw;
    padding: 15px;
    background-color: #9CB3D5;
    color: white;
    border-radius: 20px;
    border: black solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 5vh;
}

.rec-card{
    color: white;
}

h1{
    font-size: 26px;
    margin-bottom: 4vh;
}

p{
    font-size: 20px;
    color: white;

}

video{
    width: 58vw;

}
audio{
    width: 58vw;
}
embed{
    width:58vw;
    height: 100%;
}

</style>