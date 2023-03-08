export default function (handler, duration = 300) {
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            handler(...args)
        }, duration);
    }
}