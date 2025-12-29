document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("jobApplications")) {
        saveJobs(sampleJobs);
    }

    renderJobs(getJobs());
});

document.getElementById("jobForm").addEventListener("submit", e=> {
    e.preventDefault();

    const jobs = getJobs();

    const job = {
        company: document.getElementById("company").value,
        position: document.getElementById("position").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value,
        notes: document.getElementById("notes").value
    };

    jobs.push(job);
    saveJobs(jobs);
    renderJobs(jobs);
    e.target.reset();
});

document.getElementById("filterStatus").addEventListener("change", e => {
    const value = e.target.value;
    const jobs = getJobs();

    if (value === "All") {
        renderJobs(jobs);
    } else {
        renderJobs(jobs.filter(job => job.status === value));
    }
});

function deleteJob(index) {
    const jobs = getJobs();
    jobs.splice(index, 1);
    saveJobs(jobs);
    renderJobs(jobs);
}