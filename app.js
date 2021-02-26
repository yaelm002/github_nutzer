const ui = new Ui();
const github = new GitHub();
const eingabe = document.getElementById("text");
eingabe.addEventListener( "keyup",(e) =>{



    const text =e.target.value;

    if(text !== ""){
        github.getUser(text)
        .then(data => {

            if(data.profile.message === "Not Found"){
                    setTimeout(() => {
                        ui.zeigAlert(data.profile.message, "alert alert-danger");
                    }, 2000);
            }else{
                ui.zeigProfile(data.profile);
                ui.zeigRepos(data.repos);

            }
        })
    }
    else{

        ui.clearProfil();
       
    }

})