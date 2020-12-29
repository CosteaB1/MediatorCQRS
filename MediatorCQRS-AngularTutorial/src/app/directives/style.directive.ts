import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color = 'blue';
    @Input() dStyle: { border?: string, fontWeight?: string, borderRadius?: string };
    @HostBinding('style.color') elColor = null;

    constructor(private el: ElementRef, private r: Renderer2) {
        // el.nativeElement.style.color = 'red';
    }

    @HostListener('click', ['$event.target']) onClick(event: Event): void {
        console.log(event);
    }

    @HostListener('mouseenter') onEnter(): void {
        this.elColor = this.color;
        // this.r.setStyle(this.el.nativeElement, 'color', this.color);
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight);
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius);
        // this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    }
    @HostListener('mouseleave') onLeave(): void {
        this.elColor = null;
        // this.r.setStyle(this.el.nativeElement, 'color', null);
        // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
        // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
        // this.r.setStyle(this.el.nativeElement, 'border', null);

    }
}
