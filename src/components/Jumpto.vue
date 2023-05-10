<template>
<div class="container">
    <!--This is Title  -->
    <div class="parent-title ">
        <h1 class="child-title Syne">About KBTC School of IT</h1>
        <p class="Archivo letter">Discover a world-class education and endless opportunities for growth and development. Explore our diverse academic programs, cutting-edge research, and vibrant campus community. Join us and embark on a journey of intellectual curiosity, personal growth, and lifelong learning.</p>
    </div>
    <!-- this is Jumpto Box -->
    <div class="jumptoBox">
        <div class="row w-100">
            <div class="col-3">
                <h3 class="Syne text-white m-0">Jump To</h3>
            </div>
            <div class="col-4">
                <div class="jumpLink Archivo  w-100"><a href="" class="text-white text-decoration-none">WHO WE ARE</a></div>
                <div class="jumpLink Archivo  w-100"><a href="" class="text-white text-decoration-none">OUR PURPOSE</a></div>
                <div class="jumpLink Archivo  w-100"><a href="" class="text-white text-decoration-none">OUR STUDENTS</a></div>
            </div>
            <div class="col-5 p-0">
                <p class="jumpLink Archivo m-0" style="padding-left:20px"><a href="" class="text-white text-decoration-none">OUR VISION AND MISSION</a>
                </p>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Archivo&display=swap');    /* Archivo font-family */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap');   /*Syne font-family  */
.Syne{
    font-family: 'Syne', sans-serif;
}
.Archivo{
    font-family: 'Archivo', sans-serif;
}
.child-title{
    font-size: 45px;
    font-weight: 700;
    text-align: left;
    margin-top: 50px;
    color: #D9A429;
}
.letter{
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 30px ;
    left: 82px;
    top: 264px;
    color: #031D3E;
}
.jumptoBox{
    height: 300px;
    width: 100%;
    border-radius: 0px;
    margin-top: 90px;
    padding: 70px;
    background: #13274A;
}
.jumpLink{
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.2em;
    padding-bottom:40px ;
}
/* for mobile view */
@media (max-width:400px) {
.child-title{
    text-align: center;
    font-size: 23px;
    margin: 10px;
}
.letter{
    text-align: center;
    font-size: 15px;
    line-height: 20px;
    margin-top:20px;
    padding: 8px;
}
.jumptoBox{
    width: 100%;
    height: 150px;
    margin-top: 20px;
    padding-top:30px;
    padding-left:25px;
    padding-right: 0px;
}
.jumptoBox h3{
    font-size: 15px;
}
.jumpLink{
    font-size: 8px;
    padding-bottom: 20px;
    padding-left:10px;
}
}
</style>