function renderJobs(jobs) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    jobs.forEach((job, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${job.company}</td>
        <td>${job.position}</td>
        <td>${job.date || "-"}</td>
        <td><span class="status ${job.status}">${job.status}</span></td>
        <td>${job.notes || "-"}</td>
        <td>
        <button class="delete" onclick="deleteJob(${index})">Delete</button>
        </td>
        `;

        jobList.appendChild(row);
    });
}