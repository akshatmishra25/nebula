// internal/auth/handlers.go
package auth

import (
    "encoding/json"
    "net/http"
    "nebula.local/internal/models"
    "nebula.local/internal/utils"
    "nebula.local/config"
)

func RegisterHandler(w http.ResponseWriter, r *http.Request, cfg config.Config) {
    var user models.User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid request", http.StatusBadRequest)
        return
    }

    hashedPassword, err := utils.HashPassword(user.Password)
    if err != nil {
        http.Error(w, "Error hashing password", http.StatusInternalServerError)
        return
    }
    user.Password = hashedPassword

    // Save user to DB (assuming a CreateUser function is defined in utils)
    // Implement your database user insertion logic here
}

func LoginHandler(w http.ResponseWriter, r *http.Request, cfg config.Config) {
    var loginReq struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }
    if err := json.NewDecoder(r.Body).Decode(&loginReq); err != nil {
        http.Error(w, "Invalid request", http.StatusBadRequest)
        return
    }

    // Fetch user from DB by email (assuming GetUserByEmail is defined in utils)
    // Verify the password, generate JWT and send response here
}
