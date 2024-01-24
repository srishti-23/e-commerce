$(document).ready(async() => {
try{
    const response=await fetch('https://fakestoreapi.com/products')
    if(!response.ok){
        throw new Error(`Network response was not ok:${response.status} `)
    } 
    const products=await response.json();
    console.log(products);

   
    const productContainer=$('#productContainer');
    products.forEach(product => {  productContainer.append (

       `<div class="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-#d6d3d1 light:border-#d6d3d1 g-0   transition-all duration-500 hover: hover:scale-125 overflow-hidden mt-custom">
        <img class="w-full h-32 object-contain " src='${product.image}' alt="product image " />
        
      
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black truncate pb-4">${product.title}</h5>
              <div class="inline flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-black">₹${product.price}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pt-4">Add to cart</a>
                </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">${product.category}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ">${product.description}</p>
        </div>
    </div></div></div>`);
      });
    } 
    catch(error){
        console.error('Error fetching data:', error)
    }
});
   
