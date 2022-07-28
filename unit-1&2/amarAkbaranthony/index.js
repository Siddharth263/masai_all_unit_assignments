document.querySelector("#shareSkill").addEventListener("click", myFunction)

function myFunction(){
    let amar = {
        name: "Amar",
        skill: 'singer',
        sharSkill: function(skill) {
            let output = (`${skill} can now temporarily be used by ${this.name}`);
            return output;
        }
    }
    
    let akbar = {
        name: "Akbar",
        skill: "chef",
        sharSkill: function(skill) {
            let output = (`${skill} can now temporarily be used by ${this.name}`);
            return output;
        }
    }
    
    let anthony = {
        name: "Anthony",
        skill: "magician",
        sharSkill: function(skill) {
            let output = (`${skill} can now temporarily be used by ${this.name}`);
            return output;
        }
    }
    
    let h3a = document.createElement("h3");
    let h3b = document.createElement("h3");
    let h3c = document.createElement("h3");
    
    h3a.innerText = amar.sharSkill.call(anthony,"Singer Skill");
    h3b.innerText = akbar.sharSkill.call(amar,"Chef Skill");
    h3c.innerText = anthony.sharSkill.call(akbar,"Magician Skill");
    document.querySelector("body").append(h3a,h3b,h3c);
}
