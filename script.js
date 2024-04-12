let smileys = ['😀', '😃', '😄', '😁', '😆'];

function copySmiley(event) {
    let button = event.target;
    let = emoji = button.textContent.replace('copy', '');

    navigator.clipboard.writeText(emoji).then(function() {
        console.log('Copying to clipboard was successful!');
    }
    , function(err) {
        console.error('Could not copy text: ', err);
    });
}
