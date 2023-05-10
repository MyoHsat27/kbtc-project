<template>
    <nav class="navbar bg-body-tertiary px-0 px-md-5">
        <div class="container-fluid d-flex justify-content-between">
            <div class="">
                <img src="@/assets/images/icon/menu.png" alt="hello" class="icon1">
                <img src="@/assets/images/icon/search.png" alt="hello" class="icon ">
                <img src="@/assets/images/icon/person.png" alt="hello" class="icon ">
            </div>
            <div>
                <img src="@/assets/images/logo/sch_logo.png" class="school_logo" alt="kbtc">
            </div>
            <div>
                <button class="btn btn-warning book_btn">Book A Tour</button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarComponent'
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap");

nav{
    position: sticky;
    top: 0;
    background: #13274A !important;
}
.book_btn{
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: #031D3E;
    border-radius: 0;
    padding: 10px 30px;
    background: #D9A429;
}
.school_logo{
    width: 85px;
    height: 82px;
}
.icon{
    cursor: pointer;
    margin-left: 30px;
}

@media (max-width:600px) {
    .icon{
       scale: 0.7;
       margin-left: 10px;
    }
    .icon1{
        scale: 0.7;
    }
    .school_logo{
        scale: 1;
    }
    .book_btn{
        font-size: 14px;
        padding: 8px 10px;
    }
}
</style>