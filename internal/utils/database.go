// internal/utils/database.go
package utils

import (
    "database/sql"
    "fmt"
    "log"
    "nebula.local/config"
    _ "github.com/lib/pq"
)

var DB *sql.DB

func ConnectDB(cfg config.Config) {
    var psqlInfo string

    // Use DBUrl if provided, otherwise, construct it manually
    if cfg.DBURL != "" {
        psqlInfo = cfg.DBURL
    } else {
        psqlInfo = fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable",
            cfg.DBHost, cfg.DBUser, cfg.DBPassword, cfg.DBName)
    }

    var err error
    DB, err = sql.Open("postgres", psqlInfo)
    if err != nil {
        log.Fatalf("Failed to connect to database: %v", err)
    }

    if err = DB.Ping(); err != nil {
        log.Fatalf("Failed to ping database: %v", err)
    }

    log.Println("Database connected successfully!")
}
