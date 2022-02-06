const Cart =({cart,img})=>{
    return (
        <div className='projects-container'>
           
            {
                cart.map((el,i)=>{
                    return(
                        
                            <div className='project-card'>
                                {img[i]}
                             
                                <h3>{el}</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                                    aliquam.
                                </p>
                                <p><a href="#">Github Link</a></p>
                            </div>
                        
                    )
                })
            }

        </div>
    )
}
export default Cart