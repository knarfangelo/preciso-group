import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
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

}
