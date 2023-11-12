
const enterword = document.querySelector('.enterword');
const result = document.querySelector('.result');
const text = document.querySelector('.text');
const  speaker = document.querySelector('.speaker');
const newWord = document.querySelector('.new-word');
const partOfSpeech = document.querySelector('.partOfSpeech');
const example = document.querySelector('.example');

let dictionary = 
{
    

fetchData: function(word) {
        fetch
        //("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=50d7fc5f19471822addc3c2dc5e640e2")
        (
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
             
             ) 
             .then((response) => response.json())
             .then((data)=> this.displayData(data));
        
        
    },

displayData: function(data){
    
    document.querySelector(".dictionary").classList.remove("loading");
    enterword.innerHTML= data[0].word;
    text.innerHTML = data[0].phonetic;
    result.innerHTML = '<strong>Meanings: </strong>' +data[0].meanings[0].definitions[0].definition;
    partOfSpeech.innerHTML = '<strong>Parts Of Speech: </strong>' +data[0].meanings[0].partOfSpeech;
    example.innerHTML = '<strong>Example: </strong>' + data[0].meanings[0].definitions[0].example;



    var x = example.innerText;  
        if (x == "Example: undefined") {
           
            example.classList.add("hide");
            
        } else {
            example.classList.remove("hide");
        }
    
    // Play sound of word
    
    let sound = data[0].phonetics[0].audio;
    
        speaker.addEventListener("click", () => { 

        var audio = new Audio(sound);
       
        audio.play();
          
    }); 
        

    // audio.srcObject = null;
    // audio.setAttribute('src', theNewSource);
    // audio.load();
  
},

search: function(){
    this.fetchData(document.querySelector('.search-bar').value);
}
};
document.querySelector(".search button").addEventListener("click", function(){
    dictionary.search();    
    },
    );

    newWord.addEventListener('click', ()=> {
        location.reload();
    });