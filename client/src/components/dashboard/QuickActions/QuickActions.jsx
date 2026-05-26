import Button from '../../common/Button/Button';
import Card from '../../common/Card/Card';

function QuickActions() {

  return (
    <Card>

      <h2
        className="
          text-2xl
          font-bold
          text-white
          mb-6
        "
      >
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Button>
          Create Task
        </Button>

        <Button variant="secondary">
          Generate AI Notes
        </Button>

        <Button>
          Add Project
        </Button>

        <Button variant="secondary">
          Invite Team
        </Button>

      </div>

    </Card>
  );
}

export default QuickActions;