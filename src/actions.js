import { config } from "./config.js";
import axios from "axios";

export const addTask = async (description, contact) => {
    try {
        const response = await axios.post(config.url + `/task/add?description=${description}&contact=${contact}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    }
    catch (e) {
        return e
    }
}