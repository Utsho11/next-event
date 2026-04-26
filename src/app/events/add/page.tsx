import AddEventForm from "@/components/events/AddEventForm";

const Page=()=>{
  return(
    <div className='bg-[#E2E8F0]'>
      <div className='text-center py-10'>
        <h1 className="text-3xl font-semibold text-black">Create New event</h1>
        <h3 className="text-md text-stone-500 my-4">Fill in the details below to launch your next professional gathering.</h3>
      </div>
        <AddEventForm/>
    </div>
  )
}

export default Page;