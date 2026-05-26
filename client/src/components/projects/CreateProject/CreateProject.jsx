import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

function CreateProject() {

  return (
    <div
      className="
        bg-gray-900
        p-6
        rounded-2xl
        border
        border-gray-800
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Create Project
      </h2>

      <div className="space-y-5">

        <Input placeholder="Project Name" />

        <Input placeholder="Project Description" />

        <Button className="w-full">
          Create Project
        </Button>

      </div>

    </div>
  );
}

export default CreateProject;