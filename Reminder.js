/**
 * Anh Nguyen, Palung Chandra, Jason Villanueva
 * CS 321
 * Main class for Taskify that will use functions from other classes.
 */





class ReminderNode {
    /**
     * 
     * @param {*} name the task's name
     * @param {*} dueDate the date a task is due
     * @param {*} priority the priority level of the task
     * @param {*} description the optional description of a task
     * 
     */
    constructor(name, dueDate, priority, description) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;

        id = function() {
            var hash = 0;
            for (var x = 0; x < this.length; x++) {
                var character = this.charCodeAt(x);
                hash = ((has << 5) - hash) + character;
                hash = hash & hash;
            }
            return hash;
        }

        this.next = null;
    }


    /**
     * Converts a task to a string and returns it.
     */
    remind() {
        var retString = id + "\t\t" + name + "\t\t" + dueDate + "\t\t" + priority + "\t\t" + desscription;
        return retString;
    }

}

const low = ReminderNode(-1, 0);
const medium = ReminderNode(-1, 1);
const high = ReminderNode(-1, 2);

var taskList = [low, medium, high];

/**
 * TAKE A LOOK AT USER INPUTS, how are users entering the date?  how is this function recieving the date?
 * 
 * Adds a unique task to the taskList based on user input,
 * (i.e. name; dueDate; priority; description).
 * @param {*} name the name of the task
 * @param {*} dueDate the date the task is due.  Note that this is a "date" object, not some int
 * @param {*} priority the priority level of the task (low, medium, or high)
 * @param {*} desscription anything the user wants to note down that's not the name, dueDate, or priority level
 */
function addTask(name, dueDate, priority, desscription) {
    var newReminder = new ReminderNode(name, dueDate, priority, desscription);
    var current = taskList[priority];
    var alreadyExists = false;

    while (current != null) {

        // if the task attempting to be added is already in the tasklist
        if (current.id == newReminder.id) {
            alreadyExists = true;
            break;
        }
        // if there is a free spot in the tasklist; then 
        else if (current.next == null) {
            break;
        }
        // otherwise go to the next node
        else
            current = current.next;
    }

    if (!alreadyExists) {
        current.next = (newReminder);
        generalChannel.channel.send("This task already exists!");
    }
    generalChannel.channel.send(name + " has been added.");
}


/**
 * STILL NEED TO UTILIZE PRINT STATEMENTS (look up how to do that with Discord Bots)
 * 
 * 
 * Removes a task based on user input (the task's id) and 
 * prints out that it was removed.  If it's not found, then
 * print out a statement saying it couldn't be found.
 * @param {*} id the unique identifier of the task to be removed.
 */
function removeTask(id) {
    var removed = false;
    var rmNode = undefined;
    /**
     * iterate through each taskList's list of nodes at each positon
     *   for(z -> taskList.length){
     *     if(!removed) // if the current item is not found
     *       search taskList[z]
     *         if(id = current.id)
     *           remove it; removed = true;
     *   }
     * 
     *   if(!removed)
     *    print a message saying that it's not found
     *   else
     *    print a message saying it was removed
     */

    for (var z = 0; z < taskList.length; z++) {
        // prev starts at the head, since the head is 
        // always empty, it will never be the reminder 
        // we're searching for
        var prev = taskList[priority];

        if (prev.next != null && !removed) {
            var current = prev.next;

            while (current != null) {

                // if we found the remider we're looking for, remove it:
                if (current.id = id) {
                    prev.next = current.next;
                    rmNode = current;
                    removed = true;
                    break;
                } else
                    current = current.next;

            }
        }
    }

    // print out that we've removed the task.  Include the var: rmNode in the print statement
    if (removed) {
        generalChannel.channel.send(rmNode.name + " has been added.");
        return;
    }
    // print out a message saying that the desired item never existed in the first place
    else {
        generalChannel.channel.send("Could not find the task with the id of: " + id);
        return;
    }

}


/**
 * prints out all tasks in a tabular format
 */
function listTasks() {
    var retString = "";

    for (var x = 0; x < taskList.length; x++) {
        var current = taskList[x];

        while (current.next != null) {
            current = current.next;
            retString = retString.concat(current.remind() + "\n");
        }
        retString = retString.concat("--------------------------------------------");
    }

    return retString;
}

/**
 * prints out all tasks in a tabular format with the same priority level as the one given
 * @param {*} priorityLevel 
 */
function listTasksPriority(priorityLevel) { // <-  int
    var retString = "";
    var current = taskList[prioritylevel];

    while (current.next != null) {
        current = current.next;
        retString = retString.concat(current.remind() + "\n");
    }

    // figure out how to print the string via discord bot
    return retString;
}

/**
 * prints out all tasks due ON the dueDate
 * @param {} dueDate the date the user wants to look up
 */
function listTasksDue(dueDate) { // < - Date
    var retString = "All tasks that are due on" + dueDate + ": ";

    for (var x = 0; x < taskList.length; x++) {
        var current = taskList[x];

        while (current.next != null) {
            current = current.next;
            if (current.dueDate.getTime() == dueDate.getTime())
                retString = retString.concat(current.remind() + "\n");
        }
        retString = retString.concat("--------------------------------------------");
    }

    if (retString == "All tasks that are due on" + dueDate + ": ") {
        retStirng = "There are no tasks due on" + dueDate;
    }

    return retString;
}

/**
 * prints all tasks between the first date and the second date
 * 
 * @param {} firstDate
 * @param {} secondDate
 */
function listTasksDue(firstDate, secondDate) { // < - Dates

}