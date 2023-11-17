import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input/Input.jsx'
import Button from './components/Button/Button.jsx'
import Textarea from './components/Textarea/Textarea.jsx'
import { addTask } from './actions.js'

function App() {

    const [text, setText] = useState('')
    const [contact, setContact] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const sendForm = async () => {
        if (text === '' || contact === '') {
            setError('Все поля должны быть заполнены.')
        }
        else {
            const response = await addTask(text, contact)
            if (response.status === 201) {
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2000)
                setText('')
                setContact('')
            }
        }
    }

    useEffect(() => {
        setError('')
    }, [text, contact])

    return (
        <div className="ctn">
            <div className='form'>
                <h1 className="form-title">Опишите свою проблему</h1>
                <Textarea placeholder='Суть' inputValue={text} changeValueFun={(e) => setText(e.target.value)} />
                <Input placeholder='Контакты' inputValue={contact} changeValueFun={(e) => setContact(e.target.value)} />
                <p className={["registration-alternate-description error-massage", error ? '' : 'error-massage-hidden'].join(' ')}>{error}</p>
                <p className={["registration-alternate-description error-massage error-massage-success", success ? '' : 'error-massage-hidden'].join(' ')}>Успешно отправлено</p>
                <Button handleClick={sendForm}>Отправить</Button>
            </div>
        </div>
    )
}

export default App
