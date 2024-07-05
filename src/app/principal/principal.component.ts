import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  @ViewChild('consultantsVideo') consultantsVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('expressVideo') expressVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('industryVideo') industryVideoRef!: ElementRef<HTMLVideoElement>;
  
  @ViewChild('consultantsPreview') consultantsPreviewRef!: ElementRef<HTMLImageElement>;
  @ViewChild('expressPreview') expressPreviewRef!: ElementRef<HTMLImageElement>;
  @ViewChild('industryPreview') industryPreviewRef!: ElementRef<HTMLImageElement>;

  private previewTimeout: any;

  startPreview(video: HTMLVideoElement) {
    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play();
  }

  stopPreview() {
    if (this.previewTimeout) {
      clearTimeout(this.previewTimeout);
    }
    this.resetVideo(this.consultantsVideoRef.nativeElement);
    this.resetVideo(this.expressVideoRef.nativeElement);
    this.resetVideo(this.industryVideoRef.nativeElement);
  }

  private resetVideo(video: HTMLVideoElement) {
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
  }

  hidePlaceholder(image: HTMLImageElement) {
    image.style.display = 'none';
  }
}
