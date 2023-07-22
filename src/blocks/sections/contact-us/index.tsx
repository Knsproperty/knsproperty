export default function ContactUs() {
  return (
    <section
      className="min-h-screen bg-cover "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb3BlcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")',
      }}
    >
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold capitalize lg:text-4xl text-white">
                Contact Form Property
              </h1>
              <p className="max-w-xl mt-6 text-white">
                To provide a seamless user experience, the contact form has been
                thoughtfully designed with a clean and intuitive layout. It
                offers an easy way for users to get in touch with us. Whether
                you have a query, feedback, or need assistance, our contact form
                is here to assist you.
              </p>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-gray-700 ">
                  Contact form
                </h1>
                <p className="mt-2 text-gray-500 ">
                  Ask us everything and we would love to hear from you
                </p>
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 font-heading font-semibold ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 font-heading font-semibold ">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 font-heading font-semibold ">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
