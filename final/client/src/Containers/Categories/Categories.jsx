import './Categories.scss';
import CategoriesItem from '../../Components/CategoriesItem/CategoriesItem';

import { useSelector } from 'react-redux';
import { selectDisplayedItemsInCategories } from '../../redux/slices/products';


const Categories = () => {

   
    const displayedItems = useSelector(selectDisplayedItemsInCategories);
    // const { items } = useSelector(state => state.products);
    // console.log(items);


    return (
        <section className="Categories">
            <div className="container">
                <div className='title-label Categories__title-label'>Categories</div>
                <h2 className="title Categories__title">Our Products</h2>
                <div className="Categories__wrap-items">
                    {displayedItems.map((item) => (
                        <CategoriesItem key={item._id} {...item} />
                    ))}
                </div>
                <button className='btn btn_gray Categories__btn'>Load More</button>
            </div>
        </section>
    );
}

export default Categories;