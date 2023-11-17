import './Textarea.css'

function Textarea({ changeValueFun, inputValue, ...props }) {

    const handleChange = (e) => {
        changeValueFun(e)
    }

    return (
        <>
            <textarea {...props}
                type={props.type}
                className={["input textarea", props.className].join(' ')}
                placeholder={props.placeholder}
                id={props.id}
                value={inputValue}
                onChange={handleChange} />
        </>
    )
}

export default Textarea