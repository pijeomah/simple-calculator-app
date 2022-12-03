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
    this.currOperand = this.currOperand.toString().slice(0, -1)
   }

   appendNumber(number){
    if(number === '.' && this.currOperand.includes('.')) return
    this.currOperand = this.currOperand.toString() + number.toString()
   }
   chooseOperation(operation){
    if(this.currOperand === "") return
    if(this.prevOperand !== ""){
        calc.compute()
        calc.updateDisplay()    
        
    }
    this.operation = operation 
    this.prevOperand = this.currOperand
    this.currOperand = ''

   }

   compute(){
    let computation
    let prev = parseFloat(this.prevOperand)
    let curr = parseFloat(this.currOperand)
    if(isNaN(prev) || isNaN(curr)) return
    switch(this.operation){
        case '+': 
        computation =prev + curr
        break

        case '-':
        computation = prev - curr
        break

        case '*':
        computation = prev * curr
        break

        case '÷':
            conputation = prev/curr
            break

    }
    this.currOperand = computation
    this.operation = undefined
    this.prevOperand = ''
   }
   getDisplayNumber(number){
    let stringNumber = number.toString()
    let integerDigits = parseFloat(stringNumber.split('.')[0])
    let decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if(isNaN(integerDigits)){
        integerDisplay = ''
    }else{
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits : 0})
    }
    if(decimalDigits != null){
       return `${integerDisplay}.${decimalDigits}`
    }else{ return integerDisplay }
   }



   updateDisplay(){
    this.currOperandTextElement.innerText = this.getDisplayNumber(this.currOperand)
    if(this.operation != null){
        this.prevOperandTextElement.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
    }else {
        this.prevOperandTextElement.innerText = ''
    }
   }
}

const calc = new Calculator(prevOperandTextElement, currOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
    })
})


operationsButtons.forEach(button => {
    button.addEventListener('click' , () =>{
        calc.chooseOperation(button.innerText)
        calc.updateDisplay()
    })
})


equalsButton.addEventListener('click', () => {
    calc.compute()
    calc.updateDisplay()

})

allClearButton.addEventListener('click', () => {
    calc.clear()
    calc.updateDisplay()
})

 deleteButtton.addEventListener('click', () => {
    calc.delete()
    calc.updateDisplay()
 })