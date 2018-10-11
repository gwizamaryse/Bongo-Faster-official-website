<template>
<div id = "app">
 <v-app id="light">
   <v-container fluid>
      <v-layout row wrap>


<!-- Yellow top block -->

    <v-flex xs12>
     <v-card tile class="yellow black--text" > 
      <v-card-text  > 
        <h1 class="text-sm-left"   >Bongo Faster</h1>
        <p class="text-sm-left" >
         UDART Mobile App: Mwendokasi on your hands
        </p>
      </v-card-text>
      <v-flex  offset-sm8 md2>
          <v-img src="/lib/img/hand-1.png"> 
            </v-img>
       </v-flex>  
     </v-card>
    </v-flex>

<!-- second block -->

            <v-flex xs6 >
              <v-card 
              
              img ="/lib/img/top-pht-1.jpg"
              tile
              height="420px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Realtime UDART Info.</div>
                </v-card-title>
                <v-card-text>
                 <strong> know the route status </br>
                  Get bus schedule </br>
                  Your nearest Station </strong>
                </v-card-text>

                <v-flex offset-sm2 md2>
                  <v-img src="/lib/img/smartphone.png"> 
                  </v-img>
                </v-flex>
                
                  
                
              </v-card>
            </v-flex>

            <v-flex xs6 >
              <v-card 
              color=green 
              tile 
              height="420px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Get Route Information,</br> Know station locations, </br> Get Bus Location, Plan Your Trip</div>
                </v-card-title>
                <v-card-text  >
                  <strong> reason to miss the bus </br>
                  No reason to be late </strong>
                </v-card-text>
                <v-img
                  src="/lib/img/hand-2.png"
                   aspect-ratio="3"
                   ></v-img>
              </v-card>
            </v-flex>

<!-- 3rd block Give feedback, new updates-->

        <v-flex xs6 >
              <v-card 
              color=purple class="elevation-0 transparent"
              img src="/lib/img/top-pht-1.jpg"
              height="420px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Give Feedback</div>
                </v-card-title>
                <v-card-text>
                  <strong>we aim at satisfying our customers </br>
                  Hearing from our customers, gives courage for improvement </br>
                  UDART gives you reliable transport at reasonable cost </br>
                  Tell us your suggestions so that we remain reliable </strong>
                </v-card-text>
                <v-img
                  src="/lib/img/hand-3.png"
                   aspect-ratio="2.75"
                   ></v-img>
              </v-card>
              </v-card>
            </v-flex>
            <v-flex xs6 >
              <v-card 
              class="elevation-0 transparent"
              img ="/lib/img/top-pht-2.jpg" 
              tile 
              height="420px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Get News Updates, Safety tips, </br> guides and share </div>
                </v-card-title>
                <v-card-text  >
                 <strong> Get notification from UDART on time </br>
                  Any changes on routes schedule, new routes information </strong>
                </v-card-text>
              </v-card>
            </v-flex>


<!-- 4th block, how to use bongo Faster -->

            <v-flex xs12 >
              <v-card 
              class="elevation-0 transparent"
              tile 
              >
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">How to Use Bongofaster </div>
                </v-card-title>
                <v-card-text  >
                  <strong> Simple | Multilingual | Faster </strong>
                </v-card-text>
              </v-card>
            </v-flex>


<!-- 5th block Current Location, search station, time table-->

        <v-flex xs4 >
              <v-card tile color=yellow class="elevation-0 transparent"
              img ="/lib/img/top-pht-3.png"
              height="300px">
                <v-card-title primary-title class="layout justify-center"
                height="250px">
                  <div class="headline">Knowing your current location, </br> Makes you enjoy all features</div>
                </v-card-title>
                <v-card-text>
                  
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs4 >
              <v-card
              img ="/lib/img/top-pht-5.png"
              color=green
              class="elevation-0 transparent"
              tile 
              height="300px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Search your stations accordingly</div>
                </v-card-title>
                <v-card-text  >
                  
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs4 >
              <v-card 
              img ="/lib/img/top-pht-4.png"
              color=blue lighten-2
              class="elevation-0 transparent"
              tile 
              height="300px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Check the time table</div>
                </v-card-title>
                <v-card-text  >
                  
                </v-card-text>
              </v-card>
            </v-flex>



<!-- Last block, footer -->

      <v-flex xs12  class="elevation-0 transparent">
          <v-footer height="auto">
            <v-layout justify-center row wrap>
               <v-btn v-for="link in links"  :key="link" flat round >
                   {{ link }}
                </v-btn>
                <v-flex py-3 text-xs-center xs12>
                   <strong>Copyright &copy;BongoFaster. All rights reserved.</strong> 
                 </v-flex>
             </v-layout>
          </v-footer>
        </v-flex>

          
        
  

      </v-layout>
    </v-container>
   </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'About|',
        'Blog |',
        'Help |',
        'Language |',
        'News |',
        'Support |',
        'Parterns |',
        'terms of Services |',
        'Privacy Policy|'
      ]
    })
  }
</script>

<style>
table.table tbody td{
	padding: 12px !important;
}
.canbe--icon.app-store{
	background-image: url('/lib/img/it/r2-app-store.png');
	width: 170px;
	height: 51px;
}
.canbe--icon.google-play{
	background-image: url('/lib/img/it/r2-google-play.png');
	width: 170px;
	height: 56px;
}
</style>
