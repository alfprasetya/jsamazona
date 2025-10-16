export const parseRequestUrl = () => {
    const url = document.location.hash.toLocaleLowerCase();
    console.log("🚀 ~ parseRequestUrl ~ url:", url);
    const request = url.split("/");
    console.log("🚀 ~ parseRequestUrl ~ request:", request);
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};
    
export const rerender = async (component) => {
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render();
};