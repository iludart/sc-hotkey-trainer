var codeToKey = {
    "48": "0", "49": "1", "50": "2", "51": "3", "52": "4", "53": "5", "54": "6", 
    "55": "7", "56": "8", "57": "9", "81": "q", "87": "w", "69": "e", 
    "82": "r", "84": "t", "65": "a", "83": "s", "68": "d", "70": "f"
}

function getKey(code) {
    return codeToKey[code];
}

function getRandomIndex(max) {
    turn++;
    if (turn % 2) {
        return 0;
    } else {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

function processWrong() {
    if (last != "wrong") {
        input = "";
        wrong += 1;
        sequenceIndex = 0;
        last = "wrong";
        if (!wrongSpread[sequences[sequenceKey].text]) {
            wrongSpread[sequences[sequenceKey].text] = 0;
        }
    
        wrongSpread[sequences[sequenceKey].text] += 1;
        avg = getAvgTime();
    }
}

function processCorrect() {
    sequenceIndex += 1;
    last = "correct";
}

function getAvgTime() {
    return (((Date.now() - start) / (correct + wrong)) / 1000).toFixed(2);
}

function updateUI() {
    document.getElementById("sequence").innerText = sequences[sequenceKey].text;
    document.getElementById("input").innerText = input;
    document.getElementById("correct").innerText = correct + (last === "correct" ? " -" : "");
    document.getElementById("wrong").innerText = wrong + (last === "wrong" ? " -" : "");
    document.getElementById("avg").innerText = avg;
    document.getElementById("accuracy").innerText = ((correct / (correct + wrong)) * 100).toFixed(2);
    var wrongHTML = "";
    
    var sorted = [];
    for (var key in wrongSpread) {
        sorted.push({
            "text": key,
            "wrong": wrongSpread[key]
        });
    }

    sorted.sort(function(a, b) {
        return b.wrong - a.wrong;
    });

    for (var i = 0; i < sorted.length; i++) {
        wrongHTML += `<div>${sorted[i].text}: ${sorted[i].wrong}</div>`
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
var turn = 0;
var keyStrokeCount = 0;

var sequenceIndex = 0;
var sequenceKey = getRandomIndex(sequences.length);

updateUI();

document.getElementById("program").addEventListener("keydown", function (event) {

    keyStrokeCount += 1;

    var currentSequence = getCurrentSequence(sequenceKey);
    var currentModifier = getCurrentModifier(sequenceKey);
    var currentLength = currentSequence.length;
    if (sequenceIndex < currentLength) {
        if (currentModifier) {
            if (currentModifier === "CTRL") {
                if (event.ctrlKey && getKey(event.keyCode) === currentSequence[sequenceIndex]) {
                    input += currentSequence[sequenceIndex];
                    processCorrect();
                } else if (!event.ctrlKey) {
                    processWrong();
                } else if (getKey(event.keyCode) && getKey(event.keyCode) !== currentSequence[sequenceIndex]) {
                    processWrong()
                }
            } else if (currentModifier === "SHIFT") {
                if (getKey(event.keyCode) === currentSequence[sequenceIndex] && event.shiftKey) {
                    processCorrect();
                } else if (getKey(event.keyCode) !== currentSequence[sequenceIndex] && !event.shiftKey) {
                    processWrong();
                }
            }
        } else {
            var keyPressed = getKey(event.keyCode);
            if (keyPressed === currentSequence[sequenceIndex]) {
                processCorrect();
                input += getKey(event.keyCode);
            } else {
                processWrong();
            }
        }
    }
    
    if (sequenceIndex >= currentLength) {
        input = "";
        correct += 1;
        sequenceIndex = 0;
        sequenceKey = getRandomIndex(sequences.length);
        last = "correct";
        avg = getAvgTime();
    }

    updateUI();
});


