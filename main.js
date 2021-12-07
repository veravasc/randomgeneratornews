// static random new ----------------------------------------------------------------------------------------------------

let min = 2, // 20 segundos como mínimo
max = 5; // 30 segundos como máximo
let rand = Math.floor(Math.random() * (max - min + 1) + min); // generate random number between 1 and 10

function noticiaAppear() {
 

  let Name = ['GOVERNMENT SUPPORT IS INCREASING', 'PRESIDENT CLOSE THE SUPREME COURT', 'PRESIDENT TALKS ABOUT A NEW CONSTITUTION', 'POST-POLL VIOLENCE CONTINUES IN PRODITIO', 'LEADER OF REBELS DETAINED IN PRODITIO', 'INTERNET PROTECTION LAW WAS APPROVED'];
  let randName = Name[Math.floor(Math.random() * Name.length)];
  document.getElementById("rand_new").innerHTML= randName;

  setTimeout(noticiaAppear, rand * 1000);
}

noticiaAppear();  




// rodapé ----------------------------------------------------------------------------------------------------------------


let frase1 =  "Congress revokes Presidents's report promoting 'patriotic education'";

let frase2 = "Mix of extremists who stormed the capital isn't retreating";

let frase3 = "Federal Government closes down opposite parties involved with rebels";

/*
          let news = [
            "Congress revokes Presidents's report promoting 'patriotic education'",
            "Mix of extremists who stormed the capital isn't retreating",
            "Federal Government closes down opposite parties involved with rebels",
            "President talks about closing the Supreme Court, claiming they are too corrupted",
            "Theater plays and art expositions are being shut down, Federal Government claims they were aligning with rebel ideology",
            "Riots all over the country, citzens don't feel safe anymore",
            "Leaders make 'united effort' against drug deaths",
            "Election violence spiked worldwide in 2020 – will this year be better?",
            "Citizens Increasingly Believe Violence is Justified if the Other Side Wins",
            "Proditio protests turn violent on anniversary",
            "Number of people leaving the country are skyrocketing",
            "Support for the government is statistically increasing"
          ],

*/

          const novaFrase = [frase1, frase2, frase3];

          function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
          }

          let r = -1;
          arr = [0, 1, 2]; //AUMENTAR.....................................
          ranNums = [];
          i = arr.length,
          j = 0;
          while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranNums.push(arr[j]);
            arr.splice(j,1);
          }
          
        
          function run() {
            r += 1;

            for( i=0; i < ranNums.length; i++) {
            console.log(ranNums[i]);

            $("#newsTicker p").append(
              "<span style='margin-right:8em;' class='story'>" + novaFrase[ranNums[i]] + "</span>"
            );

        }
      
      }
function macaco () {

  $("#newsTicker span").remove();
  shuffle(novaFrase);
  console.log(novaFrase[ranNums[r]]);
  r = -1;
  run();
  

}

setInterval(macaco, rand * 1000);




        //let randomNumber = Math.floor(Math.random()*news.length);
          

// relógio atual -------------------------------------------------------------------------------------------------------------------

        function checkTime(i) { 
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        }
        
        function startTime() {
          let today = new Date();
          let h = today.getHours();
          let m = today.getMinutes();
          //let s = today.getSeconds();
          // add a zero in front of numbers<10
          m = checkTime(m);
          //s = checkTime(s);
          document.getElementById('time').innerHTML = h + ":" + m;
          t = setTimeout(function() {
            startTime()
          }, 500);
        }
        startTime();



       
/*
        function myFunction() { 
          document.getElementById("mp4_src").src = "images/okay.mp4";
          document.getElementById("myVideo").load();
        } */


// vídeos background ------------------------------------------------------------------------------------------------------------------


function getRandomIndex(max) {
  /* The function will return a random number between 0 and max - 1 */
  return Math.floor(Math.random() * Math.floor(max));
}

function randomlyChooseVideo() {
  activeVideo = getRandomIndex(myvids.length);

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
}

var myvid = document.getElementById('myvideo');
var myvids = [
  "videos/1.mp4", 
  "videos/2.mp4",
  "videos/3.mp4",
  "videos/4.mp4",
  "videos/5.mp4",
  "videos/6.mp4",
  "videos/7.mp4",
  "videos/8.mp4"
  ];
/* The initial active video will radomly be choosen between videoArray length - 1 */
var activeVideo = getRandomIndex(myvids.length);

window.onload = function(e) {
  randomlyChooseVideo()
}

myvid.addEventListener('ended', function(e) {
  randomlyChooseVideo()
});