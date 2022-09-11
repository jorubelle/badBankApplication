function Balance(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');
    const [balance, setBalance] = React.useState('');
    const ctx = React.useContext(UserContext);


    return (
        <Card
            bgcolor="success"
            header="Current Balance"
            status={status}
            body={show  (
                <>
                Balance $ {userBalance}<br/>

                
                
                </>
            )}

        />
    )
}