let condition = true;

const smileys = ['😀', '😃', '😄', '😁', '😆'];

function copySmiley(event) {
    let button = event.target;
    let emoji = button.textContent.replace('copy',);

    navigator.clipboard.writeText(emoji).then(function() {
    });
}

if (condition) {
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < smileys.length; i++) {
            let p = document.createElement('p');
            
            p.textContent = smileys[i];
            
            document.querySelector('#smileyContainer').appendChild(p);
        }
    }
} else {
    console.log("Condition not met");
}