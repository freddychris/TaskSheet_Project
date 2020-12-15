const TimesheetServices = require('../services/timesheet.services')

const create = (req, res)=>{
    return TimesheetServices.create(req.body).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const list = (req, res)=>{
    return TimesheetServices.list().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const view = (req, res)=>{
    var test = req.params.timesheets_id
    return TimesheetServices.view(test).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const update = (req, res)=>{
    var test = req.params.timesheets_id;
    var attributes = req.body;
  
    return TimesheetServices.update(test,attributes).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const destroy = (req, res)=>{
    var TimesheetId = req.params.timesheets_id
    return TimesheetServices.destroy(TimesheetId).then((result)=>{
        res.send({message: "DELETED SUCCESSFULLY"})
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}

module.exports = {create,list,view,update,destroy}