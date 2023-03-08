export default function (timestamp, showTime = false) {
    const date = new Date(+timestamp)
    const year = date.getFullYear().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    let str = `${ year}-${month}-${day}`
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, "0")
        const min = date.getMinutes().toString().padStart(2, "0")
        const sec = date.getSeconds().toString().padStart(2, "0")
        str += ` ${hour}:${min}:${sec}`
    }
    return str
}