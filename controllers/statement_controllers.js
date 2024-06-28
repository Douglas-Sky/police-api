import { request } from "express";
import { StatementModel } from "../models/statement_model.js";



// function to store data in the database
export const addStatement = async (req, res) => {
    try {
        console.log('request', req.body)
        const addData = await StatementModel.create(req.body)
        res.status(200).send(addData);

    } catch (error) {
        console.log(error)
    }
};

// function to get statement
export const getStatement = async (req, res) => {
    try {
        console.log('request', res.body)
        const addData = await StatementModel.create(req.body)
        res.status(200).send(addData);
    } catch (error) {
    }
}

// function to patch statment
export const updateStatement = async (req, res) => {
    try {
        console.log("request", status);
        const status = req.body.caseStatus
        const addData = await StatementModel.findByIdAndUpdate(req.params.id, { caseStatus });
        res.status(200).send(addData);
    } catch (error) {
    }
}

// find by Id
export const findbyId = async (req, res) => {
    try {
        console.log("request", status)
        const findbyId = await StatementModel.find()
        res.status(200).find(getData);
    } catch (error) {
        console.log (error)
    }
}

// statment to delete
// export const deleteStatement = async (req. res) => {
//     try {
//         const deleteData 
//     } catch (error) {
        
//     }
// }












// export const getStatement = async (req, res)
