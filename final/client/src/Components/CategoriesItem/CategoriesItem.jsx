import './CategoriesItem.scss';

const CategoriesItem = (props) => {
    const { onClick, category, name, imageUrl, price, discount, rank } = props;
    let newPrice;
    if (discount) {
        newPrice = Math.floor(price * (1 - discount));
    }

    return (
        <section className="CategoriesItem" onClick={onClick}>
            <span className="CategoriesItem__name">{category}</span>
            <div className="CategoriesItem__img" style={{ background: `#F9F8F8 url(${imageUrl}) no-repeat center center / cover` }}></div>
            <h6 className="title CategoriesItem__product-name">{name}</h6>
            <div className="CategoriesItem__product-info">
                <div className="CategoriesItem__old-price">{discount ? `$${price}.00` : ''}</div>
                <div className="CategoriesItem__new-price">{discount ? `$${newPrice}.00` : `$${price}.00`}</div>
                <div className="CategoriesItem__rating">{"⭐".repeat(rank)}</div>
            </div>
        </section>
    );
}

export default CategoriesItem;