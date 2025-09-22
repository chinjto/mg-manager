import { Component, computed, inject, input, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { IconRounded } from "../../tiles/icons/icon-rounded/icon-rounded";
import { NotificationsService } from '@/business/services/notifications';
import { Period } from '@/business/models/period';

@Component({
    standalone: true,
    selector: 'widget-notifications',
    imports: [ButtonModule, MenuModule, IconRounded],
    templateUrl: "./widget-notifications.html"
})
export class WidgetNotifications {

    readonly page = input.required<number>();

    readonly notificationsService = inject(NotificationsService);

    readonly notifications: Signal<Period[]> = computed(() => this.notificationsService.getPage(this.page())());

}
