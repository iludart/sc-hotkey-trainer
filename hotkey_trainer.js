var sequences = [
    {
        "sequence": "1"
    },
    {
        "sequence": "2"
    },
    {
        "sequence": "3"
    },
    {
        "sequence": "4"
    },
    {
        "sequence": "5"
    },
    {
        "sequence": "6"
    },
    {
        "sequence": "1r2r3r4r5r"
    },
    {
        "sequence": "12345"
    },
    {
        "sequence": "678"
    },
    {
        "sequence": "q"
    },
    {
        "sequence": "w"
    },
    {
        "sequence": "e"
    },
    {
        "sequence": "r"
    },
    {
        "sequence": "t"
    },
    {
        "sequence": "a"
    },
    {
        "sequence": "s"
    },
    {
        "sequence": "d"
    },
    {
        "sequence": "f"
    },
    {
        "sequence": "5t"
    }, 
    {
        "sequence": "5t4t"
    }, 
    {
        "sequence": "3t"
    },  
    {
        "sequence": "3w"
    }, 
    {
        "sequence": "66eee"
    }, 
    {
        "sequence": "66www"
    }, 
    {
        "sequence": "66sss"
    }, 
    {
        "sequence": "66ddd"
    }, 
    {
        "sequence": "6e7e8e"
    }, 
    {
        "sequence": "6w7w8w"
    }, 
    {
        "sequence": "6d7d8d"
    }, 
    {
        "sequence": "6s7s8s"
    },
    {
        "sequence": "1",
        "modifier": "CTRL"
    },
    {
        "sequence": "2",
        "modifier": "CTRL"
    },
    {
        "sequence": "3",
        "modifier": "CTRL"
    },
    {
        "sequence": "4",
        "modifier": "CTRL"
    },
    {
        "sequence": "5",
        "modifier": "CTRL"
    },
    {
        "sequence": "6",
        "modifier": "CTRL"
    },
    {
        "sequence": "7",
        "modifier": "CTRL"
    },
    {
        "sequence": "8",
        "modifier": "CTRL"
    },
    {
        "sequence": "9",
        "modifier": "CTRL"
    },
    {
        "sequence": "0",
        "modifier": "CTRL"
    },
    {
        "sequence": "1",
        "modifier": "SHIFT"
    },
    {
        "sequence": "2",
        "modifier": "SHIFT"
    },
    {
        "sequence": "3",
        "modifier": "SHIFT"
    },
    {
        "sequence": "4",
        "modifier": "SHIFT"
    },
    {
        "sequence": "5",
        "modifier": "SHIFT"
    }
]

var codeToKey = {
    "48": "0",
    "49": "1",
    "50": "2",
    "51": "3",
    "52": "4",
    "53": "5",
    "54": "6",
    "55": "7",
    "56": "8",
    "57": "9",
    "81": "q",
    "87": "w",
    "69": "e",
    "82": "r",
    "84": "t",
    "65": "a",
    "83": "s",
    "68": "d",
    "70": "f",
}

function getKey(code) {
    return codeToKey[code];
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function processWrong() {
    input = "";
    wrong += 1;
    sequenceIndex = 0;
    last = "wrong";
    if (!wrongSpread[sequences[sequenceKey].sequence]) {
        wrongSpread[sequences[sequenceKey].sequence] = 0;
    }

    wrongSpread[sequences[sequenceKey].sequence] += 1;
    avg = getAvgTime();
}

function processCorrect() {
    sequenceIndex += 1;
    last = "correct";
}

function getAvgTime() {
    return (((Date.now() - start) / (correct + wrong)) / 1000).toFixed(2);
}

function updateUI() {
    var modifier = getCurrentModifier(sequenceKey) ? getCurrentModifier(sequenceKey) + " + " : "";
    document.getElementById("sequence").innerText = modifier + sequences[sequenceKey].sequence;
    document.getElementById("input").innerText = input;
    document.getElementById("correct").innerText = correct + (last === "correct" ? " -" : "");
    document.getElementById("wrong").innerText = wrong + (last === "wrong" ? " -" : "");
    document.getElementById("avg").innerText = avg;
    document.getElementById("accuracy").innerText = ((correct / (correct + wrong)) * 100).toFixed(2);
    var wrongHTML = "";
    
    var sorted = [];
    for (var key in wrongSpread) {
        sorted.push({
            "sequence": key,
            "wrong": wrongSpread[key]
        });
    }

    sorted.sort(function(a, b) {
        return b.wrong - a.wrong;
    });

    for (var i = 0; i < sorted.length; i++) {
        wrongHTML += `<div>${sorted[i].sequence}: ${sorted[i].wrong}</div>`
    }

    $("#spread").html(wrongHTML);
}

function getCurrentSequence(index) {
    return sequences[index].sequence;
}

function getCurrentModifier(index) {
    return sequences[index].modifier;
}

var correct = 0;
var wrong = 0;
var wrongSpread = {};
var start = Date.now();
var avg = 0;
var input = "";
var last = "";

var sequenceIndex = 0;
var sequenceKey = getRandomIndex(sequences.length);

updateUI();

document.getElementById("program").addEventListener("keydown", function (event) {
    var currentSequence = getCurrentSequence(sequenceKey);
    var currentModifier = getCurrentModifier(sequenceKey);
    if (sequenceIndex < currentSequence.length) {
        if (currentModifier) {
            if (currentModifier === "CTRL") {
                if (getKey(event.keyCode) === currentSequence[sequenceIndex] && event.ctrlKey) {
                    processCorrect();
                } else if (getKey(event.keyCode) !== currentSequence[sequenceIndex] && !event.ctrlKey) {
                    processWrong();
                }
            } else if (currentModifier === "SHIFT") {
                if (getKey(event.keyCode) === currentSequence[sequenceIndex] && event.shiftKey) {
                    processCorrect();
                } else if (getKey(event.keyCode) !== currentSequence[sequenceIndex] && !event.shiftKey) {
                    processWrong();
                }
            }
        } else {
            if (getKey(event.keyCode) == currentSequence[sequenceIndex]) {
                input += getKey(event.keyCode);
                processCorrect();
            } else if (last !== "wrong") {
                processWrong();
            }
        }
    }
    
    if (sequenceIndex >= currentSequence.length) {
        input = "";
        correct += 1;
        sequenceIndex = 0;
        sequenceKey = getRandomIndex(sequences.length);
        last = "correct";
        avg = getAvgTime();
    }

    updateUI();
});


