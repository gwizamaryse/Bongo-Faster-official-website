<template>
  <div>
    <!-- 1st Container:Title -->
    <v-container fluid class="pa-0">
      <v-layout row wrap>
        <v-flex md5 sm12 xs12 d-flex>
          <v-card tile class="yellow black--text elevation-0 transparent pt-5" >  
            <v-card-text>
              <h1 class="display-4 font-weight-bold text-xs-center text-no-wrap">BONGO<br>FASTER</h1>

              <p class="title text-xs-center font-weight-regular.font-italic mt-1">UDART Mobile App: Mwendokasi on your hands</p>

                 <v-layout class= "canbe--icon-position" align-center justify-center row mt-4 >
                 <a target="_blank" 
                  href="https://play.google.com/store/apps/details?id=tz.co.bongofaster.app&hl=en" class="canbe--icon google-play"></a>
                  <a target="_blank" 
                  href="https://itunes.apple.com/jp/app/bongofaster/id1338603772?mt=8" class="canbe--icon app-store"></a>
                </v-layout>
              
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md7 sm12 xs12 d-flex >
          <v-card tile class="yellow black--text elevation-0 transparent" >
            <v-card-media src="/lib/img/hand-1.png" cover aspect-ratio="1.3" contain></v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- 2nd Container:Explanation -->
    <v-container fluid class="pa-0">
      <v-layout row wrap>

        <v-flex md6 sm6 xs12 d-flex>
          
          <v-card img ="/lib/img/top-pht-1.jpg" tile  class="pl-5">
            <v-card-title class="canbe--text-on-img text-xs-center title">
              <div class="headline">Realtime UDART Info</div>
            </v-card-title>
            <v-card-text class="md-2 layout justify-start">
              <strong>
                know the route status<br>
                Get bus schedule<br>
                Your nearest Station
              </strong>
            </v-card-text>
            <v-flex>
              <v-img src="/lib/img/smartphone.png" height="250" contain position="left"></v-img>
            </v-flex>
          </v-card>
        </v-flex>
        
        <v-flex md6 sm6 xs12 d-flex >
          <v-card color=green tile class="white--text pl-5" row wrap >
            <v-flex >
              <v-card-title class="title " >
                Realtime UDART Info
                  Get Route Information,<br>
                  Know station locations,<br>
                  Get Bus Location, Plan Your Trip
                  
              </v-card-title>
              <v-card-text class="subheading ">
                No reason to miss the bus<br>
                No reason to be late
              
              </v-card-text>
            </v-flex>
            <v-flex>
              <v-img src="/lib/img/hand-2.png" position="left"></v-img>
            </v-flex>
          </v-card>
        </v-flex>

        <v-flex md6 sm6 xs12>
          <v-card color=purple class="white--text " height="">
            <v-flex sm6 xs12>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Give Feedback</div>
              </v-card-title >
              <v-card-text class="pl-5 subheading " >
                
                  we aim at satisfying our customers<br>
                  Hearing from our customers, gives courage for improvement<br>
                  UDART gives you reliable transport at reasonable cost<br>
                  Tell us your suggestions so that we remain reliable
                
              </v-card-text>
            </v-flex>
            <v-flex sm6 xs12>
              <v-card-media src="/lib/img/hand-3.png" aspect-ratio="1" ></v-card-media>
            </v-flex>
          </v-card>
        </v-flex>


        <v-flex md6 sm6 xs12 d-flex >
          <v-card class="elevation-0 transparent pl-5" img ="/lib/img/top-pht-2.jpg" tile  contain>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">
                Get News Updates, Safety tips,<br>
                guides and share
              </div>
            </v-card-title>
            <v-card-text>
              <strong>
                Get notification from UDART on time<br>
                Any changes on routes schedule,<br>
                new routes information
              </strong>
            </v-card-text>
            <v-flex ml-5>
              <v-img src="/lib/img/smartphone.png" height="250" contain position="left"></v-img>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- 3rd Container:How to Use -->
    <v-container fluid class="pa-0">
      <v-layout row wrap>
        <v-flex md12>
          <v-card class="elevation-0 transparent" tile>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">How to Use Bongofaster</div>
            </v-card-title>
            <v-card-text class="text-xs-center"><strong>Simple | Multilingual | Faster</strong></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- 4th Container:Explanation -->
    
    <v-container fluid class="pa-0">
      <v-layout row wrap >
        <v-flex md4 sm12 xs12>
          <v-card tile color="yellow">
            <v-card-media src="/lib/img/top-pht-3.png" cover aspect-ratio>
              <v-card-text class="canbe--text-on-img text-xs-center title">Knowing your current location,<br>Makes you enjoy all features</v-card-text>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex md4 sm6 xs12>
          <v-card tile color="green">
            <v-card-media src="/lib/img/top-pht-5.png" cover aspect-ratio>
              <v-card-text class="canbe--text-on-img text-xs-center title">Search your stations accordingly</v-card-text>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex md4 sm6 xs12>
          <v-card tile color="blue">
            <v-card-media src="/lib/img/top-pht-4.png" cover aspect-ratio>
              <v-card-text class="canbe--text-on-img text-xs-center title">Check the time table</v-card-text>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- 5th Container:Market Icons -->
    <v-container fluid class="px-1 py-3">
      <v-layout row wrap layout justify-center class="canbe--icon-position">
        <v-flex xs6><a target="_blank" href="https://play.google.com/store/apps/details?id=tz.co.bongofaster.app&hl=en" class="canbe--icon google-play"></a></v-flex>
        <v-flex xs6><a target="_blank" href="https://itunes.apple.com/jp/app/bongofaster/id1338603772?mt=8" class="canbe--icon app-store"></a></v-flex>
      </v-layout>
    </v-container>

    <!-- Last Container:Footer -->
    <v-container fluid class="pa-0">
      <v-layout row wrap>
        <v-flex md12>
          <v-footer height="auto">
            <v-layout justify-center row wrap>
              <v-btn v-for="link in links" :key="link" flat round>{{ link }}</v-btn>
              <v-flex py-2 text-xs-center xs12><strong>Studio Canbe Corp &copy; 2019</strong></v-flex>
            </v-layout>
          </v-footer>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
	data: () => ({
		links: [
			 'About'
			,'Blog'
			,'Help'
			,'Language'
			,'News'
			,'Support'
			,'Parterns'
			,'terms of Services'
			,'Privacy Policy'
		]
	})
}
</script>

<style>
.canbe--icon.app-store{
	background-image: url('/lib/img/r2-app-store.png');
	width: 150px;
	height: 49px;
}
.canbe--icon.google-play{
	background-image: url('/lib/img/r2-google-play.png');
	width: 150px;
	height: 45px;
}
.canbe--icon{
	margin: auto;
	display: block;
	height: 100%;
	overflow: hidden;
	text-indent: 100%;
	white-space: nowrap;
	background-size: contain;
	-webkit-transition: 0.3s ease;
	transition: 0.3s ease;
}
.canbe--text-on-img{
	line-height: 150% !important;
	text-shadow: 1px 1px 0 
  rgba(255,255,255, 0.5), 1px 0 0 rgba(255,255,255, 0.5), 1px -1px 0 rgba(255,255,255, 0.5), 0 1px 0 rgba(255,255,255, 0.5), 0 -1px 0 rgba(255,255,255, 0.5), -1px 1px 0 rgba(255,255,255, 0.5), -1px 0 0 rgba(255,255,255, 0.5), -1px -1px 0 rgba(255,255,255, 0.5);
}
.canbe--icon-position{
  width: 300px;
  margin: auto;
  -webkit-transition: 0.3s ease;
	transition: 0.3s ease
}
</style>
