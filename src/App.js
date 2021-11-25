
import BaseComponent from "./components/BaseComponent";
import {createTheme, ThemeProvider, Container } from '@material-ui/core'

const theme = createTheme({
    typography: {
      fontFamily: 'Quicksand'
    }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sm={true}> 
        <div className="App">
          <main>
            <BaseComponent />
          </main>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
