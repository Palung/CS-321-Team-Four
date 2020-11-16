/**
 * Anh Nguyen, Palung Chandra, Jason Villanueva
 * CS 321
 * Reminder object class to be called by the Taskify class to take in and store remiders by the user.
 */


class ReminderNode {
    /**
     * A reminder's constructor function.
     * @param {*} name the task's name
     * @param {*} dueDate the date a task is due
     * @param {*} priority the priority level of the task
     * @param {*} description the optional description of a task
     * @param {*} roles the set of roles that need to be aware of the task
     */
    constructor(name, dueDate, priority, description, roles) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.roles = roles;

        // makes a unique id 
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
        var retString = id + "\t\t" + name + "\t\t" + dueDate + "\t\t" + priority + "\t\t" + description + "\t\t" + roles;
        return retString;
    }



}

const low = ReminderNode(-1, 0);
const medium = ReminderNode(-1, 1);
const high = ReminderNode(-1, 2);

var taskList = [low, medium, high];

/**
 * Adds a unique task to the taskList based on user input,
 * (i.e. name; dueDate; priority; description).
 * @param {*} name the name of the task
 * @param {*} dueDate the date the task is due.  Note that this is a "date" object, not some int
 * @param {*} priority the priority level of the task (low, medium, or high)
 * @param {*} description anything the user wants to note down that's not the name, dueDate, or priority level
 * @param {*} roles the set of roles that need to be aware of the task
 */
function addTask(name, dueDate, priority, description, roles) {
    var newReminder = new ReminderNode(name, dueDate, priority, description, roles);
    var current = taskList[priority];
    var alreadyExists = false;

    while (current != null) {

        // if the task attempting to be added is already in the tasklist
        if (current.id === newReminder.id) {
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
 * Removes a task based on user input (the task's id) and 
 * prints out that it was removed.  If it's not found, then
 * print out a statement saying it couldn't be found.
 * @param {*} id the unique identifier of the task to be removed.
 */
function removeTask(id) {
    var removed = false;
    var rmNode = undefined;

    for (var z = 0; z < taskList.length; z++) {
        // prev starts at the head, since the head is 
        // always empty, it will never be the reminder 
        // we're searching for
        var prev = taskList[priority];

        if (prev.next != null && !removed) {
            var current = prev.next;

            while (current != null) {

                // if we found the remider we're looking for, remove it:
                if (current.id === id) {
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
        retString = retString.concat("--------------------------------------------\n");
    }

    generalChannel.channel.send(retString);
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

    generalChannel.channel.send(retString);
    return retString;
}

/**
 * prints out all tasks due ON the dueDate.
 * @param {} dueDate the date the user wants to look up
 */
function listTasksDue(dueDate) { // < - Date
    var retString = "All tasks that are due on" + dueDate + ": ";
    var originalRetString = "All tasks that are due on" + dueDate + ": ";

    for (var x = 0; x < taskList.length; x++) {
        var current = taskList[x];

        while (current.next != null) {
            current = current.next;
            if (current.dueDate.getTime() === dueDate.getTime())
                retString = retString.concat(current.remind() + "\n");
        }
        retString = retString.concat("--------------------------------------------");
    }

    if (retString === originalRetString) {
        retStirng = "There are no tasks due on" + dueDate;
    }

    generalChannel.channel.send(retString);
    return retString;
}

/**
 * prints all tasks between the first date and the second date.
 * 
 * @param {} firstDate
 * @param {} secondDate
 */
function listTasksDue(firstDate, secondDate) { // < - Dates
    var retString = "All tasks that are due between " + firstDate + " and " + secondDate + ":";
    var originalRetString = "All tasks that are due between " + firstDate + " and " + secondDate + ":";

    for (var x = 0; x < taskList.length; x++) {
        var current = taskList[x];

        while (current.next != null) {
            current = current.next;
            if (current.dueDate.getTime() >= firstDate.getTime() && current.dueDate.getTime() <= secondDate.getTime())
                retString = retString.concat(current.remind() + "\n");
        }
        retString = retString.concat("--------------------------------------------");
    }

    if (retString === originalRetString) {
        retStirng = "There are no tasks due between: " + firstDate + " and " + secondDate;
    }

    generalChannel.channel.send(retString);
    return retString;
}
