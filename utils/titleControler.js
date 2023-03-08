var routeTitle = "",
    siteTitle = ""


function setTitle() {
    if (!routeTitle || !siteTitle) {
        document.title = "loading..."
    } else if (routeTitle && !siteTitle) {
        document.title = routeTitle
    } else if (!routeTitle && siteTitle) {
        document.title = siteTitle
    } else {
        document.title = `${routeTitle}-${siteTitle}`
    }
}
export default {
    routeTitle(title) {
        routeTitle = title
        setTitle()
    },
    siteTitle(title) {
        siteTitle = title
        setTitle()
    }
}