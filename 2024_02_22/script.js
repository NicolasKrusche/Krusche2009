class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        if (gender !== 'm' && gender !== 'f') {
            alert("Gib das Geschlecht Korrekt an! m...Mänlich f....Weiblich");
        }

        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }

    groesseCM() {
        return this.groesseM * 100;
    }

    vorName() {
        return this.name.split(' ')[0];
    }

    nachName() {
        return this.name.split(' ')[1];
    }

    toString() {
        return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }

    getBmi() {
        return this.gewichtKG / (this.groesseM ** 2);
    }

    getGewichtType() {
        const bmi = this.getBmi();

        if ((this.gender === 'f' && bmi >= 19 && bmi <= 24) ||
            (this.gender === 'm' && bmi >= 20 && bmi <= 25)) {
                return 'Normal';
        } else if (bmi < 19) {
            return 'Underweighted';
        } else {
            return 'Overweighted';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("myForm").addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("form submitted");

        let username = document.getElementById("name").value;
        let usergender = document.getElementById("gender").value;
        let usergroesseM = document.getElementById("groesse").value;
        let usergewichtKG = document.getElementById("gewicht").value;
        var person = new Person(username, usergender, usergroesseM, usergewichtKG);
        var bmi = person.getBmi();
        var commentwert = person.getGewichtType();

        var circleContainer = document.getElementById("parent");
        console.log("circleContainer:", circleContainer);
        var mybody = document.getElementById("mybody");

        if (circleContainer) {  
            console.log("Setting visibility to visible");
            circleContainer.style.visibility = "visible";

        }

        document.getElementById('startingcomment').innerHTML = "Hey " + username + ", here is your data:";
        document.getElementById('comment').innerHTML = "You are:";
        document.getElementById('introBmi').innerHTML = "Your BMI is:"; console.log("bmiintro sent");
        document.getElementById('bmiWert').innerHTML = bmi.toFixed(2);
        document.getElementById('commentwert').innerHTML = commentwert;
    });
});