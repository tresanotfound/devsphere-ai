function Tags() {

  const tags = [
    'React',
    'AI',
    'Backend',
    'MongoDB',
  ];

  return (
    <div className="flex flex-wrap gap-3">

      {tags.map((tag, index) => (

        <div
          key={index}
          className="
            px-4
            py-2
            rounded-full
            bg-[#b9ff66]
            text-black
            font-semibold
          "
        >
          {tag}
        </div>

      ))}

    </div>
  );
}

export default Tags;