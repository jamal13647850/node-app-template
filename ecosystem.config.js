module.exports = {
  apps: [{
    script: "server.js",
    watch: ["app", "public","resource"],
    // Delay between restart
    watch_delay: 1000,
    ignore_watch : ["node_modules", "public/uploads"],
    watch_options: {
      "followSymlinks": false
    }
  }]
}
