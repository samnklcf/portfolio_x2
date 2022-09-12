import logo from './logo.svg';
import './App.css';
import {useForm} from "react-hook-form";

function App() {
  const {handleSubmit, register, formState: {errors}} = useForm()
  let tab = localStorage.getItem('tache') ? JSON.parse(localStorage.getItem('tache')) : [];
  console.table(tab)
  function onSubmit (data) {
    console.log(data)
    tab.push(data)
    localStorage.setItem("tache",JSON.stringify(data))
  }
  
  return (
    <>

      <form action="" onSubmit={handleSubmit(onSubmit)}>  
        <input type="text" placeholder='Username' {...register("name", {required: true})}/>
        {errors.name && <p>Le nom est obligé</p>}
        <input type="password" name="" id="" placeholder='Mot de passe' {...register("password")}/>
        <input type="submit" value="Valider" />
      </form>
      
    </>
  );
}

export default App;
