import './ShowSum.css'

function ShowSum(props) {
console.log(props);
  return (
    <section className="show-sum" >
        <article>
            <h2>Varje person ska betala</h2>
            <h3 className="show-sum__price">{ props.sum }</h3>
        </article>
    </section>
  )
}

export default ShowSum
