const Profile =({name})=>{
    return(
        <section id="about-me">
        <h1>
            Hello, my name is
            <span className='rotate text-important'>{name}</span>,<br />
            and i make horrible websites.
        </h1>
        <img className='avatar' src='/res/John-Doe.jpg' alt='error on john'/>
    </section>
    )
}
export default Profile