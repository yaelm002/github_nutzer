class Ui {
    constructor(){
      this.profile = document.getElementById("profile");

    }

    zeigProfile(user){
      this.profile.innerHTML = `
        <div class ="card card-body mb-3">
          <div class ="row">
           <div class = "col-md-3 "></div>
              <img class = "img-fluid mb-2" src = "${user.avatar_url}">
              <a href = "${user.html_url}" target = "_blank" class= "btn btn-primary btn-block mb-3"> sehe Profile </a>
          </div>
          <div class = "col-md-9 ">
              <span class = "badge badge-primary mb-1"> public Repos : ${user.public_repos}</span>
          
              <span class = "badge badge-secondary mb-1"> public Gists : ${user.public_gists}</span>
          
              <span class = "badge badge-success mb-1"> public Followers : ${user.followers}</span>
          
              <span class = "badge badge-info mb-1"> public Following : ${user.following}</span>
         
          <br>

            <ul class = "list-group">
                <li class= "list-group-item"> Company : ${user.company}</li>
                <li class= "list-group-item"> Blog : ${user.blog}</li>
                <li class= "list-group-item"> Location : ${user.location}</li>
                <li class= "list-group-item"> Member Since : ${user.created_at}</li>
            
            </ul>
            </div>
          </div>
        </div>
        <div class = "container">
          <h3 class= "page-heading mb-3" > Letzte Repos</h3>
            <div id= "repos">
            </div>
        </div>
      `;
    }


    zeigRepos(repos){

      var ausgabe = "";
      
      repos.forEach(repo => {
        
        ausgabe += `
            <h4 class = "lead"> ${repo.name}</h4>
        `
      });
      console.log(ausgabe);
      const reposList = document.getElementById("repos");
      reposList.innerHTML = ausgabe;

    }


    clearProfil(){
      this.profile.innerHTML= "";
  
    }


  zeigAlert(message, classname){

    // loesch
      this.loeschAlert();
      const alert = document.createElement("div");
      alert.appendChild(document.createTextNode(message));
      alert.classList= classname;

      const search = document.querySelector(".searchContainer");
      const ref = document.querySelector(".search");
      search.insertBefore(alert,ref);

      setTimeout(() => {
        this.loeschAlert()
      }, 2000);
      
  }

  loeschAlert(){

    const loesch = document.querySelector(".alert");

    if(loesch){
        loesch.remove();
    }else{

    }
  }



}