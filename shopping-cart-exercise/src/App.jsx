import './App.css'

import Header from './components/Header/Header'
import Product from './components/Product/Product'

function App() {
  const bookProducts = [
    { id: 1, title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 2, title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 3, title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
    { id: 4, title: 'The Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum' },
  ]

  const productComponents = bookProducts.map((bookProduct) => {
    return <Product title={ bookProduct.title } author={ bookProduct.author } text={ bookProduct.text } key={ bookProduct.id } />
  });

  console.log(productComponents);
  return (
    <div className="App">
      <Header />
      <section>
        { productComponents }
      </section>
    </div>
  )
}

export default App
