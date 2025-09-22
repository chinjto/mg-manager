import { Injectable, signal, Signal } from '@angular/core';
import { GameServer, MINECRAFT_SERVER, PALWORLD_SERVER } from '../models/game-server';
import { OFFLINE_STATUS, WORKING_STATUS } from '../models/server-status';

@Injectable({
  providedIn: 'root'
})
export class GameServersService {

  private readonly servers_mock = [
    MINECRAFT_SERVER,
    PALWORLD_SERVER,
  ] as GameServer[];

  getAll(): Signal<GameServer[]> {
    return signal<GameServer[]>(this.servers_mock);
  }
  
}
