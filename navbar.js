function NavBar(){
    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
      });
    return (
<>
    <nav className="navbar navbar-expand-lg bg-light">
      
        <a className="navbar-brand" href="#">Bad Bank </a>
        
       
    
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#/" role="tab" aria-controls="home" aria-selected="true">Home</a>
  
  </li>
  <li className="nav-item">
    <a className="nav-link" id="account-tab" data-toggle="tab" href="#CreateAccount/" role="tab" aria-controls="account" aria-selected="false">Create Account</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="deposit-tab" data-toggle="tab" href="#/deposit/" role="tab" aria-controls="deposit" aria-selected="false">Deposit</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="withdraw-tab" data-toggle="tab" href="#/withdraw/" role="tab" aria-controls="withdraw" aria-selected="false">Withdraw</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="alldata-tab" data-toggle="tab" href="#/alldata/" role="tab" aria-controls="alldata" aria-selected="false">All Data</a>
  </li>
</ul>

</nav>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div className="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab"></div>
  <div className="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab"></div>
  <div className="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab"></div>
  <div className="tab-pane fade" id="alldata" role="tabpanel" aria-labelledby="alldata-tab"></div>
</div>

 

    
          
        
   


</>
    );
   
}
