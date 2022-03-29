import "./styles.css";
import axios from "axios";

// {
//   "status": false,
//   "_id": "624329b2742b8400042a20b4",
//   "title": "Estudar",
//   "description": "Estudar javascript",
//   "date": "2022-03-29T00:00:00.000Z",
//   "__v": 0
// }

function App() {
  
  async function getTodos() {
    // const data = await fetch('');
    // const responseJSON = await data.json();
    // console.log(responseJSON);
    const data = await axios.get('');

    console.log(data);
  }
  
  return (
    <div>
      <button onClick={getTodos}>Buscar to-dos</button>
      <form>
        <input placeholder="Título" />
        <input placeholder="Descrição" />
        Status<input type="checkbox" />
        <input type="date" />
        <button>Salvar</button>
      </form>
    </div>
  );
}

export default App;
