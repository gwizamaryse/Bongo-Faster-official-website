<template>
<div id = "app">
 <v-app lighten-2>
   <v-content>
   <v-container >
      <v-layout row wrap>


<!-- Yellow top block -->
  <v-flex xs6  >
            <v-card   
                   tile 
                   class="yellow black--text elevation-0 transparent"
                   height="500px"> 
                   <v-card-text  > 

                   <h1 class="mb-2 display-4 text-xs-center">BONGO</br>FASTER </h1>
                   <p class="title align-content-center" >
                    UDART Mobile App: Mwendokasi on your hands </br>
                        </p>
                    <v-container grid-list>
                      <v-layout row wrap> 

                         <v-flex >
                          <a target="_blank" 
                            href="https://itunes.apple.com/jp/app/bongofaster/id1338603772?mt=8" class="bongo--icon google-play"></a>
                         </v-flex>
                         <v-flex>
                           <a target="_blank" 
                           href="https://itunes.apple.com/jp/app/bongofaster/id1338603772?mt=8" class="bongo--icon app-store"></a>
                         </v-flex>

                  
                       
                       
                      </v-layout>
                    </v-container>
                   
             </v-card-text>  
            </v-card> 
          
    </v-flex>

    <v-flex class=" xs6">
              <v-card 
                   tile 
                   class="yellow black--text elevation-0 transparent" 
                   height="500px">
             
             <v-img 
              src="/lib/img/hand-1.png"
              class=" contain"
              auto-height> 
               </v-img>

               </v-card>
            
    </v-flex> 
   
      
<!-- second block -->
      <v-flex xs6 >
              <!-- first card with lady background -->
              <v-card 
                 img ="/lib/img/top-pht-1.jpg"
                 tile
                 height="460"
                 class="pl-4">              
                      <v-card-title primary-title>
                        <div class="headline">Realtime UDART Info.</div>
                      </v-card-title>

                    <v-card-text class="md-2 layout justify-start" >
                           <strong> know the route status </br>
                            Get bus schedule </br>
                             Your nearest Station </strong>
                    </v-card-text>

                       <v-flex >
                              <v-img                        
                              src="/lib/img/smartphone.png"
                              height="230"
                              contain
                              position="left"
                              > </v-img>
                      </v-flex>         
                     </v-card>
          </v-flex>

                 <!-- 2nd block, card with green background -->

          <v-flex xs6 >

            <v-card 
                   color=green 
                   tile 
                   height="460px"
                   class="white--text"
                   row wrap>

                     <v-flex>
                         <v-card-title primary-title class="layout justify-center">
                           <div class="headline">Get Route Information,
                           </br> Know station locations, 
                            </br> Get Bus Location, Plan Your Trip</div>
                        </v-card-title>
                            <v-card-text  >
                               No reason to miss the bus </br>
                                 No reason to be late 
                             </v-card-text>
                      </v-flex>

                    <v-flex>
                        <v-img
                         src="/lib/img/hand-2.png"
                         aspect-ratio="1.2"
                         position="left">   
                         </v-img>                    
                    </v-flex>
           </v-card>
          </v-flex>
             
    
<!-- 3rd block Give feedback, new updates-->

        <v-flex xs6 >
          <v-card 
              color=purple 
              class="elevation-0 transparent white--text "
              height="450px">  
              <v-flex >
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Give Feedback</div>
                    </v-card-title>
                  <v-card-text>
                  <strong>we aim at satisfying our customers </br>
                  Hearing from our customers, gives courage for improvement </br>
                  UDART gives you reliable transport at reasonable cost </br>
                  Tell us your suggestions so that we remain reliable </strong>
                  </v-card-text>
                </v-flex>

               <v-flex>
                    <v-img
                    src="/lib/img/hand-3.png"
                    contain></v-img>
                </v-flex>
            </v-card>
             
              </v-flex>

            <v-flex xs6 >
              <v-card 
              class="elevation-0 transparent"
              img ="/lib/img/top-pht-2.jpg" 
              tile 
              height="450px"
              contain>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Get News Updates, Safety tips, 
                    </br> guides and share </div>
                </v-card-title>
                <v-card-text  >
                 <strong> Get notification from UDART on time </br>
                  Any changes on routes schedule, new routes information </strong>
                </v-card-text>
                <v-flex ml-5>
                              <v-img                        
                              src="/lib/img/smartphone.png"
                              height="240"
                              contain
                              position="left"
                              > </v-img>
                      </v-flex>    
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

        <v-flex xs4 md4>
              <v-card tile color=yellow class="elevation-0 transparent"
              img ="/lib/img/top-pht-3.png"
              height="300px"
              aspect-ratio="1">
                <v-card-title primary-title class="layout justify-center"
                height="250px">
                  <div class="headline">Knowing your current location, </br> Makes you enjoy all features</div>
                </v-card-title>
                <v-card-text>
                  
                </v-card-text>
              </v-card>
         </v-flex>

         <v-flex xs4 md4>
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

          <v-flex xs4 md4 >
              <v-card 
              img ="/lib/img/top-pht-4.png"
              aspect-ratio="1"
              color=blue lighten-2
              class="elevation-0 transparent "
              tile 
              height="300px">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Check the time table</div>
                </v-card-title>
                <v-card-text  >
                  
                </v-card-text>
              </v-card>
           </v-flex>

           <!-- App Store and GooglePlay Logo/Links -->

            <v-flex xs12 >
              <v-card 
              class="elevation-0 transparent"
              tile 
              >
                <v-container class="grid-list ">
                      <v-layout justify-center row wrap > 


                        <v-flex xs3>

                        </v-flex>
                    
                         <v-flex xs3 wrap>
                          <a target="_blank" 
                            href="https://itunes.apple.com/jp/app/bongofaster/id1338603772?mt=8" class="bongo--icon google-play"></a>
                         </v-flex>
                          

                         <v-flex xs3 wrap>
                           <a target="_blank" 
                           href="https://itunes.apple.com/jp/app/bongofaster/id1338603772?mt=8" class="bongo--icon app-store"></a>
                         </v-flex>

                         <v-flex xs3>
                           
                         </v-flex>
                       
                      </v-layout>
                    </v-container>
              </v-card>
            </v-flex>

<!-- Last block, footer -->

      <v-flex xs12  >
          <v-footer height="auto">
            <v-layout justify-center row wrap>
               <v-btn v-for="link in links"  :key="link" flat round >
                   {{ link }}
                </v-btn>
                <v-flex py-2 text-xs-center xs12>
                   <strong>Copyright &copy;BongoFaster. All rights reserved.</strong> 
                 </v-flex>
             </v-layout>
          </v-footer>
        </v-flex>

      </v-layout>
    </v-container>
    </v-content>
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
.bongo--icon.app-store{
	background-image: url('/lib/img/r2-app-store.png');
	width: 170px;
	height: 56px;
}
.bongo--icon.google-play{
	background-image: url('/lib/img/r2-google-play.png');
	width: 170px;
	height: 51px;
}
.canbe--icon {
    display: block;
    height: 100%;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    background-size: contain;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

</style>

