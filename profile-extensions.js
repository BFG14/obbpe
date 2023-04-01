const input = prompt('Введите uuid профилей через запятую, без пробелов:');
const profiles = input.split(',');
console.log(profiles);
const input2 = prompt('Введите uuid расширений через запятую, без пробелов:');
const extensions = input2.split(',');
console.log(extensions);
const token = prompt('Enter token:');

const profileURL = 'https://app.octobrowser.net/api/v2/automation/profiles/';
const data = {
    extensions: extensions //Put UUIDs of Extensions here
};
for (i = 0; i < profiles.length; i++) { //Start of Cycle
    let config = {
        method: 'patch',
        url: `${profileURL}${profiles[i]}`,//the link to the profile will change as long as there are profiles in the profiles array.//
        headers: {
            'Content-Type': 'application/json',
            'X-Octo-Api-Token': `${token}` //Put your Token here
        },
        data: data
    };
    setTimeout(() => { axios(config) 
        .then(function (response) {
            console.log(response.data);
            document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + response.data + "\r\n";
        })
        .catch(function (error) {
            document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + error + "\r\n";
        });
    }, 2000);    

};
