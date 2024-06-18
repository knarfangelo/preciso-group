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
    this.consultantsVideoRef.nativeElement.currentTime = 0;
    this.expressVideoRef.nativeElement.currentTime = 0;
    this.industryVideoRef.nativeElement.currentTime = 0;
    this.consultantsVideoRef.nativeElement.playbackRate = 1;
    this.expressVideoRef.nativeElement.playbackRate = 1;
    this.industryVideoRef.nativeElement.playbackRate = 1;
    this.consultantsVideoRef.nativeElement.pause();
    this.expressVideoRef.nativeElement.pause();
    this.industryVideoRef.nativeElement.pause();
  }
}
