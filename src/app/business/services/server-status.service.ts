import { Injectable, signal } from '@angular/core';
import { OFFLINE_STATUS, ONLINE_STATUS, ServerStatus, WORKING_STATUS } from '../models/server-status';

const DEFAULT_STATUS = ONLINE_STATUS;

@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {
  
  currentStatus = signal<ServerStatus>(DEFAULT_STATUS);

  start() {
    // TODO to implement w/ MC API call
    this.currentStatus.set(WORKING_STATUS);
    setTimeout(() => {
      this.currentStatus.set(ONLINE_STATUS);
    }, 1000);
  }

  stop() {
    // TODO to implement w/ MC API call
    this.currentStatus.set(WORKING_STATUS);
    setTimeout(() => {
      this.currentStatus.set(OFFLINE_STATUS);
    }, 200);
  }

  switch() {
    if (this.currentStatus() === ONLINE_STATUS) {
      this.stop();
    } else {
      this.start();
    }
  }

}
