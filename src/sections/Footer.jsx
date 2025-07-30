import { mySocials } from "../constants"
const Footer = () => {
  return <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-neutral-400 c-space">
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        <div className="flex gap-2">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
        <div className="flex gap-3">{mySocials.map((mySocial, index) => (
            <a href={mySocial.href} key={index}>
                <img src={mySocial.icon} className="w-5 h-5" alt={mySocial.name} />
            </a>
        ))}</div>
        <p>© {new Date().getFullYear()} Asif. All rights reserved.</p>

  </section>
}

export default Footer
