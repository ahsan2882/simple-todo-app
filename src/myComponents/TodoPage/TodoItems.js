let todoItems = [
    {
        "title": "Todo Item 1",
        "starred": false,
        "status": "In Progress",
        "dateAdded": 16421312104265
    },
    {
        "title": "Todo Item 2",
        "starred": true,
        "status": "Done",
        "dateAdded": 16421315104265
    },
    {
        "title": "Todo Item 3",
        "starred": false,
        "status": "In Progress",
        "dateAdded": 16321312104265
    },
    {
        "title": "Todo Item 4",
        "starred": true,
        "status": "In Progress",
        "dateAdded": 16421387104265
    },
    {
        "title": "Todo Item 5",
        "starred": false,
        "status": "Done",
        "dateAdded": 16421312112345
    }
]
const sortArray = (array) => {
    let resArray = [];
    let inProg = array.filter(item => item.status === "In Progress");
    inProg.filter(item => item.starred === true).sort(function (a,b) {
        if (a.dateAdded > b.dateAdded) {
            return 1;
        } else if (a.dateAdded < b.dateAdded) {
            return -1;
        }
        return 0;
    }).forEach(element => {
        resArray.push(element)
    });
    inProg.filter(item => item.starred === false).sort(function (a, b) {
        if (a.dateAdded > b.dateAdded) {
            return 1;
        } else if (a.dateAdded < b.dateAdded) {
            return -1;
        }
        return 0;
    }).forEach(element => {
        resArray.push(element)
    });

    let compl = array.filter(item => item.status === "Done");
    compl.filter(item => item.starred === true).sort(function (a, b) {
        if (a.dateAdded > b.dateAdded) {
            return 1;
        } else if (a.dateAdded < b.dateAdded) {
            return -1;
        }
        return 0;
    }).forEach(element => {
        resArray.push(element)
    });
    compl.filter(item => item.starred === false).sort(function (a, b) {
        if (a.dateAdded > b.dateAdded) {
            return 1;
        } else if (a.dateAdded < b.dateAdded) {
            return -1;
        }
        return 0;
    }).forEach(element => {
        resArray.push(element)
    });
    return resArray;
}
export default todoItems;

export { sortArray };