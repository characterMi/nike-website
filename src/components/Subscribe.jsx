import { Button } from "./"

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id="contact-us">
      <h3 className='text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold'>
        <h3>Sign up form</h3>
        <span className='text-coral-red'>Updates</span>{' '}
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder='subscribe@nike.com' className='input' />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe