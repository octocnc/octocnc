// @flow
import type {Action} from "types";
import { ActionType } from "enums";


// --- Device
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

export const deviceConnected = () : Action => ({
    type: ActionType.CONNECTED
});

export const disconnectFromDevice = () : Action => ({
    type: ActionType.DISCONNECT_FROM_DEVICE,
    payload: null
});

export const deviceDisconnected = () : Action => ({
    type: ActionType.DISCONNECTED
});

export const deviceError = (info: any): Action => ({
    type: ActionType.DEVICE_ERROR,
    payload: info
});

export const getDeviceState = (): Action => ({
    type: ActionType.GET_DEVICE_STATE,
    payload: null
});


export const deviceState = (data): Action => ({
    type: ActionType.DEVICE_STATE,
    payload: data
});


// ---- error

export const ajaxError = (info: Error): Action => ({
    type: ActionType.AJAX_ERROR,
    payload: info
});

export const notImplemented = (action): Action => ({
    type: ActionType.NOT_IMPLEMENTED,
    payload: action
});

// ---- commands

export const requestSystemCommands = (): Action => ({
    type: ActionType.REQUEST_SYSTEM_COMMANDS
});

export const availableSystemCommands = (info: any): Action => ({
    type: ActionType.AVAILABLE_SYSTEM_COMMANDS,
    payload: info
});

export const sendCommand = (command: string): Action => ({
    type: ActionType.SEND_COMMAND,
    payload: command
});

export const getCommandHistory = (device: string): Action => ({
    type: ActionType.GET_COMMAND_HISTORY,
    payload: device
});

export const commandHistoryData = (history: any): Action => ({
    type: ActionType.COMMAND_HISTORY_DATA,
    payload: history
});

// --------- Authentication

export const authLogin = (username, password) => ({
   type: ActionType.AUTH_LOGIN,
   username: username,
   password: password
});

export const authLogout = () => ({
   type: ActionType.AUTH_LOGOUT
});

export const authSuccess = (response) => ({
    type: ActionType.AUTH_SUCCESS,
    payload: response.response
});

export const authFailure = (error) => ({
    type: ActionType.AUTH_FAILURE,
    payload: error
});

export const authCheck = () => ({
    type: ActionType.AUTH_CHECK,
    payload: null
});


// --------- Commands

export const linearMove = (x, y, z, f) => ({
    type: ActionType.LINEAR_MOVE,
    payload: {
        x: x,
        y: y,
        z : z,
        f: f
    }
});

export const setPositioning = (p) => ({
    type: ActionType.SET_POSITIONING,
    payload: p
});


export const setAbsolute = () => ({
    type:ActionType.SET_ABSOLUTE_POSITIONING,
    payload:null
});

export const setRelative = () => ({
    type: ActionType.SET_RELATIVE_POSITIONING,
    payload: null
});

export const setUnits = (u) => ({
   type: ActionType.SET_UNITS,
   payload: u
});

export const setMetric = () => ({
    type: ActionType.SET_METRIC,
    payload: null
});

export const setANSI = () => ({
    type: ActionType.SET_ANSI,
    payload: null
});

export const homeMachine = () => ({
    type: ActionType.HOME_MACHINE,
    payload: null
});

// --------- file operations

export const getFileList = () => ({
    type: ActionType.GET_FILE_LIST,
    payload: null
});

export const fileList = (list) => ({
    type: ActionType.FILE_LIST,
    payload: list
});

export const uploadFile = (name, file) => ({
   type: ActionType.UPLOAD_FILE,
   payload: {
       name: name,
       file: file
   }
});

export const uploadProgress = (percentage) => ({
   type: ActionType.UPLOAD_PROGRESS,
   payload: percentage
});

export const uploadComplete = () => ({
    type: ActionType.UPLOAD_COMPLETE,
    payload: null
});
