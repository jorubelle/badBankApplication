// function Withdraw(){
//     const ctx = React.useContext(UserContext);
// //user context balance
// const userBalance = ctx.users[0]['balance'];

// const [show, setShow] = React.useState(true);
// const [status, setStatus] = React.useState('');
// const [balance, setBalance] = React.useState(userBalance);
// const [withdrawAmount, setWithdrawAmount] = React.useState('');



// //validate checks that the withdraw amount is above zero and below the balance
// const validate = (field) => {
//   //check for empty input field
//   if (!field) {
//     setStatus(`Error: Please enter an amount.`);
//     setTimeout(() => setStatus(''), 3000);
//     return false;
//   }
//   //check for below zero
//   if (field <= 0) {
//     setStatus(`Error: Please enter positive numbers only.`);
//     setTimeout(() => setStatus(''), 3000);
//     return false;
//   }
//   //check for greater than balance
//   if (field > balance) {
//     setStatus(`Transaction Failed! You can not withdraw more than your balance.`);
//     setTimeout(() => setStatus(''), 3000);
//     return false;
//   }
//   //check for NaN
//   if (isNaN(field)) {
//     setStatus(`Error: Please enter numerical values only.`);
//     setTimeout(() => setStatus(''), 3000);
//     return false;
//   }
//   return true;
// }

// //handleWithdraw updates the state of balance to the balance minus the withdraw amount
// const handleWithdraw = () => {
//   //check for validation
//   if(!validate(withdrawAmount)) return;

//   //subtract withdraw amount from balance
//   console.log(`withdrawing: $ ${withdrawAmount}`);
//   setBalance(balance - withdrawAmount);

//   //update AllData
//   ctx.users[0]['balance'] = (balance - withdrawAmount);
  
//   //show success message
//   setShow(false);
// }

// const clearForm = () => {
//   setWithdrawAmount('');
//   setShow(true);
// }


// return (
//   <Card
//     bgcolor="info"
    
//     header="Withdraw" 
//     status={status}
//     body={show ? (
//         <>
//         Balance $ {userBalance}<br/><br/>
//         Withdraw Amount<br/>

//         <input type="input" className="form-control" id="withdraw"  placholder="Enter Withdraw Amount" onChange={(e) => setWithdrawAmount(e.currentTarget.value)} />
        
//         <br/>
        
//         <button type="submit" className="btn btn-dark" disabled={withdrawAmount.length > 0 ? false : true} onClick={handleWithdraw}>Withdraw</button>
//         </>
//       ):(
//         <>
//         <h5>Success!</h5>
//         <h6>
//           You have withdrawn ${withdrawAmount}.
//           <br/>
//           Your account balance is ${balance}.
//         </h6>
//         <button type="submit" className="btn btn-dark" onClick={clearForm}>Make Another Withdraw</button>
//         </>
//       )}
//   />
// );  
// };
function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle(){
    fetch(`/account/update/${email}/-${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }


  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
