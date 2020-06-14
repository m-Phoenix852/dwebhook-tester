/**
 * @author Phoenix852
 * @description A simple tool to test your discord webhooks.
 */
const superagent = require(`superagent`);
const io = require(`console-read-write`);

main();

async function main(){
    console.log("Webhook URL: ");
    let url = await io.read();

    console.log("Message: ");
    let content = await io.read();

    console.log("Author (Optional, leave blank for default): ");
    let author = await io.read();

    console.log("Avatar URL (Optional, leave blank for default): ");
    let avatar = await io.read();


    superagent.post(url)
    .send({content: content, username: author, avatar_url: avatar})
    .type('form')
    .then((res) => {
        console.log("Sent successfully!");
    }, (err) => {
        console.error(err);
    })
}