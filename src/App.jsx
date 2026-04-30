import Card from "./components/Card";
import languages from "./components/data/languages";


function App() {
  return (
    <div className="container py-3 mx-auto d-flex justify-content-center">
      
      {languages.map( language => {
        const { id, title, description} = language;
        return <Card key={id}
                title = {title}
                content = {description}/>
      })}

    </div>
  );
}
export default App;
