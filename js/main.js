const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operations]')
const allClearButton =document.querySelector('[data-all-clear]')
const deleteButtton =document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const prevOperandTextElement = document.querySelector('[data-previous-operand]')
const currOperandTextElement = document.querySelector('[data-current-operand]')


class Calculator{
    constructor(prevOperandTextElement,currOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.currOperandTextElement =currOperandTextElement    
        this.clear()

    }
    

   clear(){
    this.currOperand = ''
    this.prevOperand = ''
    this.operation = undefined
   }

   delete(){

   }

   appendNumber(number){
    if(number === '.' && this.currOperand.includes('.')) return
    this.currOperand = this.currOperand.toString() + number.toString()
   }
   chooseOperation(operations){

   }

   compute(){

   }

   updateDisplay(){
    this.currOperandTextElement.innerText = this.currOperand
   }
}

const calc = new Calculator(prevOperandTextElement, currOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
    })
})