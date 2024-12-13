package projects

import (
	"fmt"
	"nebula.local/internal/models"
	"nebula.local/internal/utils"
	"nebula.local/pkg/connection_string"
)

func AddProject(userID int, name, description, frontend string) (models.Project, error) {
	// Generate a unique connection string
	connection, err := connection_string.GenerateConnectionString(userID, name)
	if err != nil {
		return models.Project{}, fmt.Errorf("error generating connection string: %v", err)
	}

	// Insert the project into the database
	query := `INSERT INTO projects (user_id, name, description, frontend, connection)
              VALUES ($1, $2, $3, $4, $5) RETURNING id`

	var projectID int
	err = utils.DB.QueryRow(query, userID, name, description, frontend, connection).Scan(&projectID)
	if err != nil {
		return models.Project{}, err
	}

	// Return the new project
	return models.Project{
		ID:          projectID,
		UserID:      userID,
		Name:        name,
		Description: description,
		Frontend:    frontend,
		Connection:  connection,
	}, nil
}


func GetProjectsByUser(userID int) ([]models.Project, error) {
    query := `SELECT id, user_id, name, description, frontend, connection FROM projects WHERE user_id = $1`

    rows, err := utils.DB.Query(query, userID)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    projects := []models.Project{}
    for rows.Next() {
        var project models.Project
        err := rows.Scan(&project.ID, &project.UserID, &project.Name, &project.Description, &project.Frontend, &project.Connection)
        if err != nil {
            return nil, err
        }
        projects = append(projects, project)
    }
    return projects, nil
}
