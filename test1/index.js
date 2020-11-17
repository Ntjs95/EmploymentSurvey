
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "The Workplace",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "positivity",
                    title: "In a workplace, it is important to...",
                    choices: [
                        "be positive", "be negative", "be rude", "be late", "be right"
                    ],
                    correctAnswer: "be positive"
                },
                {
                    type: "radiogroup",
                    name: "mindset",
                    title: "What kind of mindset do you have at work?",
                    choicesOrder: "random",
                    choices: [
                        "I'm Positive", "I'm always right", "I'm never wrong", "I'm the best"
                    ],
                    correctAnswer: "I'm Positive"
                }
            ]
        }, 
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "whatido",
                    title: "Complete the sentence: I always...",
                    choicesOrder: "random",
                    choices: [
                        "try my best", "am right", "am the smartest in the room", "know more than my manager"
                    ],
                    correctAnswer: "try my best"
                },
                {
                    type: "radiogroup",
                    name: "inever",
                    title: "Complete the sentence: I never...",
                    choicesOrder: "random",
                    choices: [
                        "do my best", "get to work on time", "work with others", "give up when faced with a problem"
                    ],
                    correctAnswer: "give up when faced with a problem"
                }
            ]
        }, 
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "ilate",
                    title: "How many minutes late is acceptable?",
                    choicesOrder: "random",
                    choices: [
                        "0 minutes", "5 minutes", "15 minutes", "30 minutes"
                    ],
                    correctAnswer: "0 minutes"
                },
                {
                    type: "radiogroup",
                    name: "iwillleave",
                    title: "What time will you leave after your shift?",
                    choicesOrder: "random",
                    choices: [
                        "on time", "I will stay late", "I will leave early", "I always stay late"
                    ],
                    correctAnswer: "on time"
                }
            ]
        }, 
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "ihaveprob",
                    title: "If you get stuck what should you do first?",
                    choicesOrder: "random",
                    choices: [
                        "Ask a co-worker", "Copy code from anywhere I can find it", "Leave and clear my head", "Take an early lunch"
                    ],
                    correctAnswer: "Ask a co-worker"
                },
                {
                    type: "radiogroup",
                    name: "lunchtime",
                    title: "Complete the sentence: I will take my lunch...",
                    choicesOrder: "random",
                    choices: [
                        "on time", "when I'm hungry", "when my manager is not looking", "actually, I don't eat"
                    ],
                    correctAnswer: "on time"
                }
            ]
        }, 
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "safety",
                    title: "Complete the sentence: I will take workplace safety...",
                    choicesOrder: "random",
                    choices: [
                        "seriously", "as a joke", "nothing bad happens in an office", "I never get hurt"
                    ],
                    correctAnswer: "seriously"
                },
                {
                    type: "radiogroup",
                    name: "locklaptop",
                    title: "Complete the sentence: When I get up from the desk I will...",
                    choicesOrder: "random",
                    choices: [
                        "lock my computer", "just walk away", "ask co-worker to watch my desk", "try to leave without anyone noticing"
                    ],
                    correctAnswer: "lock my computer"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });