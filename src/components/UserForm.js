import Input from './Input';
import Button from './Button';
import useFormulario from '../hooks/useFormulario';

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: '',
    lastname: '',
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        value={formulario.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <Input
        label="Apellido"
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        placeholder="Apellido"
      />
      <Input
        label="Correo"
        name="email"
        value={formulario.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Button>Enviar</Button>
    </form>
  );
};

export default UserForm;
