<template>
  <div class="main-container d-flex justify-content-center align-items-center">
    <div class="container trending-container">
      <div class="col-6 trending-content-container">
          <div class="trending-note">What's trending in KBTC</div>
          <div class="trending-header">Currently Trending News</div>
          <a href="" class="explore-btn">Explore More</a>
      </div>
      <div class="col-6 trending-bg-container">
        <div class="trending-bg-shape-responsive d-lg-none"></div>
      </div>
    </div>

    <div class="trending-bg-shape d-none d-lg-block"></div>

    <!-- Scroll Container Start -->
    <div class="scrollContainer" ref="scrollContainer">
      <div class="imagine-card-container"><!-- To make card see thought --></div>
      <div class="imagine-card-container"><!-- To make card see thought --></div>

      <template v-for="newData in newsDatas">
        <div class="news-card-container" :class="newData.imageClass">
          <div class="news-content-container">
            <div class="news-content-title">{{newData.title}}</div>
            <a class="read-more" href="">READ MORE</a>
          </div>
        </div>
      </template>
    </div>
    <!-- Scroll Container End -->
  </div>

  <div class="vh-100"></div>
</template>

<script>
import {ref, onMounted} from "vue";

export default {
  name: "TrendingComponent",
  setup () {
    const scrollContainer = ref(null);

    // Data of news - to loop the news card
    const newsDatas = ref([
        {title: "The Power of Community-Based Learning:", imageClass : "news-card-01"},
        {title: "Exploring the Intersection of Culture and Technology", imageClass : "news-card-02"},
        {title: "The Power of Community-Based Learning:", imageClass : "news-card-03"}
      ])

    onMounted(() => {
      // Listening scrollContainer onwheel event to scroll horizontally
      scrollContainer.value.addEventListener("wheel", handleWheel,{passive: false});
    })

    // Trending News scrolling function
    const handleWheel = (e) => {
      e.preventDefault();
      scrollContainer.value.scrollBy({
        left: e.deltaY < 0 ? -50 : 50,
      })
    }
    return {scrollContainer,newsDatas};
  }
}

</script>

<style scoped>
.main-container {
  background : #F4F4F4;
  position: relative; /* for background shape position */
  height: 100vh;
}

/* Trending Left-Side & Background Shape Start */
.trending-note {
  color : #D9A429;
  font-size : 16px;
  font-family: Inter,sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
}
.trending-header {
  font-family: Syne,sans-serif;
  font-size: 29px;
  font-weight: 600;
  margin-bottom: 20px;
}
.explore-btn {
  display: block;
  width: 190px;
  text-decoration: none;
  font-family: Syne,sans-serif;
  font-size: 14px;
  font-weight: 600;
  color : #494949;
  text-align: center;
  padding : 10px 30px;
  border: 1px solid #494949;
  transition: all 0.4s;
}
.explore-btn:hover {
  background: #13274A;
  color: white;
}
.trending-bg-shape {
  width: 500px;
  height: 50vh;
  background: #13274A;
  position: absolute;
  right: 0;
}
.trending-bg-shape-responsive {
  width: 500px;
  height: 40vh;
  background: #13274A;
}
/* Trending Left-Side & Background Shape End */

/* Scroll Container Start */
.scrollContainer {
  width: 90%;
  height: 300px;
  position: absolute;
  right: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.imagine-card-container { /* To make the left gap between scrollContainer and News Card */
  width : 350px;
  margin-left: 15px;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
}
/*News Card Design Start*/
.news-card-container {
  margin-left: 15px;
  width : 350px;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px -9px 100px -20px rgba(0,0,0,1) inset;
  -webkit-box-shadow: 0px -9px 100px -20px rgba(0,0,0,1) inset;
  -moz-box-shadow: 0px -9px 100px -20px rgba(0,0,0,1) inset;
}
.news-content-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}
.news-content-title {
  padding: 0 10px;
  font-family: Syne,sans-serif;
  font-size: 17px;
  font-weight: 600;
  color:white;
  margin-bottom: 5px;
}
.read-more {
  display: block;
  color: #D9A429;
  text-decoration: none;
  font-size: 12px;
  font-family: Inter,sans-serif;
  font-weight: 600;
  margin-bottom: 10px;
}
/*Adding images to card container*/
.news-card-01 {
  background-image: url("../../assets/images/trending_news_02.png");
}
.news-card-02 {
  background-image: url("../../assets/images/trending_news_01.png");
}
.news-card-03 {
  background-image: url("../../assets/images/trending_news_02.png");
}
/*News Card Design End*/
/* Scroll Container End */

.scrollContainer::-webkit-scrollbar { /* Hide scrollbar for scrollContainer (Chrome, Safari and Opera) */
  display: none;
}
.scrollContainer { /* Hide scrollbar for scrollContainer (IE, Edge and Firefox) */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Responsive Start */
@media screen and (max-width: 1200px) {
  .scrollContainer, .news-card-container, .news-content-container, .imagine-card-container {
    height: 250px;
  }
  .scrollContainer {
    width: 100%;
  }
  .news-card-container, .imagine-card-container, .news-content-container {
    width: 300px;
  }
}
@media screen and (max-width: 992px) {
  .main-container {
    height: 80vh;
  }
  .trending-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    padding: 0;
    height: 100%;
    max-width: 100%;
    margin: 0;
  }
  .trending-content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .trending-bg-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .trending-bg-shape-responsive {
    width: 400px;
    height: 40vh;
    background: #13274A;
  }
  .imagine-card-container {
    display: none;
  }
  .scrollContainer {
    top: 50%;
  }
}
@media screen and (max-width: 768px) {
  .scrollContainer {
    top: 52%;
  }
  .scrollContainer, .news-card-container, .news-content-container, .imagine-card-container {
    height: 220px;
  }
  .news-card-container, .imagine-card-container, .news-content-container {
    width: 270px;
  }
  .news-content-title {
    font-size: 15px;
  }
  .read-more {
    font-size: 10px;
  }
}
@media screen and (max-width: 576px) {
  .trending-bg-shape-responsive {
    width: 280px;
  }
}
/* Responsive End */
</style>