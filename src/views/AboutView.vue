<template>
  <NavbarComponent></NavbarComponent>
  <JumptoComponent></JumptoComponent>
  <who-we-are_our-student-component :title="titleOne" :contentA = "contentOneA" :contentB ="contentOneB" :text="textOne"/>
  <who-we-are_our-student-component :title="titleTwo" :contentA = "contentTwoA" :contentB ="contentTwoB" :text="textTwo"/>

  <ExplorePath></ExplorePath>

  <TrendingComponent></TrendingComponent>

    <FooterComponent></FooterComponent>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import TrendingComponent from "@/components/About/TrendingComponent";
import WhoWeAre_ourStudentComponent from "@/components/About/whoWeAre_ourStudentComponent.vue";
import ExplorePath from "@/components/About/explorePath.vue";
import JumptoComponent from '@/components/JumptoComponent.vue';

export default {
  name: 'AboutView',
  components:{WhoWeAre_ourStudentComponent,ExplorePath,TrendingComponent ,NavbarComponent , FooterComponent,JumptoComponent},
  setup(){
    const titleOne = 'Who we are';//title for who we are section
    const titleTwo = 'Our student';//title our student section
    const contentOneA = 'Discover a world-class education and endless opportunities for growth and development. Explore our diverse academic programs, cutting-edge research, and vibrant campus community. Join us and embark on a journey of intellectual curiosity, personal growth, and lifelong learning.'//content for who we are section;
    const contentTwoA = 'Discover a world-class education and endless opportunities for growth and development. Explore our diverse academic programs, cutting-edge research, and vibrant campus community. Join us and embark on a journey of intellectual curiosity, personal growth, and lifelong learning.'//content for our student section;
    const contentOneB = 'Discover a world-class education and endless opportunities for growth and development. Explore our diverse academic programs, cutting-edge research, and vibrant campus community. Join us and embark on a journey of intellectual curiosity, personal growth, and lifelong learning.'//content for who we are section;
    const contentTwoB = 'Discover a world-class education and endless opportunities for growth and development. Explore our diverse academic programs, cutting-edge research, and vibrant campus community. Join us and embark on a journey of intellectual curiosity, personal growth, and lifelong learning.'//content for our student section;
    const textOne = 'You can study with the KBTC School of IT anywhere in Myanmar';//text for who we are section;
    const textTwo = 'You can study with the KBTC School of IT anywhere in Myanmar';//text for our student section;
    return{
      titleOne,titleTwo,
      contentOneA,contentTwoA,contentOneB,contentTwoB,
      textOne,textTwo
    }
  }
}
</script>



