<template>
<div class="container-fluid " style="width:100vw">
    <div class="row">
        <div class="col-12 col-xl-4 left_footer" >
            <div class="row d-flex justify-content-between align-items-center pt-4">
                <div class="col-xl-12 col-5 text-center">
                    <img src="@/assets/images/sch_logo.png" alt="" class="school_logo my-3">
                </div>
                <div class="col-xl-12 col-7 text-start text-lg-center">
                    <h4 class="school_info">LOCATION</h4>
                    <p class="school_info" style="color:white">No.14, Sayarsan Ward, Kabaraye Pagoda Road, YG , Myanmar</p>
                    <h4 class="school_info">Contact number</h4>
                    <p class="school_info" style="color:white">09 777 487555</p>
                    <h4 class="school_info">MAIL</h4>
                    <p class="school_info text-break" style="color:white;">kbtcuniversityschoolof_it@kbtc.edu.mm </p>
                </div>
            </div>
            <div class="line mx-auto mt-3"></div>
            <div class="p-4 d-flex justify-content-around">
                <a href=""><img src="@/assets/images/facebook.png" class="social_icon" alt=""></a>
                <a href=""><img src="@/assets/images/twitter.png" class="social_icon" alt=""></a>
                <a href=""><img src="@/assets/images/instagram.png" class="social_icon" alt=""></a>
                <a href=""><img src="@/assets/images/linkedin.png" class="social_icon" alt=""></a>
                <a href=""><img src="@/assets/images/youtube.png" class="social_icon" alt=""></a>
            </div>
            <p class="school_info text-center mb-4 text-decoration-underline mt-2 mt-lg-0" style="font-family:'Inter';"><span class="text-white">DEVELOP BY</span> KBTC STUDENT DEV TEAM</p>
        </div>
        <div class="col-12 col-xl-8 right_footer ">
            <div class="line mx-auto mt-5"></div>
            <div class="container">
                <div class=" d-flex justify-content-between p-lg-5 p-0 align-items-center mt-5 mt-lg-4">
                    <div class="col-3 text-center ">
                        <h4 class="footer_tag mb-4">Quick Link</h4>
                        <ul class=" list-unstyled">
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Why Choose KBTC</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Who We Are</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Mission & Vision</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">From Our Principal</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Leadership Team</a></li>
                        </ul>
                    </div>
                    <div class="col-3 text-center">
                        <h4 class="footer_tag mb-4">Learning</h4>
                        <ul class=" list-unstyled">
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Why Choose KBTC</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Who We Are</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Mission & Vision</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">From Our Principal</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Leadership Team</a></li>
                        </ul>
                    </div>
                    <div class="col-3 text-center">
                        <h4 class="footer_tag mb-4">Community</h4>
                        <ul class=" list-unstyled">
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Why Choose KBTC</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Who We Are</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Mission & Vision</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">From Our Principal</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Leadership Team</a></li>
                        </ul>
                    </div>
                    <div class="col-3 text-center">
                        <h4 class="footer_tag mb-4">Services</h4>
                        <ul class=" list-unstyled">
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Why Choose KBTC</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Who We Are</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Mission & Vision</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">From Our Principal</a></li>
                            <li class="mb-4 mb-lg-3"><a class="text-decoration-none link_tag " href="">Leadership Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
      name: "FooterComponent"
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@300");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300");

.left_footer{
    background: #BE8E57;
}
.right_footer{
    background: #031D3E;
}
.line{
    background: white;
    height: 1px;
    width: 90%; 
}
.footer_tag{
    color: #D9A429;
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
}
.link_tag{
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #D5D5D5;
}
.school_logo{
    width: 132px;
    height: 128px;
}
.school_info{
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #D9A429;
}
.social_icon{
    width: 30px;
    height: 30px;
    object-fit: contain;
}

@media (max-width:600px) {
    .school_logo{
        width: 100%;
        height: 100%;
    }
    .school_info{
        font-size: 15px;
        margin-bottom: 8px;
    }
    .social_icon{
        width: 35px;
        height: 35px;
        object-fit: contain;
    }
    .footer_tag{
        font-size: 15px;
    }
    .link_tag{
        font-size: 15px;
    }
}
</style>