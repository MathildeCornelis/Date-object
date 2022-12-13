/*Exercice 1*/
    let divUsa = document.getElementById('usa')
    let divIceland = document.getElementById('iceland')
    let divRussia = document.getElementById('russia')
    let divBelgium = document.getElementById('belgium')
    // First, define the time zones of each city
    const timeAnchorage = 'America/Anchorage';
    const timeReykjavik = 'Atlantic/Reykjavik';
    const timeSaintPetersburg = 'Europe/Moscow';
    const timeBrussels = 'Europe/Brussels';

    // Next, create Date objects for each city, using their respective time zones
    const anchorageDate = new Date().toLocaleString('en-US', { timeZone: timeAnchorage });
    const reykjavikDate = new Date().toLocaleString('en-US', { timeZone: timeReykjavik });
    const saintPetersburgDate = new Date().toLocaleString('en-US', { timeZone: timeSaintPetersburg });
    const brusselsDate = new Date().toLocaleString('en-US', { timeZone: timeBrussels });

    // Finally, display the date and time for each city
    divUsa.innerHTML = `Anchorage: ${anchorageDate}`;
    divIceland.innerHTML = `Reykjavik: ${reykjavikDate}`;
    divRussia.innerHTML = `Saint-Petersburg: ${saintPetersburgDate}`;
    divBelgium.innerHTML = `Brussels: ${brusselsDate}`;

/*Exercise 2*/
    let divDay = document.getElementById('day')
    let naissance = new Date ('1999-02-26');
    let now = new Date();
    divDay.innerHTML = Math.round((now.getTime() - naissance.getTime()) / (1000 * 60 * 60 * 24)) + ' days have passed betweeen my born and today';
    
    let inputDiv = document.getElementById('date');
    inputDiv.addEventListener('keyup', showDifTime)
    function showDifTime(e) {
        if (e.key === "Enter") {
        let now = new Date();
        let x = new Date(inputDiv.value);
        console.log(x);
        document.getElementById('reponse').innerHTML = Math.round((now.getTime() - x.getTime()) / (1000 * 60 * 60 * 24)) + ' day' + (Math.round((now.getTime() - x.getTime()) / (1000 * 60 * 60 * 24)) > 1 ? "s" : "") + ' have passed since ' + inputDiv.value + '.';
        };
    };