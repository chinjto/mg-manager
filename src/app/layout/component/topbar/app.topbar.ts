import { Component, computed, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from '../app.configurator';
import { LayoutService } from '../../service/layout.service';
import { StepperModule } from "primeng/stepper";
import { DividerModule } from "primeng/divider";
import { ServerStatusService } from '@/business/services/server-status.service';
import { ButtonModule } from "primeng/button";
import { Tag } from 'primeng/tag';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, Tag, StepperModule, DividerModule, ButtonModule],
    templateUrl: './app.topbar.html'
})
export class AppTopbar {

    items!: MenuItem[];

    layoutService = inject(LayoutService);

    serverStatusService = inject(ServerStatusService);
    currentServerStatus = this.serverStatusService.currentStatus;

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

}
