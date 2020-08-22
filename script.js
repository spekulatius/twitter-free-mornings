
function isAlreadyInjected() {
    return document.querySelector('#timer-container') != null
}

function injectUI(timelineParent) {
    const container = document.createElement('div')
    container.id = 'timer-container'
    timelineParent.appendChild(container)

    const header = document.createElement('p')
    const headerText = document.createTextNode('Don\'t you have something better to do? 🤔')
    header.appendChild(headerText)
    container.appendChild(header)

    const timer = document.createElement('p')
    const timerText = document.createTextNode('00:00:00')
    timer.appendChild(timerText)
    container.appendChild(timer)

    const footer = document.createElement('p')
    const footerText = document.createTextNode('until you can scroll your life away again')
    footer.appendChild(footerText)
    container.appendChild(footer)

    container.style.color = 'white'
    container.style.textAlign = 'center'
    container.style.fontFamily = 'monospace'
    container.style.paddingTop = '20px'
    container.style.fontSize = '20px'
    container.style.lineHeight = '40px'
}

function eradicate() {
    function eradicateRetry() {
        const timeline = document.querySelector(`[aria-label="Timeline: Your Home Timeline"]`)
        const sidebar = document.querySelector(`[data-testid="sidebarColumn"]`)
        
        // If the site has loaded, remove the timeline and sidebar
        if (timeline == null) {
            return
        } else {
            timeline.style.display = 'none'
            if (sidebar != null) {
                sidebar.style.display = 'none'
            }
        }

        const timelineParent = timeline.parentNode

        // Add container with timer and copy
        if (timelineParent && !isAlreadyInjected()) {
            injectUI(timelineParent)
        } else if (isAlreadyInjected()) {
            // TODO: update timer
        }
    }
    setInterval(eradicateRetry, 1000)
}

// If between 8am and 5pm
const start = 8 * 60 + 0;
const end = 17 * 60 + 0;

function inTime() {
    const now = new Date();
    const time = now.getHours() * 60 + now.getMinutes();
    console.log('TIME', start, time, end)
    // return time >= start && time < end;
    return true
}

if (inTime()) {
    eradicate()
}
