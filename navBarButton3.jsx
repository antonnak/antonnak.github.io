// Ex 3 - write out all items with their stock number
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// use React.useState to keep track of Stock items
// list out the Cart items in another column
function  NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  // event apple:2
  const moveToCart = (e) => {
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3
    // use newStock = stock.map to find "name" and decrease number in stock by 1
    // only if instock is >=  do we move item to Cart and update stock
    if (num > 0) {
      let selectedProduct = stock.filter((item, index) => {
        if (item.name == name) return item;
      });
      setCart([...cart, ...selectedProduct]);
      let newStock = stock.map((item, index) => {
      if (item.name == name) item.instock--;
      return item;
    });
    setStock([...newStock]);ß
  }
};

const updatedList = menuItems.map((item, index) => {
    return (
      <Button id={item.name} onClick={moveToCart} key={index}>
        {item.name}:{item.instock}
      </Button>
    );
  });

console.log(updatedList);
  // note that React needs to have a single Parent
return (
    <>
      <ul key="stock" style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}>Cart Items</Cart>     
    </>
  );
}

function Cart ({cartitems}) {
  const { Button } = ReactBootstrap;
  console.log('rendering Cart');
  const updatedList = cartitems.map((item, index) => {
    return (
      <Button id={item.name} key={index}>{item.name}</Button>
    )
    });
  return (
    <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">{updatedList}</ul> 
  );
  }

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];

ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
