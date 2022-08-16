//TODO
//Script to communicate with pagers/server and update the pagers status accordingly

function updateStatus(status, pagerID, pagerStatusID) {
    switch (status) {
        case "idle":
            document.getElementById(pagerStatusID).innerHTML = "Idle";
            document.getElementById(pagerID).style.backgroundColor = "orange";
            console.log(pagerID + " status: " + status);
            break;
        case "error":
            document.getElementById(pagerStatusID).innerHTML = "Error";
            document.getElementById(pagerID).style.backgroundColor = "red";
            break;
        case "active":
            document.getElementById(pagerStatusID).innerHTML = "Active";
            document.getElementById(pagerID).style.backgroundColor = "limegreen";
            break;
    }
}