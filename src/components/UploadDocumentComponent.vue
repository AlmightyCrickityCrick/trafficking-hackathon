<template>
    <div class="upload-container">
        <div class="upload-card">
            <label for="files" class="drop-container" id="dropcontainer">
            <span class="drop-title">Drop files here</span>
                            or
            <input type="file" id="files" required  @change="handleFileAdd">
            </label>
        <!-- <div class="privacy-option">
            <input type="radio" id="public" value="public" v-model="privacy">
            <label for="public">Public</label>
            <input type="radio" id="private" value="private" v-model="privacy">
            <label for="private">Private</label> 
        </div> -->
        <button @click="handleUpload">Upload</button>
    </div>
    </div>
    
</template>
    
    <script>
    import axios from "../services/axios.js";
    export default{
        data(){
            return{
                document: "",
                privacy:"private"
            }
        },
        methods:{
            handleFileAdd(event){
              this.file = event.target.files[0];
            },
            handleUpload(){
              let formData = new FormData();
				
				formData.append('file', this.file); 
        formData.append('user_id', 0); 
        formData.append('title', "asdsada"); 
        formData.append('access_type', "private");
        formData.append('doc_type', "pdf");

				
				axios.post( '/upload',
					formData,
					{
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					}
				).then(function(){
					console.log('SUCCESS!!');
				})
				.catch(function(){
					console.log('FAILURE!!');
				});
            }
        }
    }
    </script>
    
    <style scoped>
    .upload-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-family: 'Hina Mincho', serif;

    }
    .upload-card{
        /* background-image: radial-gradient(#423B38, #332D29, #0D0C0C); */
        background-color: #2F496E;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        height: 60vh;
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 20px;
    }

    input[type=file]::file-selector-button {
  margin-right: 20px;
  border: white solid 1px;
  background: #9CB3D5;
    border: 1px solid black;;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-family: 'Hina Mincho', serif;
  transition: .2s ease-in-out;
  font-size: 16px;

}

input[type=file]::file-selector-button:hover {
  background: #EB5050;
}

input[type=file]::file-input-label {
  background: #EB5050;
}
.drop-container {
  position: relative;
  display: flex;
  font-family: 'Hina Mincho', serif;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 30vw;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed white;
  color: white;
  cursor: pointer;
  transition:  .2s ease-in-out, border .2s ease-in-out;
}
label{
  font-family: 'Hina Mincho', serif;
}

.drop-container:hover{
  cursor: pointer;
}

.drop-title {
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: color .2s ease-in-out;
  font-family: 'Hina Mincho', serif;
}

.privacy-option{
    color: white;
    margin-left: 2vw;
}
.privacy-option label{
    margin-right: 4vw;
}
    
button{
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
    border-radius: 15px;
    font-family: 'Hina Mincho', serif;
    font-size: 16px;

}

button:hover{
    background-color: #EB5050;
}

button:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input[type="radio"] {
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}


</style>