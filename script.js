
function eradicate() {
    function eradicateRetry() {
        const div = document.querySelector(`[aria-label="Timeline: Your Home Timeline"]`)

        if (div == null) {
            return
        } else {
            div.style.display = 'none'
        }
    }
    setInterval(eradicateRetry, 1000)
}

const start = 8 * 60 + 30;
const end = 17 * 60 + 0;

function inTime() {
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    // return time >= start && time < end;
    return true
}

if (inTime()) {
    eradicate()
}
