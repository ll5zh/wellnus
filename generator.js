'use strict';

const activity = [
"Go on a nature walk!",
"Do some yoga!",
"Bake some cookies!",
"Cook your favourite dish!",
"Call a friend or family member!",
"Play/Watch your favourite sport!",
"Watch your favourite movie/TV show!",
"Listen to your favourite song/playlist!",
"Eat your favourite food!",
"Read your favourite book!",
"Make a smoothie!",
"Paint a picture!",
"Print out a colouring page!",
"Ride a bike!",
"Do a quick 15-30 minute workout!",
"Play your favourite game!",
"Meditate - even just for 5 minutes!"
]

const motivation = [
"Believe you can and you're halfway there! (Theodore Roosevelt)",
"It doesn't matter how slow you go as long as you don't stop. (Confucius)",
"Try to be a rainbow in someone else's cloud. (Maya Angelou)",
"It always seems impossible until it is done. (Nelsa Mandela)",
"You are enough just as you are. (Meghan Markle)",
"Doing the best at this moment puts you in the best place for the next moment. (Oprah Winfrey)",
"It is never too late to be what you might have been. (George Eliot)",
"Stay close to anything that makes you glad you are alive. (Hafez)",
"Keep your sunny side up, keep yourself beautiful, and indulge yourself. (Betseu Johnson)",
"No one can make you feel inferior without your consent. (Eleanor Roosevelt)",
"Everything will be okay in the end. If it's not okay, it's not the end. (John Lennon)",
"May the flowers remind us why the rain was so necessary. (Xan Oku)",
"If it's making you nervous, you're doing it right! (Childish Gambino)",
"You're braver than you believe, stronger than you seem, and smarter than you think. (A.A. Milne)",
"Tough times never last, but tough people do. (Robert H. Schuller)",
"Act as if what you do makes a difference. It does. (William James)",
"I know not all that may be coming, but be it what it will, I'll go to it laughing. (Herman Melville)"
]

const word = [
"Breathe",
"Believe",
"Inspire",
"Smile",
"Love",
"Laugh",
"Grow",
"Dream",
"Empower",
"Mindful",
"Fearless",
"Hope",
"Peace",
"Overcome",
"Enjoy",
"Compassion",
"Conquer"
]


function random_element(elements) 
{
    return elements[Math.floor(Math.random() * elements.length)]

}


console.log(random_element(word))