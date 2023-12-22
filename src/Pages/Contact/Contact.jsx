import toast from "react-hot-toast";
import contact from "../../assets/contact.svg";

const Contact = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    e.target.reset();
    toast.success("Successfully send Message.")
  };
  
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-10 my-10 lg:my-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-[#f5f5f5] p-5">
            <h1 className="text-[#6C63FF] uppercase font-bold text-lg">
              Send Message
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <input
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <textarea
                  className="w-full py-2 px-4 my-3"
                  type="text"
                  required
                  placeholder="Type Your Message"
                />
              </div>
              <div className="mt-8">
                <button className="h-10 w-36 bg-[#6C63FF] text-white font-semibold rounded hover:bg-white hover:text-[#6C63FF] uppercase hover:border hover:border-[#6C63FF] text-sm">
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:flex justify-end hidden">
            <img className="" src={contact} alt="Loading Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
