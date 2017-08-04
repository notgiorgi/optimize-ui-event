module.exports = function optimizeEvent(type, obj = window) {
    let running = false

    obj.addEventListener(type, () => {
        if (running) return
        running = true
        requestAnimationFrame(() => {
            obj.dispatchEvent(new CustomEvent(`optimized-${type}`))
            running = false
        })
    })
}
