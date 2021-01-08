const TimesheetServices = require('../services/timesheet.services');
const { paginatorResult } = require('../lib/paginatorResult');
const timesheets = require('../routes/timesheet.routes');

const create = (req, res)=>{
    return TimesheetServices.create(req.body).then((result)=>{
        res.code(201).send(result) 
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const list = (req, res)=>{
    return TimesheetServices.list({ ...req.query }).then((result)=>{
        const timesheets = paginatorResult(result, 'timesheets');
        res.code(200).send(timesheets);
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const view = (req, res)=>{
    var test = req.params.timesheets_id
    return TimesheetServices.view(test).then((result)=>{
        res.code(200).send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const update = (req, res)=>{
    var test = req.params.timesheets_id;
    var attributes = req.body;
  
    return TimesheetServices.update(test,attributes).then((result)=>{
        res.code(200).send(result)
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}
const destroy = (req, res)=>{
    var TimesheetId = req.params.timesheets_id
    return TimesheetServices.destroy(TimesheetId).then((result)=>{
        res.code(200).send({message: "DELETED SUCCESSFULLY"})
    }).catch((error)=>{
        console.log('errror is', error);
        res.send(error)
    })
}

module.exports = {create,list,view,update,destroy}