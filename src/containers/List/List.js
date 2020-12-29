import ListItem from "../../components/ListItem/ListItem";

import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
import pic4 from "../../assets/4.jpg";
import pic5 from "../../assets/5.jpg";

import "./List.css";

const products = [
    { id: 0, img: pic1, title: "Title 1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { id: 1, img: pic2, title: "Title 2", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { id: 2, img: pic3, title: "Title 3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { id: 3, img: pic4, title: "Title 4", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { id: 4, img: pic5, title: "Title 5", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
];

function List() {
    return (
        <div className="List">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <ListItem data={product} />
                    </div>
                );
            })}
        </div>
    );
}

export default List;
