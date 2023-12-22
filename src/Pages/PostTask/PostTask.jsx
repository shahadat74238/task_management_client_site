import useAxios from "../../Hooks/useAxios";

const PostTask = () => {
  const axios = useAxios();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const des = form.des.value;
    const priority = form.priority.value;
    const date = form.date.value;
    const status = "Todo";

    const task = {
      title,
      des,
      date,
      priority, 
      status
      
    };
    console.log(task);

    await axios.post("/task", task)

  };

  return (
    <div className="bg-blue-300">
      <div className="">
        <div className=" ">
          <h1 className="text-3xl pt-10 text-white font-bold text-center uppercase">
            Post New Task
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="w-5/6 mx-auto">
            <div className="   lg:py-16 p-5 lg:px-32 space-y-8">
              <form onSubmit={handleSubmit}>
                <div className=" ">
                  <div className="pb-6">
                    <p className="pb-4">Title</p>
                    <input
                      className="block w-full py-3 px-[1rem]"
                      type="text"
                      required
                      name="title"
                      placeholder="Enter watch image URL"
                    />
                  </div>
                  <div className=" md:flex  gap-6">
                    <div className="pb-6 flex-1">
                      <p className="pb-4">Death Line</p>
                      <input
                        className="block w-full py-3 px-[1rem]"
                        type="date"
                        required
                        name="date"
                        placeholder="Enter watch name"
                      />
                    </div>
                    <div className="pb-6 flex-1">
                      <p className="pb-4">Priority</p>

                      <select
                        className="select w-full rounded-none"
                        required
                        name="priority"
                      >
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                        
                      </select>
                    </div>
                  </div>
                  <div className="pb-6">
                    <p className="pb-4">Description</p>
                    <textarea
                      className="block w-full py-3 px-[1rem]"
                      type="text"
                      required
                      name="des"
                      placeholder="Enter watch image URL"
                    />
                  </div>
                </div>

                <div className="flex justify-center  my-5">
                  <input
                    type="submit"
                    value="Post New Task"
                    className="w-full uppercase btn-outline btn text-lg text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTask;
