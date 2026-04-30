import Card from "./components/Card";
import languages from "./data/languages";


function App() {
  return (
    <div className="container py-3 mx-auto d-flex justify-content-center">
      <div className="row row-cols-1 gap-4 px-4">
        {languages.map(language => {
          const { id, title, description } = language;
          return <Card key={id}
            title={title}
            content={description} />
        })}
      </div>
    </div>
  );
}
export default App;
