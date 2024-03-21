import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  length = 0
  includeSymbols = false
  includeNumbers = false
  includeLetters = false
  password = ''

  // onChangeLength(value: string){
  //   const parsedValue = parseInt(value)

  //   if(!isNaN(parsedValue)){
  //     this.length = parsedValue
  //   }
  // }

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }

  onButtonClick(){
    const numbers = '1234567890'
    const letters = 'abdefghijklmnopqrstuvwz'
    const symbols = '!£$%&=@#()'

    let validChars = ''

    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }

    let generetedPassword = ''

    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generetedPassword += validChars[index]
    }
    this.password = generetedPassword
    
  }
}
