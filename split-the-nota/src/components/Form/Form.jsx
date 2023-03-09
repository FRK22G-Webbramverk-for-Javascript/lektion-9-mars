import './Form.css'

import { useState } from 'react'

/**
 * 1. Spara summa, antal vänner, dricks från inputfält i ett state
 * 2. När jag klickar på "räkna ut" så räkna ut vad varje person ska betala
 * 3. Visa delsumma
 */

function Form(props) {
    const [sum, setSum] = useState(''); // Spara summan från inputfältet
    const [friends, setFriends] = useState(''); // Spara antalet vänner från inputfältet
    const [tip, setTip] = useState(''); // Spara dricksen från inputfältet

    // Räkna ut dricksen på summan
    function calculateTip() {
        const calculatedTip = parseInt(sum) * parseFloat(tip);
        return calculatedTip;
    }

    // Räkna ut vad varje person ska betala av den totala summan
    function divideTotal(total) {
        const sumDivided = total / parseInt(friends);
        return sumDivided;
    }  

    function handleClick() {
        const calculatedTip = calculateTip();
        const total = parseInt(sum) + calculatedTip; // Addera dricksen med summan

        const friendSum = divideTotal(total);
        
        props.updateFriendSum(friendSum); // Uppdatera friendSum i App.jsx
    }

    return (
        <section className="form">
            <section>
                <input type="text" name="sum" 
                className="form__input" 
                onChange={ (event) => { setSum(event.target.value); } } required />
                <label className="form__label form__label_sum">Summa</label>
            </section>
            <section>
                <input type="text" name="friends" 
                className="form__input" 
                onChange={ (event) => { setFriends(event.target.value); } } required />
                <label className="form__label form__label_friends">Antal vänner</label>
            </section>
            <section>
                <input type="text" name="tip" 
                className="form__input"
                onChange={ (event) => { setTip(event.target.value); } } required />
                <label className="form__label form__label_tip">Dricks</label>
            </section>
            <button className="form__button" onClick={ handleClick }>Räkna</button>
        </section>
    )
}

export default Form
