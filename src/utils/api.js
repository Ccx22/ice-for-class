import instance from "./request.js"

export function getQuery(params) {
    return instance({
        url: "/xx/xx",
        method: "get",
        params
    })
}