const mulheres = document.querySelector('.maravilhosas__box');


fetch('http://localhost:5001/maravilhosas')

.then((response) =>{
    return response.json();

})
.then((data) =>{
    console.log(data)
    data.content.forEach(divas =>{
        console.log(divas)

        const card = document.createElement("div");
        card.setAttribute("class", "maravilhosas__perfil");
        mulheres.appendChild(card);
          
       const link = document.createElement('a')
       link.setAttribute('href', '#');
       card.appendChild(link);
      
        const img = document.createElement('img');
        img.setAttribute("class", 'img-responsive');

        if (divas.metadata && divas.metadata.image){
            img.setAttribute('src', divas.metadata.image.url);            
        } else {
            img.setAttribute('src', './img/img-mulher.png');
        }

        link.appendChild(img);      
        
       
        const nome = document.createElement("p");
        nome.textContent = divas.title;
        link.appendChild(nome); 




    
        // const img = document.createElement('img');
        // img.setAttribute("src", divas.metadata.image.url);
        // card.appendChild(img);     
  
          
         

            })
           
        })
   

.catch((erro) =>{
    console.log(erro)
})
