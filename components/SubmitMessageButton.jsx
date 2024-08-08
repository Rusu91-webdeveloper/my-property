import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

const SubmitMessageButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="submit"
      disable={pending}
    >
      <FaPaperPlane className="mr-2" />{" "}
      {pending ? "sending..." : "send message"}
    </button>
  );
};

export default SubmitMessageButton;
