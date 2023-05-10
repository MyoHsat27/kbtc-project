<template>
  <div class="container">
    <div class="row py-4">
      <!--for spacing container start-->
      <div class="col-12 col-md-4"></div>
      <!--for spacing container start-->

      <!-- title content container start -->
      <div class="col-12 col-md-8 title-content-container">
        <h4 class="title mb-4">{{title}}</h4>
        <p class="content">
          <span class="mb-3 d-inline-block">{{contentA}}</span>
          <span class="mb-3 d-inline-block">{{contentB}}</span>
        </p>
      </div>
      <!-- title content container start -->

      <!--text-image-container-start-->
      <div class="col-12 my-3">
        <div class="text-image-container">
          <div class="text-container">
            <div class="text">{{text}}</div>
          </div>
          <div class="image-container"></div>
        </div>
      </div>
      <!--text-image-container-start-->
    </div>
  </div>
</template>

<script>
export default {
  name: "whoWeAre_ourStudentComponent",
  props: ['title','contentA','contentB','text'],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Syne:700'); /* font for title */
@import url('https://fonts.googleapis.com/css?family=Archivo:400');/* font for content */

/*title content style start*/
.title-content-container{
  margin-bottom:220px;
}
.title {
  font-size: 32px;
  font-family: 'Syne', sans-serif;
  font-weight: bold;
}
.content{
  font-family: 'Archivo', sans-serif;
  font-size: 18px;
  line-height: 139.3%;
  width: 714px;
}
/*title content style end*/

/*text-image-style-start*/
.text-image-container{
  position: relative;
}
.text-container{
  width: 953px;
  height: 300px;
  z-index: 1;
  background-color: #031D3E;
  padding: 47px;
}
.text{
  width: 290px;
  height: 39px;
  font-size: 22px;
  font-family: 'Syne', sans-serif;
  color: #FFFFFF;
}
.image-container{
  position: absolute;
  width: 714px;
  height: 400px;
  z-index: 3;
  bottom: 100px;
  right: 155px;
  background-image: url("@/assets/images/who_we_are.png");
}
/*text-image-style-end*/

/*responsive for phone start*/
@media screen and (max-width: 395px) {
  /*title content style start*/
  .title-content-container{
    padding: 18px;
    margin-bottom: 20px;
  }
  .title{
    font-size: 25px;
  }
  .content{
    font-size: 12px;
    max-width: 100%;
  }
  /*title content style start*/
  /*text-image-style-start*/
  .text-container{
    width:80.5%;
    height: 150px;
    padding: 16px;
  }
  .image-container{
    width:65%;
    height: 180px;
    bottom:40px;
    right: 4px;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .text{
    width: 100px;
    font-size: 12px;
  }
  /*text-image-style-end*/
}
</style>