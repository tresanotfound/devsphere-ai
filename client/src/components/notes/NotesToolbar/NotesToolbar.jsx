import Button from '../../common/Button/Button';

function NotesToolbar() {

  return (
    <div className="flex flex-wrap gap-4">

      <Button>
        Save Note
      </Button>

      <Button variant="secondary">
        Export
      </Button>

      <Button>
        Generate AI Summary
      </Button>

    </div>
  );
}

export default NotesToolbar;