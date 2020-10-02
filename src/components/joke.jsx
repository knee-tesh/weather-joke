import React, { useState } from 'react';

export function Joke() {
    const [data, setData] = useState('');

    const getJoke = () => {
        fetch(`https://sv443.net/jokeapi/v2/joke/Any`)
        .then((result) => result.json())
        .then((data) => setData(data));
        // .catch((err) => setData({err:err}))
    }

    return (
        <div className="card text-center m-3">
            <h5 className="card-header medium"> 
                {
                    data.category ? `Category : ${data.category}` : `Click 'Get Joke' to read a Joke`
                }
            </h5>
            <div className="card-body">
                {
                    data.type === "twopart" ? 
                    <div className="joke">
                        <div className="jokeSetup">{ data.setup }</div>
                        <div className="jokeDelivery">{ data.delivery }</div>
                    </div> :
                    <div className="joke">{ data.joke }</div>
                }
            </div>
            <div className="btnContainer">
                <button className="btn btn-primary" onClick={getJoke}>Get Joke</button>
            </div>
        </div>
    );
}

// const url = `https://sv443.net/jokeapi/v2/joke/Any`;

// const getJoke = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   return data;
// }

export default Joke;