import { OFFLINE_STATUS, ONLINE_STATUS, ServerStatus } from "./server-status";

export interface GameServer {
    id: number;
    name: string;
    status: ServerStatus;
    durationSinceReboot: string;
}

export const MINECRAFT_SERVER = { id: 1, name: "minecraft", status: ONLINE_STATUS, durationSinceReboot: "5 minutes" } as GameServer;
export const PALWORLD_SERVER = { id: 2, name: "palworld", status: OFFLINE_STATUS, durationSinceReboot: "5 hours and 2 minutes" } as GameServer;
