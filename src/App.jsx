import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

const cardData = data.map(item => {
  return <Card
            key={item.id} 
            //passing item as one whole object prop
            // item={item}

            //spreading item object as props so we fundamentally use
            //this img,rating,etc. things without object nesting
            //but in one line but its a bit complex to work with
            // many 

            //syntax : {...object_name}

            {...item}

            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
        />
})

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
      {cardData}
      </section>
    </div>
  )
}

export default App
