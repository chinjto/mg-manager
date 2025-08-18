import { Severity } from "./severity";

export interface ServerStatus {
    name: "online" | "working" | "offline";
    severity: Severity;
}

export const ONLINE_STATUS = { name: "online", severity: "success" } as ServerStatus;
export const WORKING_STATUS = { name: "working", severity: "warn" } as ServerStatus;
export const OFFLINE_STATUS = { name: "offline", severity: "danger" } as ServerStatus;
