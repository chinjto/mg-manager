import { GameServer } from '@/business/models/game-server';
import { OFFLINE_STATUS, ONLINE_STATUS, WORKING_STATUS } from '@/business/models/server-status';
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SkeletonModule } from "primeng/skeleton";

@Component({
  standalone: true,
  selector: 'app-server-card',
  imports: [CommonModule, SkeletonModule],
  templateUrl: './card-server.html'
})
export class CardServer {

  readonly ONLINE_STATUS = ONLINE_STATUS;
  readonly WORKING_STATUS = WORKING_STATUS;
  readonly OFFLINE_STATUS = OFFLINE_STATUS;
  readonly server = input<GameServer>();
  
  get statusColor() {
      if (!this.server()) {
          return "blue";
      }
      if (!this.server()?.status) {
          return "purple";
      }
      switch(this.server()?.status) {
          case ONLINE_STATUS: return "green";
          case WORKING_STATUS: return "yellow";
          case OFFLINE_STATUS: return "red";
          default: return "purple";
      }
  }

}
