import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit{
postForm!: FormGroup;

  constructor (
    private readonly store: Store,
    public dialogRef: MatDialogRef<AddPostComponent>,

    ) {}

  ngOnInit(): void {
    this.initPostForm();
  }

  submitPostForm(): void {
    if (this.postForm.invalid) {
      return;
    }

    this.dialogRef.close();
  }

  initPostForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
  }

}
