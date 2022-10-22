import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

// function App() {
//     const [counter, setValue] = useState(0);
//     const [keyword, setKeyword] = useState('');
//     const onClick = () => setValue((prev) => prev + 1);
//     const onChange = (event) => setKeyword(event.target.value);
//     console.log('I run all the time.');
//     useEffect(() => {
//         console.log('CALL THE API');
//     }, []);

//     useEffect(() => {
//         console.log('Search For Keyword~!!: ', keyword);
//     }, [keyword]);
//     useEffect(() => {
//         console.log('Counter~~~~~!!!!!!!!!! ', counter);
//     }, [counter]);
//     return (
//         <div className='App'>
//             <h1 className={styles.title}>Welcome back!</h1>
//             <Button text='서정익 최고!' />
//             <h2>{counter}</h2>
//             <input value={keyword} onChange={onChange} type='text' placeholder='Seach here..' />
//             <button onClick={onClick}>click me</button>
//         </div>
//     );
// }
function Hello() {
    useEffect(() => {
        console.log("I'm Here!");
        return () => console.log("I'm Out!"); //Cleanup function이라고 하며, 해당 컴포넌트가 destroy 될 때 수행되는 함수.
    }, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default App;
