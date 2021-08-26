
let qTeams = {
    aaiec: 400,
    aaiwc: 60,
    qai: 200,
    poc: 100,
    gtm: 50,
    hr: 10
    };

var result = []; //Adding into array

for (var members in qTeams) {
    result.push([members, qTeams[members]]);
}

result.sort((a, b) => b[1] - a[1]); //Sorting in descending order

for (var team of result){
    console.log(`${team[0]}`)
}


