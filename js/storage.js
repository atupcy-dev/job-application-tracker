const STORAGE_KEY = "jobApplications";

function getJobs() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveJobs(jobs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}