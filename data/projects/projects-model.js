const db = require('../dbconfig');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProjects,
    addResources,
    addTasks
}

function getProjects () {
    return db.select('*').from('projects')
}

function getResources () {
    return db.select('*').from('resources')
}

function getTasks (id) {
    return db.select('tasks.*', 'projects.project_name', 'projects.project_description')
    .from('tasks')
    .join('projects', function() {
        this.on('projects.id', '=', 'tasks.project_id')
    })
    .where({ 'project.id': id })
}

function addProjects (res) {
    return db.insert(res).into('projects')
}

function addResources (res) {
    return db.insert(res).into('resources')
}

function addTasks (id, task) {
    return db.insert(task).into('tasks').where({ 'project_id': id })
}