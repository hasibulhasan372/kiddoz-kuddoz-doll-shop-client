

const Toy = ({ toy }) => {
    const { name, img, price, rating, sellerName, quantity, category } = toy;
    return (
        <div className="card w-96 glass ">
            <figure ><img src={img} alt="img" className="lg:w-[250px] lg:h-[250px] object-cover lg:pt-5 text-left" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Category: {category}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Quantity: {quantity}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary capitalize">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Toy;