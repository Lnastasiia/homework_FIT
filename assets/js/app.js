
let arrtaxIncome = [0, 9950, 40525, 86375, 164925, 209425, 523600, Infinity];
let arrtaxRate = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
let Deduction = 12550;




let Sum = +prompt('Enter your income');
let taxAmount = 0;
let sumTax = Sum - Deduction;   
    
    
if(sumTax <= 0){
        
    taxAmount = 0;
    console.log(`${taxAmount}usd`)
}else{

    for(let i = 0; i < arrtaxIncome.length; i++){
        let firstTaxCategory = arrtaxIncome[i];
        let lastTaxCategory = arrtaxIncome[i+1];
        let taxRate = arrtaxRate[i];

            if(sumTax > lastTaxCategory){
                taxAmount = taxAmount + ((lastTaxCategory - firstTaxCategory) * taxRate);
                console.log(`Tax in category - ${taxAmount} usd`);
            }else{
                taxAmount = taxAmount + ((sumTax - firstTaxCategory) * taxRate);
                break;
            }


        }
    }
console.log(`Federal income tax - ${taxAmount} usd`);
