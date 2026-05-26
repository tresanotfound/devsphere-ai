import Button from '../../common/Button/Button';

function AIPromptInput() {

  return (
    <div className="flex gap-4">

      <input
        type="text"
        placeholder="Ask AI anything..."
        className="
          flex-1
          px-5
          py-4
          rounded-xl
          bg-gray-800
          text-white
          border
          border-gray-700
          focus:outline-none
          focus:border-[#b9ff66]
        "
      />

      <Button>
        Generate
      </Button>

    </div>
  );
}

export default AIPromptInput;