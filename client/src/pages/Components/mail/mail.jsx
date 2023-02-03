import './mail.css';

const Mailfeat=()=>
{

    return (
        
        <div className="wholemail">
            <div className='mailpart1'>
                <div className="searchmail">
                <div className="mailtext">Save time,save money!</div>
                <div className='mailtext2'>sign Up and we will send the best deals to you</div>
                <div><input type="text" placeholder="Your email" className="inputreg" /> <snap><button className="subsbttn">Subscribe</button></snap></div>
                <div>
                </div>
                    <div className='sendlink'>
                    <input type="checkbox"  className="checkbox"></input>
                    <snap>Send me a link to get the FREE Booking.com app!</snap>
                </div>
                <div><button className='propertybtn'>List Your Property</button></div>
                </div>
                <div className="mailpart2">
                    <div className='degin'>
                    <div className="linkcontainer">
                        <div className="linkitem"><a className="maillink"href="">Mobile version</a></div>
                        <div className="linkitem"><a className="maillink"href="">Your Account</a></div>
                        <div className="linkitem"><a className="maillink"href="">Make changes online to your booking</a></div>
                        <div className="linkitem"><a className="maillink"href="">Customer Service Help</a></div>
                        <div className="linkitem"><a className="maillink" href="">Become an affliliate</a></div>
                        <div className="linkitem"><a className="maillink"href="">Booking.com for Bussiness</a></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mailfeat;