//TODO
//Script to communicate with pagers/server and update the pagers status accordingly

pagerIPs = {
    "pager1" : ["0.0.0.0"],
    "pager2" : ["0.0.0.0"],
    "pager3" : ["0.0.0.0"],
    "pager4" : ["0.0.0.0"],
}

global.updateStatus = function(status, pagerID, pagerStatusID) {
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

function deviceTrigger(pagerID, status) {
    switch (pagerID) {
        case "pager1":
            break;
    }
    switch (status) {
        case "idle":
            break;
        case "error":
            break;
        case "active":
            break;
    }
}