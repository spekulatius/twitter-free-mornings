
function isAlreadyInjected() {
    return document.querySelector('#nfe-container') != null
}

function injectUI(container) {
    const nfeContainer = document.createElement('div')
    nfeContainer.id = 'nfe-container'
    container.appendChild(nfeContainer)

    const textNode = document.createTextNode('heyyyy')
    nfeContainer.appendChild(textNode)

    nfeContainer.style.color = 'red'
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
            sidebar.style.display = 'none'
        }

        const container = timeline.parentNode

        // Add container with timer and copy
        if (container && !isAlreadyInjected()) {
            injectUI(container)
            
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
