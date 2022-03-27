import Image from 'next/image'
import CEO from "../images/ceo.png"
function Mission() {
  return (
    <div className='container my-24 px-6 mx-auto'>
  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-teal-100">
      <div className="flex flex-wrap items-center">
        <div className="lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <Image src={CEO} alt="ceo_img" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"/>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">Who are we?</h2>
            <p className="text-red-500 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas
              ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit,
              inventore rem molestias laborum repudiandae corporis pariatur quo eius iste!
              Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.
            </p>
            <p className="text-gray-500">
              Commodi ut nisi assumenda alias maxime necessitatibus ad rem repellat explicabo,
              reiciendis illum suscipit iusto? Provident dignissimos similique, reiciendis
              inventore accusantium unde mollitia, deleniti quae atque error id perspiciatis
              illum. Laboriosam aperiam ab illo dignissimos obcaecati corporis similique a odio,
              optio iste quis placeat alias amet rerum sint quos dolor pariatur inventore
              possimus ad consequuntur fugiat perferendis consectetur laudantium.
            </p>
            <h5 className='text-lg font-bold mt-4'>Gatluak Thot</h5>
            <p className='mb-6'>President & CEO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Mission