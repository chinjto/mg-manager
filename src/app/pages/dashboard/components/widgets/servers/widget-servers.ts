import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from "primeng/skeleton";
import { GameServersService } from '@/business/services/game-servers';
import { OFFLINE_STATUS, ONLINE_STATUS, ServerStatus, WORKING_STATUS } from '@/business/models/server-status';
import { CardServer } from "../../cards/server/card-server";

@Component({
    standalone: true,
    selector: 'widget-servers',
    imports: [CommonModule, SkeletonModule, CardServer],
    templateUrl: `./widget-servers.html`
})
export class WidgetServers {

    readonly rowLimit = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 2 : 1;
    readonly servers = inject(GameServersService).getAll();
    readonly emptiesQuantity = computed(() => 4 - (this.servers().length % 4));
    readonly empties = computed(() => Array(this.emptiesQuantity() % this.rowLimit));

    getStatusColor(status: ServerStatus) {
        if (!status) {
            return "purple";
        }
        switch(status) {
            case ONLINE_STATUS: return "green";
            case WORKING_STATUS: return "yellow";
            case OFFLINE_STATUS: return "red";
            default: return "purple";
        }
    }

}
