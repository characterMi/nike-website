import { services } from "../constants"
import { ServiceCard } from "./"
const Services = () => {
  return (
    <section className='flex max-container justify-center flex-wrap gap-9'>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  )
}

export default Services