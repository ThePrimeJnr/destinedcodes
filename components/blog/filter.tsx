const Filter = () => {
  return (
    <div className="flex flex-row">
      <div>
        <h2 className="font-bold text-6xl mb-8">Blog</h2>
        <p className="max-w-xl">
          Here&apos;s a list of articles, thoughts and ideas around topics like
          design systems, accessibility, state machines and lots more.
        </p>
      </div>
      <div>
        <div>search</div>
        <div>filters</div>
      </div>
    </div>
  );
};

export default Filter;
