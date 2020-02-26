var codeToKey = {
    "48": "0", "49": "1", "50": "2", "51": "3", "52": "4", "53": "5", "54": "6", 
    "55": "7", "56": "8", "57": "9", "81": "q", "87": "w", "69": "e", 
    "82": "r", "84": "t", "65": "a", "83": "s", "68": "d", "70": "f"
}

function getKey(code) {
    return codeToKey[code];
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function processWrong() {
    if (last != "wrong") {
        input = "";
        sequenceIndex = 0;
        last = "wrong";
        streak = 0;
    }
}

function processCorrect() {
    sequenceIndex += 1;
    last = "correct";
}

function updateUI() {
    document.getElementById("sequence").innerText = sequences[sequenceKey].text;
    document.getElementById("input").innerText = input;
    document.getElementById("streak").innerText = streak;
    document.getElementById("strokes").innerText = keyStrokeCount;
    document.getElementById("apm").innerText = getAPM();
}

function getCurrentSequence(index) {
    return sequences[index].sequence;
}

function getCurrentModifier(index) {
    return sequences[index].modifier;
}

function getAPM() {
    var timespan = (Date.now() - start) / 1000;
    var apm = (60 / timespan) * keyStrokeCount;
    return apm.toFixed();
}

var correct = 0;
var start = Date.now();
var input = "";
var last = "";
var keyStrokeCount = 0;
var streak = 0;
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
        streak += 1;
    }

    updateUI();
});


