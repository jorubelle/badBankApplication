function AllData(){
    // const ctx = React.useContext(UserContext);
    // const userData = ctx.users;
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);
    return (<>
      <h5>All Data in Store:</h5>
      {data}
  </>);
    // return (
    
    //       <Card
    //       bgcolor="info"
          
    //       header="All Data" 
          
    //       body={(
    //         <table className="table">
    //           <thead>
    //             <tr>
    //               <th scope="col">Name</th>
    //               <th scope="col">Email</th>
    //               <th scope="col">Password</th>
    //               <th scope="col">Balance</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {data.map((user, index) => (
    //               <tr key={index}>
    //                 <td>{user.name}</td>
    //                 <td>{user.email}</td>
    //                 <td>{user.password}</td>
    //                 <td>{user.balance}</td>
    //               </tr>
    //             ))} 
    //           </tbody>
    //         </table>
    //       )}
    //       />
    // );
}