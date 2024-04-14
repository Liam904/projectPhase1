const btn = document.getElementById("btn")
const text = document.querySelector("textarea")
let allQuotes = []
const body = document.body
const toggleBtn = document.getElementById("check")

let authors = []
function getQuotes(index){
    url = "http://localhost:3000/quotes/"
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch(url, requestOptions)
        .then(function(response){
          return response.json()
        
        })
        
          .then(function(result) {
            result.forEach(function(data, id) {

              allQuotes = {
                text:data.text,
                id:id,
                authors:data.author

              }

              if(allQuotes.id === index){
                text.innerHTML = `${allQuotes.text} \n \n ${text.style.textAlign="center", text.style.color="grey", allQuotes.authors}`;
                
              }
            });
            
          
        })
        .catch((error) => console.error(error));
      }
      btn.addEventListener("click", function(){
        text.innerHTML = ""
              
        getQuotes(Math.floor(Math.random() * 5277))
     })

  

toggleBtn.addEventListener("click", function(){
  
let toggle = body.style.background= "black"
  body.classList.toggle(toggle)
  
 
})