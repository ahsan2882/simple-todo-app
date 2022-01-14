let todoItems = [
    {
        "title": "Todo Item 1",
        "urgency": "low",
        "starred": false,
        "status": "In Progress"
    },
    {
        "title": "Todo Item 2",
        "urgency": "high",
        "starred": true,
        "status": "Done"
    },
    {
        "title": "Todo Item 3",
        "urgency": "low",
        "starred": false,
        "status": "In Progress"
    },
    {
        "title": "Todo Item 4",
        "urgency": "medium",
        "starred": true,
        "status": "In Progress"
    },
    {
        "title": "Todo Item 5",
        "urgency": "high",
        "starred": false,
        "status": "Done"
    }
]
const sortArray = (array) => {
    let resArray = [];
    let inProg = array.filter(item => item.status === "In Progress");
    let starredInProg = inProg.filter(item => item.starred === true);
    starredInProg.filter(item => item.urgency === "high").forEach(element => {
        resArray.push(element)
    });
    starredInProg.filter(item => item.urgency === "medium").forEach(element => {
        resArray.push(element)
    });
    starredInProg.filter(item => item.urgency === "low").forEach(element => {
        resArray.push(element)
    });
    let unstarredInProg = inProg.filter(item => item.starred === false);
    unstarredInProg.filter(item => item.urgency === "high").forEach(element => {
        resArray.push(element)
    });
    unstarredInProg.filter(item => item.urgency === "medium").forEach(element => {
        resArray.push(element)
    });
    unstarredInProg.filter(item => item.urgency === "low").forEach(element => {
        resArray.push(element)
    });

    let compl = array.filter(item => item.status === "Done");
    let starredCompl = compl.filter(item => item.starred === true);
    starredCompl.filter(item => item.urgency === "high").forEach(element => {
        resArray.push(element)
    });
    starredCompl.filter(item => item.urgency === "medium").forEach(element => {
        resArray.push(element)
    });
    starredCompl.filter(item => item.urgency === "low").forEach(element => {
        resArray.push(element)
    });
    let unstarredCompl = compl.filter(item => item.starred === false);
    unstarredCompl.filter(item => item.urgency === "high").forEach(element => {
        resArray.push(element)
    });
    unstarredCompl.filter(item => item.urgency === "medium").forEach(element => {
        resArray.push(element)
    });
    unstarredCompl.filter(item => item.urgency === "low").forEach(element => {
        resArray.push(element)
    });
    return resArray;
}
export default todoItems;

export { sortArray };