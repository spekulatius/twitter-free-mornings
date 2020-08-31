
function isAlreadyInjected() {
    return document.querySelector('#timer-container') != null
}

function injectUI(timelineParent) {

    prevContainer = document.querySelector('#timer-container')

    if (prevContainer != null) {
        prevContainer.remove()
    }

    const container = document.createElement('div')
    container.id = 'timer-container'
    timelineParent.appendChild(container)

    const header = document.createElement('p')
    const headerText = document.createTextNode('Don\'t you have something better to do? 🤔')
    header.appendChild(headerText)
    container.appendChild(header)

    const timer = document.createElement('p')
    const timerString = getTimerString()
    const timerText = document.createTextNode(timerString)
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

function replaceTimeline() {
    function replaceTimelineRetry() {
        const timeline = document.querySelector(`[aria-label="Timeline: Your Home Timeline"]`)        
        // If the site has loaded, remove the timeline and sidebar
        if (timeline == null) {
            return
        } else {
            timeline.style.display = 'none'
        }
        const timelineParent = timeline.parentNode

        // Add container with timer and copy
        // if (timelineParent && !isAlreadyInjected()) {
        injectUI(timelineParent)
        // } else if (isAlreadyInjected()) {
            // TODO: update timer
        // }
    }
    setInterval(replaceTimelineRetry, 1000)
}

function removeSidebar() {
    function removeSidebarRetry() {
        const sidebar = document.querySelector(`[data-testid="sidebarColumn"]`)
        if (sidebar == null) {
            return
        } else {
            sidebar.style.display = 'none'
            // sidebar.remove()
        }

    }
    setInterval(removeSidebarRetry, 1000)
}

// If between 8am and 5pm
const start = 8 * 60 + 0;
const end = 17 * 60 + 0;

function inTime() {
    // TODO there's probably something wrong with time zones here
    const now = new Date();
    const time = now.getHours() * 60 + now.getMinutes();
    console.log('TIME', start, time, end)
    return time >= start && time < end;
    // return true
}

function getTimerString() {

    const countDownDate = new Date("Sep 5, 2020 15:37:25").getTime();

    const now = new Date().getTime()

    const distance = countDownDate - now


    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return formatNumber(hours) + ':' + formatNumber(minutes) + ':' + formatNumber(seconds)



}

function formatNumber(num) {
    const s = num + ''
    if (s.length == 0) return '00'
    if (s.length == 1) return '0' + s
    return s
}

removeSidebar()

if (inTime()) {
    replaceTimeline()
}


