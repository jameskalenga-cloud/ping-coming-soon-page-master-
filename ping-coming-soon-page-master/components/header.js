import Image from "next/image"


const Header = ()=>{
    return <>
            <div className="header_">
            <Image alt="logo" src="/logo.svg" width={120} height={40}></Image>
            <p className="launch">We are launching <span className="soon">soon!</span> </p>
            <p className="subscribe">Subscribe and get notified</p>

            <div className="mail_button">
                <input className="mail" type="email" id="email" name="email" required placeholder="Your email address..."/>  
                <button className="button_notify"> Notify Me</button>
            </div>
            
       





            </div>
    
           </>
}


export default Header