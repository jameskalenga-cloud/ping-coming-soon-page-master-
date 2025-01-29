import Image from "next/image"


const Footer = ()=>{
    return <>
    <div className="footer_section">

        <div className="images">
            <Image className ="socials" src="/logo-facebook.svg" alt="social media" width={25} height={25}></Image>
            <Image className ="socials" src="/logo-twitter.svg" alt="social media" width={25} height={25}></Image>
            <Image className ="socials" src="/logo-instagram.svg" alt="social media" width={25} height={25}></Image>
        </div>

        <p className="footer_text">&copy; Copyright Ping. All rights reserved.</p>

    </div>
    
    </>
}

export default Footer