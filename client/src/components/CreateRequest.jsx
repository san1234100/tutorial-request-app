import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const requestSchema = z.object({
    technology: z.string().min(4).max(12),
    description: z.string(),
    title: z.string()
  });
const CreateRequest = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(requestSchema)
    })
    const sendToServer = (data) =>{
        console.log(data);
    }
  return (
    <div className="bg-white p-5 rounded ">
      <div>
        <h4 className="font-semibold text-xl">Create your request tutorials</h4>
        <form action=""  className="my-5 space-y-4" onSubmit={handleSubmit(sendToServer)}>
          <div>
            <label htmlFor="technology" className=" block font-medium">
              Technology
            </label>
            <select
              name="technology"
              id="technology"
              className="px-4 py-2 rounded w-full mt-1 outline-none"
              {...register('technology')}
           >
              <option value="">-- Select Technology --</option>
              <option value="java">Java</option>
              <option value="php">Php</option>
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="mysql">Mysql</option>
              <option value="angular">Angular</option>
              <option value="mongodb">Mongo Db</option>
              <option value="python">Python</option>
              <option value="javascript">Javascript</option>
            </select>
            {errors.technology && <small className="text-red-500 pt-1">{errors.technology.message}</small>}
          </div>
          <div>
            <label htmlFor="title" className=" block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the title"
              className="form-input"
              {...register('title')}
            />
          </div>
          <div>
            <label htmlFor="desc" className=" block font-medium">
              Description
            </label>
            <textarea
              type="text"
              id="desc"
              placeholder="Enter the Description"
              className="form-input"
              {...register('desc')}
            ></textarea>
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                Submit your request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequest;
