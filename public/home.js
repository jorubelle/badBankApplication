function Home(){
    
    return (
       <Card 
            bgcolor="info"
            txtcolor="black"
            header="Bad Bank Home"
            title="Welcome to the Fake Bank!"
            text="Holds all the money you can make up!"
            body={(<img src="/images/bank.png" className="img-fluid" alt="Bank Vault"/>)}
       />
    );
}