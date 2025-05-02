const ProjectManager = (() => {
    //internal variables
    const projects = [];
    let currentProjectID = null;

    //return public methods
    return {
        addProject: (project) => {
            projects.push(project);
        },
        getProjects: () => {
            return JSON.parse(JSON.stringify(projects));
        },
        setCurrentProjectID: (id) => {
            currentProjectID = id;
        },
        getCurrentProjectID: () => {
            return currentProjectID;
        },
        getProjectByID: (id) => {
            if (!id) {
                console.error("No ID provided to fetch project.");
                return null;
            }
            return projects.find((project) => project.id === id);
        },
    };
})();

export default ProjectManager;