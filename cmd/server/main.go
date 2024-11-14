// cmd/server/main.go
package main

import (
    "log"
    "net/http"
    "nebula.local/config"
    "nebula.local/internal/auth"
    "nebula.local/internal/utils"
)

func main() {
    cfg := config.LoadConfig()
    utils.ConnectDB(cfg)

    http.HandleFunc("/api/register", func(w http.ResponseWriter, r *http.Request) {
        auth.RegisterHandler(w, r, cfg)
    })
    http.HandleFunc("/api/login", func(w http.ResponseWriter, r *http.Request) {
        auth.LoginHandler(w, r, cfg)
    })

    log.Println("Server started on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
