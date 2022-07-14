import { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <main>
        <section className="container">
            <Counter />
        </section>
      </main>
    );
  }
}

export default App;
