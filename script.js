// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(json){
        json1 = json.sort(function(a, b){return b.hoursInSpace-a.hoursInSpace});
        console.log(json)
        const container = document.getElementById("container")
        let color = "red"
        container.innerHTML = `Total Number of Astronauts: ${json.length}`
        for (let i = 0; i < json.length; i++) {            
           if (json[i].active === true) {
               color = "green";
           }
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li style="color:${color}">Active: ${json[i].active}</li>
                            <li>Skills:  ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
            `

        }



      })
    })
  })
