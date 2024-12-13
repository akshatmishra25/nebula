package projects

import (
    "encoding/json"
    "net/http"
    "nebula.local/internal/auth"
)

type AddProjectRequest struct {
    Name        string `json:"name"`
    Description string `json:"description"`
    Frontend    string `json:"frontend"`
}

func AddProjectHandler(w http.ResponseWriter, r *http.Request) {
    user, err := auth.GetAuthenticatedUser(r)
    if err != nil {
        http.Error(w, "Unauthorized", http.StatusUnauthorized)
        return
    }

    var req AddProjectRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }

    project, err := AddProject(user.ID, req.Name, req.Description, req.Frontend)
    if err != nil {
        http.Error(w, "Failed to add project", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(project)
}

func GetProjectsHandler(w http.ResponseWriter, r *http.Request) {
    user, err := auth.GetAuthenticatedUser(r)
    if err != nil {
        http.Error(w, "Unauthorized", http.StatusUnauthorized)
        return
    }

    projects, err := GetProjectsByUser(user.ID)
    if err != nil {
        http.Error(w, "Failed to fetch projects", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(projects)
}
