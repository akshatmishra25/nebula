// internal/utils/jwt.go
package utils

import (
    "time"
    "github.com/golang-jwt/jwt"
)

func GenerateJWT(userID int, secret string) (string, error) {
    claims := jwt.MapClaims{}
    claims["user_id"] = userID
    claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString([]byte(secret))
}
