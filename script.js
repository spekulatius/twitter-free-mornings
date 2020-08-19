
function eradicate() {
    function eradicateRetry() {
        const timeline = document.querySelector(`[aria-label="Timeline: Your Home Timeline"]`)
        // const follow = document.querySelector(`[aria-label="Who to follow"]`).parentNode
        // const trending = document.querySelector(`[aria-label="Timeline: Trending now"]`)
        const sidebar = document.querySelector(`[data-testid="sidebarColumn"]`)
        

        if (sidebar == null) {
            return
        } else {
            timeline.style.display = 'none'
            // follow.style.display = 'none'
            sidebar.style.display = 'none'
        }
    }
    setInterval(eradicateRetry, 1000)
}

const start = 8 * 60 + 0;
const end = 17 * 60 + 0;

function inTime() {
    const now = new Date();
    const time = now.getHours() * 60 + now.getMinutes();
    console.log('TIME', start, time, end)
    return time >= start && time < end;
    // return true
}

if (inTime()) {
    eradicate()
}
