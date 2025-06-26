import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-automail-home',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './automail-home.component.html',
  standalone: true,
  styleUrl: './automail-home.component.scss'
})
export class AutomailHomeComponent {
  file: File | null = null;
  resume: File | null = null;
  isSending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event, type: 'file' | 'resume'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (type === 'file') {
        this.file = input.files[0];
      } else {
        this.resume = input.files[0];
      }
    }
  }

  sendEmails(): void {
    if (!this.file || !this.resume) {
      this.errorMessage = '⚠️ Both Excel and Resume must be uploaded.';
      this.successMessage = '';
      return;
    }

    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('Resume', this.resume);

    this.http.post('https://automail-gaou.onrender.com/api/email/send', formData, { responseType: 'text' })
      .subscribe({
        next: (res: string) => {
          if (res && res.trim().length > 0) {
            this.successMessage = `✅ ${res}`;
          } else {
            this.successMessage = '✅ Emails sent successfully!';
          }
          this.isSending = false;
        },
        error: (err) => {
          console.error(err);
          if (err.status === 0) {
            this.errorMessage = '⚠️ Could not connect to the server. Please check backend or network.';
          } else if (err.error) {
            this.errorMessage = `❌ ${err.error}`;
          } else {
            this.errorMessage = '❌ An unknown error occurred.';
          }
          this.isSending = false;
        }
      });
  }
}
