const CONFIG = {
    valentineName: "Wania",

    pageTitle: "❤️💖💗💓💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        gift: {
            text: "But first, a gift for you",
            poem: "You are sweeter than all the small things I adore, \n Prettier than moments I saved before. \n My eyes never learned love anywhere else, \n They only knew poetry when they found you themselves. \n I’ve seen stars try hard to light up the night, \n I’ve seen the moon show off all its light, \n But when you smile and step into view, \n Even the moon forgets what it’s meant to do.",
            continueBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AWWWWW you love me that much??",
        high: "To infinity and beyond!",
        normal: "And beyond! 🥰"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Thank you baby, I'm the luckiest person in the world!",
        message: "Everytime I think of you, I'm reminded of how lucky I am that our paths crossed. I'm so happy that I get to celebrate another Valentine's Day with you, and the memories that we've made this past year. You've become such a natural part of my life, and I can't image my life without you. You bring me light, depth, and meaning into everything. I love what we share now, and I love knowing that we still have so much time ahead of us to discover. I hope Allah keeps us together, filling our hearts with nothing but peace and love for each other, Inshallah. There is no one else that I would ever want to walk this life with. I love you, always and forever, my Wania ❤️",
        emojis: "🎁💖🤗💝💋❤️💕",
        floatingTexts: [
            "I love how you laugh",
            "You make me believe in myself",
            "I love how we laugh together at the silliest things",
            "With you, I feel at home",
            "Just looking at you makes me feel happy",
            "I treasure every moment we spend together",
            "You love me in a way I never thought possible",
            "You make my life softer and kinder",
            "I love listening to you",
            "You're my greatest gift"
        ]
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#FF52A2",
        backgroundEnd: "#F31559",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

   

};

window.VALENTINE_CONFIG = CONFIG;
