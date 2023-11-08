var afinn;

function preload() {

  afinn = loadJSON('afinn165.json');
}


function setup() {
  noCanvas();
  console.log(afinn);

  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    var words = textinput.split(/\W/);
    console.log(words);
    var scoredwords = [];
    var totalScore = 0;

    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)) {
        var score = afinn[word];
        console.log(score);
        totalScore += Number | String(score);
        scoredwords.push(word + ': '  + ' ' + score + ' ');
          
      }
      
    }
    var scorePar = select('#scoreP');
    scorePar.html('sentiment score: ' + 
    totalScore);
    var comp = select('#comparativeP');
    comp.html('comparative: ' + totalScore / words.length);
    var wordlist = select('#wordlistP');
    wordlist.html(scoredwords);

    console.log(txt.value());
  }
}

(function(){
  document.addEventListener("keyup", function(event){
    if(event.target.matches(".count-words")){

      const value = event.target.value;
      const valueLength = event.target.value.length;

      const maxWords = parseInt(event.target.getAttribute("data-max-words"));
      const remainingWords = maxWords - valueLength;
      if(valueLength > maxWords){
      
        event.target.value = value.substr(0, maxWords);
        return;  
      }
      event.target.nextElementSibling.innerHTML = remainingWords  + "/700";
    }
  })
})();

$(document).ready(function () {
  // Sample code to get the AFINN score (you may have your own way)
  var afinnScore = 10; // Replace with your AFINN score

  var $container = $('.container-wrapper');
  
  // Set a threshold value for AFINN score when you want to limit the height
  var thresholdScore = 5; // Adjust this threshold as needed
  
  if (afinnScore > thresholdScore) {
    $container.css('max-height', '150px'); // Change the height as needed
  } else {
    $container.css('max-height', '150px'); // Set back to the default height
  }
});

