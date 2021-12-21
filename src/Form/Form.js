import './Form.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

function Form() {
    let name = '';
    let email = '';

    const handleChangeName = (event) => {
        name = event.target.value;
    }

    const handleChangeEmail = (event) => {
        email = event.target.value;
    }

    const handleButtonClick = (event) => {
        console.log('clicou!');
    }

    return (
        <form>
            <Input label="Nome: " type="text" name="name" onChange={handleChangeName}/>
            <Input label="E-mail: " type="email" name="email" onChange={handleChangeEmail}/>

            <div className="actions">
                <Button text="Cadastrar" onClick={handleButtonClick}/>
            </div>
        </form>
    );
}

export default Form;