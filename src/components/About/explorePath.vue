<template>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h1 class="title py-3 text-center">Explore your path with KBTC</h1>
          <div class="btn-container d-flex justify-content-between mb-4">
            <a href="" class="button">Find your program</a>
            <a href="" class="button">Contact us</a>
            <a href="" class="button">Book A Tour</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "explorePath.vue"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Syne:700'); /* font for title */
  .title{
    font-size: 38px;
    font-family: 'Syne', sans-serif;
    font-weight: 400;
  }
  .button{
    text-decoration: none;
    color:#D9A429;
    padding:8px 18px;
    border: 1px solid #D9A429;
    transition: .4s;
    margin: 0px 20px;
  }
  .button:hover{
    background: #D9A429;
    color: white;
  }
  .container{
    margin: 25px;
  }
  @media screen and (max-width: 395px) {
    .container{
      margin: 15px;
    }
    .title{
      font-size: 25px;
    }
    .button{
      padding: 8px 6px;
      margin: 0px 12px;
      font-size: 12px;
    }
  }
</style>