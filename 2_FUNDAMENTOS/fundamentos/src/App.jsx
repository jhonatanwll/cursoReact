import './App.css'
import FirstComponent from "./components/FirstComponent"
import TemplateExpression from './components/TemplateExpression'

// 2 - Importação de Componente
function App() {
  // 3 - Comentários
  return <div className="App">
    {/* 3 - Comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent /> 
    <TemplateExpression />
  </div>

}

export default App
