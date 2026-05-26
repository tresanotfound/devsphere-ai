function Tabs({
  tabs = [],
  activeTab,
  setActiveTab,
}) {

  return (
    <div className="flex gap-4 border-b border-gray-800">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            pb-3
            px-2
            transition-all

            ${
              activeTab === tab
                ? 'text-[#b9ff66] border-b-2 border-[#b9ff66]'
                : 'text-gray-400'
            }
          `}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}

export default Tabs;