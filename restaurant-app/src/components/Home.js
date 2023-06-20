import React, { Component } from 'react';
import NavBarManu from './NavBarManu'
class Home extends Component {
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Welcome to my resturant app</h1>
            </div>
        );
    }
}

export default Home;


// import React, { useState, useEffect } from 'react';
// import NavBarManu from './NavBarManu'
// const Home = () => {
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [login, setLogin] = useState(false);
//   const [store, setStore] = useState(null);
//   const [post, setPost] = useState('');

//   useEffect(() => {
//     storeCollector();
//   }, []);

//   const storeCollector = () => {
//     console.warn('hello from storeCollector');
//     let store = JSON.parse(localStorage.getItem('login'));
//     setStore(store);
//     if (store && store.login) {
//       setLogin(true);
//     }
//   };

//   const handleLogin = () => {
//     fetch('https://reqres.in/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ email, password })
//     }).then((resp) => {
//       resp.json().then((result) => {
//         console.warn('result', result);
//         localStorage.setItem(
//           'login',
//           JSON.stringify({
//             login: true,
//             token: result.token
//           })
//         );
//         setLogin(true);
//         storeCollector();
//       });
//     });
//   };

//   const handlePost = () => {
//     let token = 'Bearer ' + store.token;
//     console.warn(token);
//     fetch('https://reqres.in/api/posts', {
//       method: 'POST',
//       headers: {
//         authorization: token
//       },
//       body: post
//     }).then((resp) => {
//       resp.json().then((result) => {
//         console.warn('result', result);
//       });
//     });
//   };

//   return (
//     <div>
//            <NavBarManu />
//                 <h1>Home</h1>
//       {login === false ? (
//         <div>
//           <input type="text" onChange={(event) => setEmail(event.target.value)} />
//           <br />
//           <input type="password" onChange={(event) => setPassword(event.target.value)} />
//           <br />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       ) : (
//         <div>
//           <br />
//           <textarea onChange={(event) => setPost(event.target.value)}></textarea>
//           <br />
//           <button onClick={handlePost}>POST data</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
