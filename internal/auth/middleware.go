package auth

import (
	"errors"
	"net/http"
	"strings"

	"nebula.local/internal/models"
	"nebula.local/internal/utils"
)

// Mock function to get a user from the database using the user ID
// Replace this with actual DB retrieval logic
func getUserByID(userID int) (*models.User, error) {
	query := `SELECT id, name, email FROM users WHERE id = $1`
	row := utils.DB.QueryRow(query, userID)

	var user models.User
	err := row.Scan(&user.ID, &user.Name, &user.Email)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

// Parse the JWT token and get the user ID
func parseToken(token string) (int, error) {
	// Replace this with your actual JWT validation logic
	claims, err := utils.ValidateJWT(token)
	if err != nil {
		return 0, err
	}

	userID, ok := claims["user_id"].(float64) // Assuming the user ID is stored as a float
	if !ok {
		return 0, errors.New("invalid token")
	}

	return int(userID), nil
}

// GetAuthenticatedUser extracts the authenticated user from the request
func GetAuthenticatedUser(r *http.Request) (*models.User, error) {
	authHeader := r.Header.Get("Authorization")
	if authHeader == "" {
		return nil, errors.New("authorization header missing")
	}

	// Extract the token from the header
	parts := strings.Split(authHeader, " ")
	if len(parts) != 2 || parts[0] != "Bearer" {
		return nil, errors.New("invalid authorization header format")
	}

	token := parts[1]
	userID, err := parseToken(token)
	if err != nil {
		return nil, err
	}

	// Retrieve the user from the database
	user, err := getUserByID(userID)
	if err != nil {
		return nil, err
	}

	return user, nil
}
