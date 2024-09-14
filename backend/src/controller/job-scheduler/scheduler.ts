import { Request, Response } from "express";
import schedule from 'node-schedule';



export async function ScheduleAPI(req: Request, res: Response) {
    try {

        // create code to console when the api called with scheduled time run at 10 second after current time
        const date = new Date();
        const date2 = new Date();
        date.setSeconds(date.getSeconds() + 10);
        schedule.scheduleJob(date, function () {
            console.log('This job was supposed to run at ' + date2 + ' but actually ran at ' + date);
        });

        res.status(200).send("Scheduled API called");



    } catch {

    }

}