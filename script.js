window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let container = document.getElementById("container");

            // sort ascending based on number of hours in space
            json.sort(function(a, b) {
                if (a.hoursInSpace > b.hoursInSpace) {
                    return 1;
                } else if (b.hoursInSpace > a.hoursInSpace) {
                    return -1;
                } else {
                    return 0;
                }
            });
            container.innerHTML += `
                <h4>Number of Astronauts: ${json.length+1}</h4>
            `;

            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li style="color: ${json[i].active ? "green" : "red"}">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}" />
                    </div>
                `;

            }
        });
    });
});