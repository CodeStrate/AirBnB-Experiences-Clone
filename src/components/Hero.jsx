import photogrid from '/assets/Group77.png'

export default function Hero() {
    return (
        <section className='hero-section'>
            <img src={photogrid} alt="photogrid" className='photo-grid'/>
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--content'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}