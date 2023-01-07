import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-form-practice'
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: this.fb.control('',{
        // validators 綁驗證條件(不能為空)
        validators: [Validators.required]
      }),
      password: this.fb.control('', {
        // validators 綁驗證條件(不能為空, 最大長度20)
        validators: [Validators.required, Validators.maxLength(20)],
      })
     },
     {
      // 變更偵測條件
      //  "change" | "blur" | "submit"
      updateOn: 'change',
     }
  );
  }

  /**
   * 登入
   * @returns 無回傳值
   */
  onSubmit(): void {
    console.log(this.form.value)
    // 若表單驗證失敗，則不繼續執行
    if (this.form.invalid) {
      return alert("check your name and password again")
    }
    return alert(JSON.stringify(this.form.value));
  }
}
