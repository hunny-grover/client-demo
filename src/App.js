import React from 'react';
import Button from '@mui/material/Button';
import './App.css';


function App() {
  const [isLoading, setIsLoading] = React.useState(false);

  const getCertificate = () => {
    setIsLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "itscredible eyJraWQiOiJLd0JZWEZsajdZTlB3U08rTm83cE5ZRUJSQWJtTGpZRDRHZ2Zqd2VLSlVnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhNmFoNG1rZnBhOGFjNW1rdWtybG1qdGZ1IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJyc1wvcmVhZCIsImF1dGhfdGltZSI6MTY4MTk2ODE2MSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVE1kTzY3ZkhMIiwiZXhwIjoxNjgxOTcxNzYxLCJpYXQiOjE2ODE5NjgxNjEsInZlcnNpb24iOjIsImp0aSI6IjhiNWVjZjNkLWQ5ZjctNGU5NC04NDgzLTY5OTdiNTAxYTZhNiIsImNsaWVudF9pZCI6ImE2YWg0bWtmcGE4YWM1bWt1a3JsbWp0ZnUifQ.SSqPa2dMYrEylp6rrLIAHRadd7Wf6vFriHm1TQXtWB3kLpsoCxuXNicDIMlHLY4INNcPq2SW2wmcgw8Np_rZsAK5iU0JzWOBTrzwYQsYWwB9ZBIWRdXpgUvT9z_6a3euWXcowDsR7bNSR1-kll7hNmtnecEfVGTJL_c4dAjAo4XnnJuGw_M0Pu53HoszBPTgi-hU5ie_rknTiJ9WFKE4166Bs3aPn3RQ6kP6gPgHM5OTND9LmQXY91Sth4qCMXAOmF53auyJxrCI6zfBf19b-kRpvYHCEQJc9E1W2rqmhx1fIEFqfuoBKMMw7z7-5vLdcTOrQmVU_nju4KZaqZjq6Q");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "templateId": "63e472e71b2df9001dd7aa65",
      "csvData": [
        [
          {
            "value": "Name"
          },
          {
            "value": "Email Address"
          }
        ],
        [
          {
            "value": "Himanshu"
          },
          {
            "value": "himanshu.gosharpner@yopmail.com"
          }
        ]
      ],
      "mappedFileNameColumn": "Name"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://portal.itscredible.com/api/v1/docs/createAndSign", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setIsLoading(false);
        window.open(result.data.signedDocs[0].docUrl);
      })
      .catch(error => console.log('error', error));

  }

  return (
    <>
      <header>
        <div class="header-container">
          <img src="https://www.edubridgeindia.com/public/assets/images/newhmplogo.png" width="100" />
        </div>
        <hr style={{margin: 0, opacity: 0.5}}/>
      </header>
      <div class="container">
        <h1>Hi Himanshu</h1>
        <h1>🎉 Congratulation to complete your certificate.</h1>
        <p>Please click on following button to get certificate.</p>
        <br />
        <Button variant="contained" onClick={getCertificate}>{isLoading ? 'Generating' : 'Get Certificate'}</Button>
      </div>
    </>
  );
}

export default App;
