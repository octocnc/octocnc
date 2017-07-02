// @flow
import type {Action} from "types";
import { ActionType } from "enums";


export const requestDeviceConnections = (payload: any): Action => ({
    type: ActionType.REQUEST_DEVICE_CONNECTIONS,
    payload: payload
});

export const deviceConnectionInfo = (devices: any/*types.DeviceConnections*/) : Action => ({
    type: ActionType.DEVICE_CONNECTION_INFO,
    payload: devices
});

export const connectToDevice = (port: string, device: string, speed: string) : Action => ({
    type: ActionType.CONNECT_TO_DEVICE,
    payload: {
        port: port,
        device: device,
        speed: speed
    }
});

export const disconnectFromDevice = () : Action => ({
    type: ActionType.DISCONNECT_FROM_DEVICE,
    payload: null
});

export const deviceError = (info: any): Action => ({
    type: ActionType.DEVICE_ERROR,
    payload: info
});

export const ajaxError = (info: Error): Action => ({
    type: ActionType.AJAX_ERROR,
    payload: info
});

export const requestSystemCommands = (): Action => ({
    type: ActionType.REQUEST_SYSTEM_COMMANDS,
    payload: null
});

export const availableSystemCommands = (info: any): Action => ({
    type: ActionType.AVAILABLE_SYSTEM_COMMANDS,
    payload: info
});

export const executeCommand = (command: string): Action => ({
    type: ActionType.EXECUTE_COMMAND,
    payload: command
});
