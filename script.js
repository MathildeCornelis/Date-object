/*Exercice 1*/
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
    console.log(`Anchorage: ${anchorageDate}`);
    console.log(`Reykjavik: ${reykjavikDate}`);
    console.log(`Saint-Petersburg: ${saintPetersburgDate}`);
    console.log(`Brussels: ${brusselsDate}`);

/*Exercise 2*/
let naissance = new Date ('1999-02-26');
let now = new Date();
console.log(Math.round((now.getTime() - naissance.getTime()) / (1000 * 60 * 60 * 24)) + ' days have passed betweeen my born and today');