function Product(props) {
    console.log(props);
    return (
        <article>
            <h2>{ props.title }</h2>
            <h3>{ props.author }</h3>
            <p>{ props.text }</p>
            <button>Add to cart</button>
        </article>
    )
}

export default Product;