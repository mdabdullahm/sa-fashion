import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function page() {
  return (
    <div className=" pt-20 md:pt-48">
      <ContactForm/>
      <ContactMap/>
    </div>
  )
}
