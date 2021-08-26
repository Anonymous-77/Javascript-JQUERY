const paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;
const sentences = paragraph.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")

let counter = 1;

for (var sent of sentences){
    if (sent.split(' ').length > 3){ //Task 1: splits all sentences to count number of words and filter more than 3 words
        var masked_sent = `${counter}. ${sent.replace(/[6-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(masked_sent);
        counter++;
    }
}