import { useState, useEffect } from 'react';
import SideMenuItem from './SideMenuItem';
import ApiConnect from './ApiConnect';

function SideMenu() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchProductList()
        fetchCategoryList()
    }, [])

    function fetchProductList() {
        ApiConnect.get('product/')
        .then(
            res => {
                setProducts(res.data.products)
            }
        ).catch(
            err => {
                alert(err)
            }
        )
    }

    function fetchCategoryList() {
        ApiConnect.get('category/')
        .then(
            res => {
                setCategories(res.data.categories)
            }
        ).catch(
            err => {
                alert(err)
            }
        )
    }

    return(
        <aside className="bd-sidebar">
            <nav className=" bd-links" id="bd-docs-nav" aria-label="Docs navigation">
                <ul className="list-unstyled mb-0 py-3 pt-md-1">
                    {/* サイドメニューの項目を表示 */}
                    {(categories.filter(category => category.name != '')).map((category) => {
                        let category_products = (products.filter(product => product.category_id == category.category_id))
                        return (
                            <SideMenuItem id={category.category_id} name={category.name} products={category_products}/>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default SideMenu;
