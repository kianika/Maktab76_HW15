import { Component } from 'react';

class List extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className='container'>
        {countries.map((country) => {
          const { id, name, capital } = country;
          return (
            <section key={id} className='card'>
              <h4>{name}</h4>
              <p>{capital}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default List;
