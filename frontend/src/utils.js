export const parseRequestUrl = () => {
    const url = document.location.hash.toLocaleLowerCase();
    console.log("🚀 ~ parseRequestUrl ~ url:", url)
    const request = url.split("/");
    console.log("🚀 ~ parseRequestUrl ~ request:", request)
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};