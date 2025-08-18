import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        <span class="text-primary font-bold">SAKAI</span> by <span class="text-primary font-bold">Chinjto</span>
        <a href="https://github.com/chinjto" target="_blank" rel="noopener noreferrer" class="hover:underline">
            <i class="pi pi-github"></i>
        </a>
    </div>`
})
export class AppFooter {}
