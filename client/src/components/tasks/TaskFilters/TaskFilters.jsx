import Dropdown from '../../common/Dropdown/Dropdown';

function TaskFilters() {

  return (
    <div className="flex gap-4">

      <Dropdown
        options={[
          'All',
          'Pending',
          'In Progress',
          'Completed',
        ]}
      />

      <Dropdown
        options={[
          'Low Priority',
          'Medium Priority',
          'High Priority',
        ]}
      />

    </div>
  );
}

export default TaskFilters;