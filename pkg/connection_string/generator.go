package connection_string

import (
	"fmt"
	"crypto/rand"
	"encoding/hex"
)

// GenerateConnectionString generates a unique connection string for a project.
func GenerateConnectionString(userID int, projectName string) (string, error) {
	// Generate a random token for additional uniqueness
	randomBytes := make([]byte, 8)
	_, err := rand.Read(randomBytes)
	if err != nil {
		return "", fmt.Errorf("failed to generate random token: %v", err)
	}
	token := hex.EncodeToString(randomBytes)

	// Format the connection string
	connectionString := fmt.Sprintf("nebula://user-%d/project-%s/%s", userID, projectName, token)

	return connectionString, nil
}
