import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <a className="border-b" href={CONTACT.email}>{CONTACT.email}</a>
        <p className="my-4">{CONTACT.phoneNo}</p>
      </div>
    </div>
  )
}

export default Contact