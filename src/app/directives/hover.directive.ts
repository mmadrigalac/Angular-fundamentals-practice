import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[botHover]',
})
export class HoverDirective {
  @Input() color: string = 'yellow';

  constructor(private el: ElementRef, private render: Renderer2) {}

  private highlight(color: string | null) {
    if (color)
      this.render.setStyle(
        this.el.nativeElement,
        'border',
        `2px,solid,${color}`
      );
    else this.render.setStyle(this.el.nativeElement, 'border', 'none');
  }

  @HostListener('mouseover') mouseOver() {
    this.highlight(this.color);
  }
  @HostListener('mouseleave') mouseLeave() {
    this.highlight(null);
  }
}
