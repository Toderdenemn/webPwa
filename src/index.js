if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registration!");
        console.log(ragistration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}