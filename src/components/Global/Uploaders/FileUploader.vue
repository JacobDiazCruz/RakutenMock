<template>
  <div class="job-post-uploader__container">
    <p><b>{{ label }}</b></p>
    <p>{{ description }}</p>

    <!----- Image display box ----->
    <div
      class="upload-container mt-2"
      :hidden="!file.path"
    >
      <button 
        @click="$emit('remove-file')"
        class="remove-img-btn"
        type="button"
      >
        <TrashIcon/>
      </button>
      <div class="img-container">
        <img :src="file.path" />
      </div>
    </div>

    <!----- Meme Image Uploader ----->
    <div class="job-post-uploader__row mt-4" v-if="!file.path">
      <div class="job-post-uploader__col-1">
        <input
          type="file"
          ref="fileUpload"
          @change="$emit('handle-file-upload', $event)"
          class="upload-container mt-n2 custom-file-upload"
          name="upload-input"
          id="file"
        />
        <div class="select-file-container">
          <button class="upload-file-btn" @click.prevent="$refs.fileUpload.click()">
            Upload file
          </button>
          <p class="max-text">
            Maximum uploaded file size allowed: 1.5 MB
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FileUploader',
  props: {
    file: {
      type: Object
    },
    label: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
// input[type=file] {
//   cursor: pointer;
//   width: 100%;
//   height: 240px;
//   color: transparent !important;
//   background-color: #FAFBFD !important;
//   overflow: hidden;
//   border: 2px dashed #DADADA;
//   direction: rtl;        /* Sets the Control to Right-To-Left */
//   text-align: center;

//   &:active {
//       border: 1px solid #DADADA !important;
//   }
// }

// .custom-file-upload::after {
//   content: "Drop your .jpg or .png files here \A or" !important;
//   white-space: pre-wrap;
//   width: 300px;
//   height: 100px;
//   font-size: 14px;
//   line-height: 32px;
//   display: inline-block;
//   background-color: transparent !important;
//   margin-right: auto;
//   margin-left: auto;
//   font-weight: bold;
//   display: block;
//   border: 1px solid transparent;
//   color: #111117 !important;
//   padding: 2px 0 0 0;
//   border-radius: 4px;
//   text-align: center;
//   font-family: Helvetica, Arial, sans-serif;
// }

// input[type=file]::-webkit-file-upload-button {
//   visibility: hidden;
// }

// .upload-file-btn {
//   text-align: center;
//   margin: auto;
//   font-size: 14px;
//   color: #727272 !important;
//   border: 1px solid #727272 !important;
//   width: 100px;
//   height: 40px;
//   margin-top: 10px;
//   background-color: #FFF;
// }

// .select-file-container {
//   display: block;
//   text-align: center;
//   width: 100%;
//   margin-top: -140px;
// }

// .max-text {
//   font-size: 14px;
//   margin-top: 50px !important;
//   color: #727272;
// }


// // delete
// .upload-container {
//   border: 1px solid #DADADA;
//   border-radius: 4px;
//   padding: 10px;
//   padding-bottom: 1em !important;
//   width: 230px;
//   height: 100%;
//   overflow-y: hidden;
  
//   .img-container {
//     margin-top: 35px;
//     width: 100%;
//     height: 100%;
//     background-color: #FFF !important;
//     padding-bottom: 10px !important;
  
//     img {
//         width: 100%;
//         margin-bottom: 10px !important;
//     }
//   }
  
//   .remove-img-btn {
//     float: right;
  
//     i {
//         color: #DADADA;
//     }
//   }
// }
</style>