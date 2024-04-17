import inquirer from 'inquirer'

const currency :any = {
    USD : 1, // base currency
    EUR : 0.91,
    PKR : 280,
    INR : 74.57,
    GBP : 0.76,

};

let user_answer = await inquirer.prompt([
    {
        name: "From",
        message:"Enter from currency",
        type: "list",
        choices:["USD", "EUR","PKR","INR","GBP"]
    },
    {
         name: "To",
        message:"Enter to currency",
        type: "list",
        choices:["USD", "EUR","PKR","INR","GBP"]
    },
    {
         name: "amount",
        message:"Enter your amount",
        type: "number",
    }
]
)
let Fromamount = currency[user_answer.From]   //exchange rate
let Toamount = currency[user_answer.To]    //exchange rate
let amount = user_answer.amount
let baseamount= amount/ Fromamount  //usd base currency // 4
let convertedamount = baseamount * Toamount

console.log(convertedamount);