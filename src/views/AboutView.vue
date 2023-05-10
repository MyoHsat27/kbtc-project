<template>
        <who-we-are_our-student-component :title="titleOne" :contentA = "contentOneA" :contentB ="contentOneB" :text="textOne"/>
        <ExplorePath/>
</template>

<script>
import WhoWeAre_ourStudentComponent from "@/components/About/whoWeAre_ourStudentComponent.vue";
import ExplorePath from "@/components/About/explorePath.vue";
import {ref} from "vue";
export default {
  name: 'AboutView',
  components:{WhoWeAre_ourStudentComponent,ExplorePath},
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
